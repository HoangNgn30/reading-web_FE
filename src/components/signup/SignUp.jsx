import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader2 } from 'lucide-react';
import useAuthApi from '../../services/authServices';
import signUpVideo from '../../assets/signUp1.mp4';

function Signup() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { signUp } = useAuthApi();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await signUp(formData);
            toast.success('Đăng ký thành công! 🎉', { autoClose: 500 });
            navigate('/login');
        } catch (error) {
            console.error('Error signing up:', error);
            toast.error(error.response?.data?.message || 'Đăng ký thất bại! 😢', { autoClose: 3000 });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left side*/}
            <div className="flex w-full items-center justify-center bg-bgColor lg:w-1/2">
                <div className="w-full max-w-md rounded-2xl bg-bgColorOne p-10 shadow-xl">
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Đăng ký</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Tên tài khoản */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Tên tài khoản</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 focus:border-green-800 focus:ring-2 focus:ring-green-800"
                                placeholder="Nhập tên tài khoản"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 focus:border-green-800 focus:ring-2 focus:ring-green-800"
                                placeholder="Nhập email"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {/* Mật khẩu */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Mật khẩu</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 focus:border-green-800 focus:ring-2 focus:ring-green-800"
                                placeholder="Nhập mật khẩu"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {/* Nút đăng ký */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-lg bg-secondary py-3 text-white transition-colors hover:bg-secondaryOne hover:text-black focus:outline-none focus:ring-2 focus:ring-secondaryOne focus:ring-offset-2 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                                    Đang xử lý...
                                </>
                            ) : (
                                'Đăng ký'
                            )}
                        </button>
                    </form>

                    {/* Đăng nhập */}
                    <div className="mt-8 text-center text-sm text-gray-600">
                        Đã có tài khoản?{' '}
                        <a href="/login" className="font-medium text-secondary hover:text-secondary hover:underline">
                            Đăng nhập
                        </a>
                    </div>
                </div>
            </div>

            {/* Right side*/}
            <div className="hidden lg:block lg:w-1/2 relative">
                <video
                    src={signUpVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-screen object-cover"
                />
            </div>

            <ToastContainer position="top-right" />
        </div>
    );
}

export default Signup;
