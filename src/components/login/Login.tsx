import React from 'react';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tên tài khoản:', username);
        console.log('Mật khẩu:', password);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-center text-2xl font-semibold">Đăng nhập</h2>
                <form onSubmit={handleSubmit}>
                    {/* Tên tài khoản */}
                    <div className="mb-4">
                        <label className="mb-1 block text-sm font-medium text-gray-600">Tên tài khoản</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full rounded-md border p-2 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Mật khẩu */}
                    <div className="mb-4">
                        <label className="mb-1 block text-sm font-medium text-gray-600">Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-md border p-2 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Nút đăng nhập */}
                    <button type="submit" className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600">
                        Đăng nhập
                    </button>

                    {/* Quên mật khẩu */}
                    <div className="mt-2 text-right text-sm">
                        <a href="#" className="text-blue-500 hover:underline">
                            Quên mật khẩu?
                        </a>
                    </div>
                </form>

                {/* Hoặc */}
                <div className="my-6 flex items-center">
                    <div className="h-px flex-1 bg-gray-300"></div>
                    <span className="mx-4 text-gray-500">Hoặc</span>
                    <div className="h-px flex-1 bg-gray-300"></div>
                </div>

                {/* Đăng nhập bằng Google */}
                <button className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-200 py-2 text-gray-700 hover:bg-gray-300">
                    <FaGoogle className="text-red-500" />
                    Đăng nhập bằng Google
                </button>

                {/* Đăng ký tài khoản */}
                <div className="mt-4 text-center text-sm">
                    Bạn chưa có tài khoản?{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                        Đăng ký tài khoản
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
