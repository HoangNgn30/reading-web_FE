import React, { useEffect, useState, useCallback } from 'react';
import { Table, Button, message, Modal, Form, Input, Checkbox, Flex, Select, Image, Divider, Upload } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    EyeOutlined,
    LoadingOutlined,
    PlusOutlined,
    PlusCircleOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import { useMemberApi } from '../../../services/memberServices';
import { toast } from 'react-toastify';
import HeaderAdmin from '../Header';
import AdminLayout from '../layout';
import { PlusCircle, Eye, Edit, Trash2, Search, Download } from 'lucide-react';
import ImgCrop from 'antd-img-crop';
import { useIntroductionApi } from '../../../services/introductionServices';
interface Member {
    id: number;
    name: string;
    email: string;
    role: string;
    isApplied: boolean;
    image: '';
}

export default function ManageMembers() {
    const { Option } = Select;
    const [isView, setIsView] = useState(false);

    const [member, setMember] = useState<Member[]>([]);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [isBulkDeleteMode, setIsBulkDeleteMode] = useState(false);
    const [isDeleteAllMode, setIsDeleteAllMode] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const [classIdToDelete, setClassIdToDelete] = useState(null);
    const [form] = Form.useForm();
    const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
    const [searchName, setSearchName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewTitle, setPreviewTitle] = useState('');

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

    const { getMembers, getMemberById, createMember, updateMember, deleteMember, updateMemberStatus, uploadImage } =
        useMemberApi();

    const { getIntro, getIntroById, createIntro, updateIntro, deleteIntro } = useIntroductionApi();

    const fetchClasses = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getIntro();
            setMember(response.data || []);
            console.log(member);
            setTotal(response?.total);
            setPagination((prev) => ({
                ...prev,
                total: response?.total,
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

    const handleImageUpload = async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            setLoading(true);

            // Tạo preview ảnh local
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);

            // Chuẩn bị dữ liệu gửi lên API
            const formData = new FormData();
            formData.append('image', file);

            // Gửi ảnh lên API
            if (selectedMember?.id) {
                const response = await uploadImage(selectedMember.id, formData);
                if (response && response.image) {
                    setImageUrl(response.image);
                    form.setFieldsValue({ image: response.image });
                    message.success('Tải ảnh lên thành công!');
                } else {
                    message.error('Tải ảnh lên thất bại!');
                }
            } else {
                // Upload ảnh cho member mới
                const response = await uploadImage('temp', formData);
                if (response && response.image) {
                    setImageUrl(response.image);
                    form.setFieldsValue({ image: response.image });
                }
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            message.error('Có lỗi xảy ra khi tải ảnh lên!');
        } finally {
            setLoading(false);
        }
    };

    const uploadButton = (
        <div className="relative w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-600 transition-colors">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="mt-2 text-sm text-gray-500">Tải ảnh lên</div>
            </div>
        </div>
    );

    const handlePreview = async (file) => {
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
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
            await deleteIntro(classIdToDelete);
            setIsDeleteModalOpen(false);
            setMember((prevClasses) => prevClasses.filter((classItem) => classItem.id !== classIdToDelete));
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
                await deleteMember(classId);
            }
            setMember((prevClasses) => prevClasses.filter((classItem) => !selectedRowKeys.includes(classItem.id)));
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
            // await deleteAllClass();
            setIsDeleteModalOpen(false);
            fetchClasses();

            message.success('Xóa lớp thành công!');
        } catch (error) {
            message.error('Xóa lớp thất bại!');
        }
    };

    const handleAddClass = async (values) => {
        try {
            await createIntro(values);
            setMember((prevMember) => [...prevMember, { id: Math.random(), ...values }]);
            message.success('Thêm lớp thành công!');
            setIsAddModalVisible(false);
            form.resetFields();
        } catch (error) {
            message.error('Lớp đã tồn tại');
        }
    };

    const handleEditMember = async (values) => {
        try {
            if (selectedMember) {
                const success = await updateIntro(selectedMember.id, values);
                if (success) {
                    message.success('Cập nhật thành viên thành công!');
                    setIsEditModalVisible(false);
                    fetchClasses();
                } else {
                    message.error('Cập nhật thất bại!');
                }
            } else {
                message.error('Không có thành viên được chọn!');
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật thành viên:', error);
            message.error('Đã xảy ra lỗi khi cập nhật thành viên!');
        }
    };

    const handleSearch = async (value) => {
        setSearchName(value);
        try {
            const response = await getIntro();
            const filteredClasses = response?.data.filter((classItem) =>
                classItem.content.toLowerCase().includes(value.toLowerCase()),
            );
            setMember(filteredClasses);
        } catch (error) {
            message.error('Tìm kiếm thất bại!');
        }
    };

    const openEditModal = (memberItem) => {
        setSelectedMember(memberItem);
        setIsEditModalVisible(true);
        form.setFieldsValue(memberItem);
    };

    const openViewModal = async (memberItem) => {
        try {
            const response = await getIntroById(memberItem.id);

            setSelectedMember({
                ...memberItem,
                name: response?.data?.name,
            });
            setIsViewModalVisible(true);
        } catch (error) {
            message.error('Không thể tải danh sách sinh viên!');
        }
    };

    const columns = [
        {
            title: (
                <Checkbox
                    checked={selectedRowKeys.length === member.length && member.length > 0}
                    indeterminate={selectedRowKeys.length > 0 && selectedRowKeys.length < member.length}
                    onChange={(e) => {
                        const isChecked = e.target.checked;
                        setSelectedRowKeys(isChecked ? member.map((memberItem) => memberItem.id) : []);
                    }}
                />
            ),
            key: 'select',
            align: 'center' as 'center',
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
            title: 'Nội dung',
            dataIndex: 'content',
            key: 'content',
            sorter: (a, b) => a.content.localeCompare(b.content),
            sortDirections: ['descend', 'ascend'],
            align: 'center',
        },
        {
            title: 'Đang áp dụng',
            dataIndex: 'isApplied',
            key: 'isApplied',
            render: (text) => (text ? 'Có' : 'Không'),
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

            <div className="min-h-screen bg-gray-50">
                {/* Main Content Container */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Header Section */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold text-gray-900">QUẢN LÝ THÀNH VIÊN</h1>
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">Tổng số:</span>
                                <div className="w-16 px-3 py-1 bg-white border rounded text-center text-red-600 font-bold">
                                    {member.length}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons and Search */}
                    <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex space-x-4">
                            <button
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                onClick={() => setIsAddModalVisible(true)}
                            >
                                <PlusCircle className="w-4 h-4 mr-2" />
                                Tạo
                            </button>
                            <button
                                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                                disabled={selectedRowKeys.length === 0}
                                onClick={() => {
                                    setIsBulkDeleteMode(true);
                                    setIsDeleteModalOpen(true);
                                }}
                            >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Xoá
                            </button>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm theo tên..."
                                className="pl-10 pr-4 py-2 border rounded-md w-full sm:w-64"
                                value={searchName}
                                onChange={(e) => {
                                    setSearchName(e.target.value);
                                    handleSearch(e.target.value);
                                }}
                            />
                            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="overflow-x-auto">
                            <div className="min-w-full divide-y divide-gray-200">
                                <Table
                                    loading={loading}
                                    columns={columns}
                                    dataSource={member}
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
                            </div>
                        </div>
                    </div>

                    {/* Keep all your existing modals, just update their styling */}
                    {/* Modal styling example: */}
                    <div className="fixed inset-0 bg-black bg-opacity-50 hidden">
                        <div className="relative top-1/2 transform -translate-y-1/2 mx-auto max-w-lg bg-white rounded-lg p-6">
                            <Modal
                                title="Thêm thành viên"
                                open={isAddModalVisible}
                                onCancel={() => {
                                    setIsAddModalVisible(false);
                                    setIsView(false);
                                    form.resetFields();
                                }}
                                onOk={() => form.submit()}
                                footer={isView ? null : undefined}
                            >
                                <Form
                                    form={form}
                                    layout="vertical"
                                    onFinish={handleAddClass}
                                    initialValues={{ isApplied: true }}
                                >
                                    <Form.Item
                                        label="Nội dung"
                                        name="content"
                                        rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
                                    >
                                        <Input.TextArea placeholder="Nhập nội dung" />
                                    </Form.Item>

                                    <Form.Item label="Trạng thái áp dụng" name="isApplied" required={true}>
                                        <Select>
                                            <Select.Option value={true}>Có</Select.Option>
                                            <Select.Option value={false}>Không</Select.Option>
                                        </Select>
                                    </Form.Item>

                                    <Button type="primary" htmlType="submit">
                                        Gửi
                                    </Button>
                                </Form>
                            </Modal>
                            {/* Modal Chỉnh Sửa */}
                            <Modal
                                title="Chỉnh sửa thành viên"
                                open={isEditModalVisible}
                                onCancel={() => {
                                    setIsEditModalVisible(false);
                                    form.resetFields();
                                }}
                                onOk={() => form.submit()}
                            >
                                <Form form={form} layout="vertical" onFinish={handleEditMember}>
                                    <Form.Item
                                        label="Nội dung"
                                        name="content"
                                        rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
                                    >
                                        <Input.TextArea placeholder="Nhập nội dung" />
                                    </Form.Item>

                                    <Form.Item
                                        label="Đang áp dụng"
                                        name="isApplied"
                                        rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
                                    >
                                        <Select>
                                            <Select.Option value={true}>Có</Select.Option>
                                            <Select.Option value={false}>Không</Select.Option>
                                        </Select>
                                    </Form.Item>

                                    <Button type="primary" htmlType="submit">
                                        Lưu
                                    </Button>
                                </Form>
                            </Modal>
                            {/* Modal view hoc sinh */}
                            <Modal
                                open={isViewModalVisible}
                                onCancel={() => {
                                    setIsViewModalVisible(false);
                                    setSelectedMember(null);
                                }}
                                footer={null}
                                width={400}
                            >
                                <Divider />

                                {/* Danh sách thông tin */}
                                <Flex vertical gap={12}>
                                    <Flex justify="space-between">
                                        <span style={{ fontWeight: 'bold' }}>Nội dung:</span>
                                        <span>{selectedMember?.content || 'Chưa có dữ liệu'}</span>
                                    </Flex>
                                    <Flex justify="space-between">
                                        <span style={{ fontWeight: 'bold' }}>Trạng thái:</span>
                                        <span style={{ color: selectedMember?.isApplied ? 'green' : 'red' }}>
                                            {selectedMember?.isApplied ? 'Có' : 'Không'}
                                        </span>
                                    </Flex>
                                </Flex>
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
                                    ? 'Bạn có chắc chắn muốn xóa tất cả bản ghi? Hành động này không thể hoàn tác'
                                    : isBulkDeleteMode
                                    ? 'Bạn có chắc chắn muốn xóa những bản ghi đã chọn? Hành động này không thể hoàn tác'
                                    : 'Bạn có chắc chắn muốn xóa bản ghi này? Hành động này không thể hoàn tác'}
                            </Modal>
                            {/* Modal chuyển lớp */}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
