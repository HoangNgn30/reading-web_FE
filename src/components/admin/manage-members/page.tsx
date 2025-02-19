import React, { useEffect, useState, useCallback } from 'react';
import { Table, Button, message, Modal, Form, Input, Checkbox, Flex, Select } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';

import { toast } from 'react-toastify';
import HeaderAdmin from '../Header';
import AdminLayout from '../layout';

export default function ManageMembers() {
    const { Option } = Select;
    const [isView, setIsView] = useState(false);
    const [classes, setClasses] = useState([]);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [isBulkDeleteMode, setIsBulkDeleteMode] = useState(false);
    const [isDeleteAllMode, setIsDeleteAllMode] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [classIdToDelete, setClassIdToDelete] = useState(null);
    const [form] = Form.useForm();
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [studentList, setStudentList] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });
    const [studentPagination, setStudentPagination] = useState({
        current: 1,
        pageSize: 10,
    });
    const [isTransferModalVisible, setIsTransferModalVisible] = useState(false);
    const [selectedClassForTransfer, setSelectedClassForTransfer] = useState(null);
    const [selectedStudentIds, setSelectedStudentIds] = useState([]);
    const rowSelection = {
        selectedRowKeys: selectedStudentIds,
        onChange: (selectedRowKeys) => {
            setSelectedStudentIds(selectedRowKeys);
        },
    };

    const handleCancelTransfer = () => {
        setIsTransferModalVisible(false);
        setSelectedClassForTransfer(null);
    };

    const handleConfirmChangeClass = () => {
        try {
            setIsTransferModalVisible(false);
            setIsViewModalVisible(false);
            setLoading(true);
            toast.success('Chuyển lớp thành công!');
            fetchClasses();
            setSelectedStudentIds(null);
            setSelectedClassForTransfer(null);
        } catch (error) {
            console.log(error);
            toast.error('Chuyển lớp thất bại, vui lòng thử lại!');
        }
    };

    const fetchClasses = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getAllClassPageable({
                page: pagination.current,
                pageSize: pagination.pageSize,
            });
            setClasses(response?.student_class || []);
            setTotal(response?.total_data);
            setPagination((prev) => ({
                ...prev,
                total: response?.total_data,
            }));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [pagination.current, pagination.pageSize]);

    useEffect(() => {
        fetchClasses();
    }, [currentPage, pageSize, fetchClasses]);

    const handleTableChange = (paginationConfig) => {
        setPagination({
            ...pagination,
            current: paginationConfig.current,
            pageSize: paginationConfig.pageSize,
        });
    };

    const handleStudentTableChange = (pagination) => {
        setStudentPagination({
            current: pagination.current,
            pageSize: pagination.pageSize,
        });
    };

    const handleDeleteClass = async () => {
        setSelectedRowKeys([]);
        try {
            await deleteClass(classIdToDelete);
            setIsDeleteModalOpen(false);
            setClasses((prevClasses) => prevClasses.filter((classItem) => classItem.id !== classIdToDelete));
            setClassIdToDelete(null);
            fetchClasses();
            message.success('Xóa lớp thành công!');
        } catch (error) {
            message.error('Xóa lớp thất bại!');
        }
    };

    const handleDeleteSelected = async () => {
        try {
            for (const classId of selectedRowKeys) {
                await deleteClass(classId);
            }
            setClasses((prevClasses) => prevClasses.filter((classItem) => !selectedRowKeys.includes(classItem.id)));
            setSelectedRowKeys([]);
            setIsDeleteModalOpen(false);
            fetchClasses();
            message.success('Xóa các lớp đã chọn thành công!');
        } catch (error) {
            message.error('Xóa các lớp thất bại!');
        }
    };

    const handleDeleteAll = async () => {
        try {
            await deleteAllClass();
            setIsDeleteModalOpen(false);
            fetchClasses();

            message.success('Xóa lớp thành công!');
        } catch (error) {
            message.error('Xóa lớp thất bại!');
        }
    };

    const handleAddClass = async (values) => {
        try {
            await createClass(values);
            setClasses((prevClasses) => [...prevClasses, { id: Math.random(), ...values }]);
            message.success('Thêm lớp thành công!');
            setIsAddModalVisible(false);
            form.resetFields();
        } catch (error) {
            message.error('Lớp đã tồn tại');
        }
    };

    const handleEditClass = async (values) => {
        try {
            const success = await updateClass(selectedClass.id, values);
            if (success) {
                message.success('Cập nhật lớp học thành công!');
                setIsEditModalVisible(false);
                fetchClasses();
            } else {
                message.error('Cập nhật lớp học thất bại!');
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật lớp:', error);
            message.error('Đã xảy ra lỗi khi cập nhật lớp!');
        }
    };

    const handleSearch = async (value) => {
        setSearchName(value);
        try {
            const response = await getAllClass();
            const filteredClasses = response?.data.filter((classItem) =>
                classItem.class_name.toLowerCase().includes(value.toLowerCase()),
            );
            setClasses(filteredClasses);
        } catch (error) {
            message.error('Tìm kiếm thất bại!');
        }
    };

    const openEditModal = (classItem) => {
        setSelectedClass(classItem);
        setIsEditModalVisible(true);
        form.setFieldsValue(classItem);
    };

    const openViewModal = async (classItem) => {
        try {
            const response = await getStudentByClassId(classItem.id);
            setStudentList(response?.data?.students || []);
            setSelectedClass({
                ...classItem,
                className: response?.data?.class_name,
            });
            setIsViewModalVisible(true);
        } catch (error) {
            message.error('Không thể tải danh sách sinh viên!');
        }
    };

    const studentColumns = [
        // id danh so tu 1
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            render: (text, record, index) => index + 1,
        },

        {
            title: 'Mã học sinh',
            dataIndex: 'student_code',
            key: 'student_code',
            align: 'center',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'full_name',
            key: 'full_name',
            align: 'center',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'date_of_birth',
            key: 'date_of_birth',
            align: 'center',
            render: (date) => new Date(date).toLocaleDateString('vi-VN'),
        },
        {
            title: 'Giới tính',
            dataIndex: 'sex',
            key: 'sex',
            align: 'center',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            align: 'center',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone_number',
            key: 'phone_number',
            align: 'center',
            // render: (phone_number) => '0' + phone_number,
        },
    ];

    const handleExportExcel = (students, className) => {
        students = studentList || [];
        console.log(students);
        const data = students.map((student) => ({
            'Mã sinh viên': student.student_code,
            'Họ và tên': student.full_name,
            'Số diện thoại': student.phone_number,
            Email: student.email,
            'Giới tính': student.sex,
            'Ngày sinh': student.date_of_birth,
            // Thêm các trường khác tùy theo columns của bạn
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'DanhSachSinhVien');

        // Tự động điều chỉnh độ rộng cột
        const colWidths = Object.keys(data[0]).map((key) => ({
            wch: Math.max(key.length, ...data.map((item) => String(item[key]).length)),
        }));
        ws['!cols'] = colWidths;

        XLSX.writeFile(wb, `DanhSachSinhVien_${className || ''}.xlsx`);
    };

    const columns = [
        {
            title: (
                <Checkbox
                    checked={selectedRowKeys.length === classes.length && classes.length > 0}
                    indeterminate={selectedRowKeys.length > 0 && selectedRowKeys.length < classes.length}
                    onChange={(e) => {
                        const isChecked = e.target.checked;
                        setSelectedRowKeys(isChecked ? classes.map((classItem) => classItem.id) : []);
                    }}
                />
            ),
            key: 'select',
            align: 'center',
            render: (_, record) => (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Checkbox
                        checked={selectedRowKeys.includes(record.id)}
                        onChange={(e) => {
                            const isChecked = e.target.checked;
                            setSelectedRowKeys((prev) =>
                                isChecked ? [...prev, record.id] : prev.filter((key) => key !== record.id),
                            );
                        }}
                    />
                </div>
            ),
        },
        {
            title: 'Tên lớp',
            dataIndex: 'class_name',
            key: 'class_name',
            sorter: (a, b) => a.class_name.localeCompare(b.class_name),
            sortDirections: ['descend', 'ascend'],
            align: 'center',
        },
        {
            title: 'Số lượng học sinh',
            dataIndex: 'total_students',
            key: 'total_students',
            sorter: (a, b) => a.total_students - b.total_students,
            sortDirections: ['descend', 'ascend'],
            align: 'center',
        },
        {
            title: 'Email chủ nhiệm',
            dataIndex: 'email_chu_nhiem',
            key: 'email_chu_nhiem',
            sorter: (a, b) => a.email_chu_nhiem - b.email_chu_nhiem,
            sortDirections: ['descend', 'ascend'],
            align: 'center',
        },
        {
            title: 'Thao tác',
            key: 'actions',
            align: 'center',
            render: (_, record) => (
                <div className="flex justify-center gap-2">
                    <Button
                        type="primary"
                        onClick={() => {
                            openViewModal(record);
                            setIsView(true);
                        }}
                        className="shadow-none flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white p-0"
                    >
                        <EyeOutlined className="text-white" />
                    </Button>

                    <Button
                        type="primary"
                        className="shadow-none flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-white p-0"
                        onClick={() => openEditModal(record)}
                    >
                        <EditOutlined className="" />
                    </Button>

                    <Button
                        type="primary"
                        danger
                        onClick={() => {
                            setClassIdToDelete(record.id);
                            setIsDeleteModalOpen(true);
                            setIsBulkDeleteMode(false);
                            setIsDeleteAllMode(false);
                        }}
                        className="shadow-none flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white p-0"
                    >
                        <DeleteOutlined className="text-white" />
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <AdminLayout>
            <div className="p-4 overflow-auto max-w-[calc(100vw-50px)] mt-20"></div>
            {/* <div className="p-4 overflow-auto max-w-[calc(100vw-50px)] bg-gradient-to-br from-blue-300 via-green-200 to-yellow-200 rounded-lg shadow-lg border-2 border-blue-400"> */}

            <div className="mb-4 flex justify-between flex-wrap gap-3 items-center">
                <Flex gap={10}>
                    <Button type="primary" className="shadow-none" onClick={() => setIsAddModalVisible(true)}>
                        <PlusCircleOutlined />
                        Tạo
                    </Button>
                    <Button
                        type="primary"
                        danger
                        onClick={() => {
                            setIsBulkDeleteMode(true);
                            setIsDeleteModalOpen(true);
                        }}
                        disabled={selectedRowKeys.length === 0}
                    >
                        Xoá
                    </Button>
                </Flex>

                <div className="flex gap-2 items-center">
                    <Input.Search
                        placeholder="Tìm kiếm theo tên lớp"
                        value={searchName}
                        onChange={(e) => {
                            setSearchName(e.target.value);
                            handleSearch(e.target.value);
                        }}
                        style={{ width: 200 }}
                    />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '16px',
                    marginTop: '20px',
                    justifyContent: 'space-between',
                }}
            >
                <Button
                    type="primary"
                    danger
                    onClick={() => {
                        setIsDeleteAllMode(true);
                        setIsDeleteModalOpen(true);
                    }}
                >
                    Xoá tất cả
                </Button>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    <span
                        style={{
                            color: '#2563EB',

                            fontSize: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontWeight: 'bold',
                        }}
                    >
                        QUẢN LÝ LỚP
                    </span>
                </div>
                <Flex gap={8} align="center" justify="center">
                    <span style={{ fontWeight: 'bold' }}>Tổng số:</span>
                    <Input
                        style={{
                            width: '60px',
                            color: 'red',
                            fontWeight: 'bold',
                        }}
                        value={classes.length}
                        readOnly
                        disabled
                    />
                </Flex>
            </div>
            <Table
                loading={loading}
                columns={columns}
                dataSource={classes}
                rowKey="id"
                pagination={{
                    current: pagination.current,
                    pageSize: pagination.pageSize,
                    showSizeChanger: true,
                    pageSizeOptions: ['5', '10', '20', '50'],
                    onChange: (page, pageSize) => {
                        setCurrentPage(page);
                        setPageSize(pageSize);
                    },
                    total: pagination.total,
                }}
                onChange={handleTableChange}
            />
            {/* Modal Thêm Lớp */}
            <Modal
                title="Thêm lớp"
                open={isAddModalVisible}
                onCancel={() => {
                    setIsAddModalVisible(false);
                    setIsView(false);
                    form.resetFields();
                }}
                onOk={() => form.submit()}
                footer={isView ? null : undefined}
            >
                <Form form={form} layout="vertical" onFinish={handleAddClass}>
                    <Form.Item
                        label="Tên lớp"
                        name="class_name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên lớp!' }]}
                    >
                        <Input placeholder="Nhập tên lớp" />
                    </Form.Item>
                    <Form.Item label="Email chủ nhiệm" name="email_chu_nhiem">
                        <Input placeholder="Nhập email chủ nhiệm" />
                    </Form.Item>
                </Form>
            </Modal>

            {/* Modal Chỉnh Sửa */}
            <Modal
                title="Chỉnh sửa thông tin lớp"
                open={isEditModalVisible}
                onCancel={() => {
                    setIsEditModalVisible(false);
                    form.resetFields();
                }}
                onOk={() => form.submit()}
            >
                <Form form={form} layout="vertical" onFinish={handleEditClass}>
                    <Form.Item
                        label="Tên lớp"
                        name="class_name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên lớp!' }]}
                    >
                        <Input placeholder="Nhập tên lớp" />
                    </Form.Item>

                    <Form.Item label="Email chủ nhiệm" name="email_chu_nhiem">
                        <Input placeholder="Nhập email chủ nhiệm" />
                    </Form.Item>
                    {/* 
                    <Form.Item label="Số lượng học sinh" name="total_students">
                        <Input disabled />
                    </Form.Item> */}
                </Form>
            </Modal>

            {/* Modal view hoc sinh */}
            <Modal
                title={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingRight: '25px',
                            paddingBottom: '6px',
                        }}
                    >
                        <Flex gap={24} align="center" justify="center">
                            <div>
                                <span style={{ color: 'black' }}>Danh sách học sinh lớp: </span>
                                <span style={{ color: 'red' }}>{`${selectedClass?.className || ''}`}</span>
                            </div>
                            <Button
                                onClick={() => setIsTransferModalVisible(true)}
                                type="primary"
                                disabled={!selectedStudentIds?.length}
                            >
                                Chuyển lớp
                            </Button>
                        </Flex>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>Tổng số:</span>
                            <Input
                                style={{
                                    width: '60px',
                                    color: 'red',
                                }}
                                value={studentList?.length}
                                readOnly
                                disabled
                            />
                        </div>
                    </div>
                }
                open={isViewModalVisible}
                onCancel={() => {
                    setIsViewModalVisible(false);
                    setSelectedClass(null);
                    setStudentList([]);
                    setSelectedStudentIds([]);
                }}
                footer={null}
                width={1000}
            >
                <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    <Table
                        columns={studentColumns}
                        dataSource={studentList.slice(
                            (studentPagination.current - 1) * studentPagination.pageSize,
                            studentPagination.current * studentPagination.pageSize,
                        )}
                        rowKey="id"
                        rowSelection={rowSelection}
                        pagination={{
                            current: studentPagination.current,
                            pageSize: studentPagination.pageSize,
                            total: studentList.length,
                            showSizeChanger: true,
                            pageSizeOptions: ['7', '10', '20', '50'],
                            onChange: (page, pageSize) => {
                                handleStudentTableChange({ current: page, pageSize });
                            },

                            showTotal: (total, range) => `${range[0]}-${range[1]} trên tổng ${total} học sinh`,
                        }}
                        scroll={{ x: 800 }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                    <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        onClick={() => handleExportExcel(studentList, selectedClass?.className)}
                        disabled={studentList.length === 0}
                    >
                        Tải xuống Excel
                    </Button>
                </div>
            </Modal>

            {/* Modal Xác nhận xóa */}
            <Modal
                title="Xác nhận xóa!"
                open={isDeleteModalOpen}
                onOk={() => {
                    if (isBulkDeleteMode) {
                        handleDeleteSelected();
                    } else if (isDeleteAllMode) {
                        handleDeleteAll();
                    } else {
                        handleDeleteClass();
                    }
                }}
                onCancel={() => {
                    setIsDeleteModalOpen(false);
                    setClassIdToDelete(null);
                    setIsBulkDeleteMode(false);
                    setIsDeleteAllMode(false);
                }}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setIsBulkDeleteMode(false);
                    setIsDeleteAllMode(false);
                }}
                okText="Xác nhận"
                okType="danger"
                cancelText="Hủy"
                className="z-1000"
            >
                {isDeleteAllMode
                    ? 'Bạn có chắc chắn muốn xóa tất cả các lớp? Hành động này không thể hoàn tác'
                    : isBulkDeleteMode
                    ? 'Bạn có chắc chắn muốn xóa những lớp đã chọn? Hành động này không thể hoàn tác'
                    : 'Bạn có chắc chắn muốn xóa lớp này? Hành động này không thể hoàn tác'}
            </Modal>

            {/* Modal chuyển lớp */}
            <Modal
                title="Chuyển lớp cho học sinh"
                open={isTransferModalVisible}
                onCancel={handleCancelTransfer}
                footer={null}
            >
                <Form>
                    <Form.Item label="Chọn lớp" name="class">
                        <Select placeholder="Chọn lớp mới" onChange={(value) => setSelectedClassForTransfer(value)}>
                            {classes.map((cls) => (
                                <Option key={cls.id} value={cls.id}>
                                    {cls.class_name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <Button onClick={handleCancelTransfer}>Hủy</Button>
                        <Button type="primary" onClick={handleConfirmChangeClass} disabled={!selectedClassForTransfer}>
                            Xác nhận
                        </Button>
                    </div>
                </Form>
            </Modal>
        </AdminLayout>
    );
}
