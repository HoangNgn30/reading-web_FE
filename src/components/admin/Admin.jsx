import React from 'react';
import AdminLayout from './layout';

const Admin = () => {
    return (
        <AdminLayout>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center gap-4">
                    <h2 className="text-2xl font-bold text-center mb-4">Chào mừng đến với trang Admin</h2>
                    <p className="text-center">
                        Đây là trang quản trị của bạn. Bạn có thể quản lý các thông tin tại đây.
                    </p>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Admin;
