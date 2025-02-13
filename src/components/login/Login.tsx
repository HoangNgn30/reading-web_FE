import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader2 } from 'lucide-react';

const API_BASE_URL = 'https://be-aiot-lab-landing-page.onrender.com';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
            sessionStorage.setItem('loginSuccess', 'true'); // Thay đổi từ localStorage sang sessionStorage
            navigate('/');
        } catch (error: any) {
            console.error('Login Failed:', error.response?.data?.message || 'Có lỗi xảy ra');
            toast.error(error.response?.data?.message || 'Đăng nhập thất bại! 😢, hãy thử lại!', { autoClose: 3000 });
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center gap-2">
                <h2 className="text-2xl font-bold text-center mb-4">Chào mừng trở lại AiOT Lab</h2>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mật khẩu</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                                Đang đăng nhập...
                            </>
                        ) : 'Đăng nhập'}
                    </button>
                    <div className="flex gap-2 mt-4">
                        <span>Chưa có tài khoản?</span>
                        <Link to="/signup" className="font-medium text-amber-500">
                            Đăng ký ngay
                        </Link>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-right" />
        </div>
    );
};

export default Login;