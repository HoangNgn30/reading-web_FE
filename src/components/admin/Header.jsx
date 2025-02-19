import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import logo from '../../assets/logo.png';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const API_BASE_URL = 'https://be-aiot-lab-landing-page.onrender.com';

ReactModal.setAppElement('#root');
function HeaderAdmin() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const toggleOpen = () => setModalIsOpen((prev) => !prev);
    const closeModal = () => setModalIsOpen(false);

    // Check if user is logged in when the component mounts
    useEffect(() => {
        const token = Cookies.get('jwt');
        if (token) {
            setIsLoggedIn(true); // User is logged in
        } else {
            setIsLoggedIn(false); // User is not logged in
        }
    }, []);

    const handleLogOut = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/logout`);
            Cookies.remove('jwt');
            console.log(response);
            toast.success('Đăng xuất thành công', { autoClose: 1000 });
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } catch (error) {
            toast.error('Đăng xuất thất bại, hãy thử lại!');
            console.log(error);
        }
    };

    const handleLogin = () => {
        navigate('/login'); // Navigate to login page
    };

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50  md:backdrop-blur-md z-40 px-10 md:bg-transparent bg-slate-100">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#Intro" className="h-full w-auto flex flex-row items-center">
                    <img
                        alt="logo"
                        loading="lazy"
                        width="150"
                        height="150"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: `transparent` }}
                        src={logo}
                        className="rounded-full"
                    />
                    <span className="font-bold ml-[10px] hidden md:block text-[#001355] text-xl">
                        AIoT LAB - FIT DNU
                    </span>
                </a>

                <div
                    className="hidden lg:flex w-fit h-full flex-row items-center justify-between md:mr-10 md:text-sm xl:text-base"
                    style={{ maxWidth: '100%' }}
                >
                    <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full gap-10 z-50 font-medium text-gray-200">
                        <a href="/admin/manage-members" className="cursor-pointer">
                            Quản ly thành viên
                        </a>

                        <a href="/admin/manage-users" className="cursor-pointer">
                            Quản lý người dùng
                        </a>

                        <a href="/admin/manage-introductions" className="cursor-pointer">
                            Quản lý thông tin
                        </a>
                    </div>
                </div>

                {isLoggedIn ? (
                    <button onClick={handleLogOut}>Đăng xuất</button>
                ) : (
                    <button onClick={handleLogin}>Đăng nhập</button> // Show "Đăng nhập" button if not logged in
                )}

                <div className="lg:hidden flex items-center">
                    <button className="text-gray-300" onClick={toggleOpen}>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bars"
                            className="svg-inline--fa fa-bars "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            width={20}
                            height={20}
                            style={{ color: '#ffffff', fontSize: '20px' }}
                        >
                            <path
                                fill="currentColor"
                                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                            ></path>
                        </svg>
                    </button>

                    <ReactModal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        shouldCloseOnOverlayClick={true}
                        className="bg-transparent"
                        style={{ overlay: { backgroundColor: 'transparent', zIndex: 40 } }}
                    >
                        <div className="absolute top-[65px] right-0 bg-[#020213d2] border border-[#7042f861] w-[250px] p-4 rounded-lg shadow-lg z-50">
                            <a href="/admin/manage-members" className="cursor-pointer">
                                Quản ly thành viên
                            </a>

                            <a href="/admin/manage-users" className="cursor-pointer">
                                Quản lý người dùng
                            </a>

                            <a href="/admin/manage-introductions" className="cursor-pointer">
                                Quản lý thông tin
                            </a>

                            {isLoggedIn ? (
                                <button onClick={handleLogOut}>Đăng xuất</button>
                            ) : (
                                <button onClick={handleLogin}>Đăng nhập</button>
                            )}
                        </div>
                    </ReactModal>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;
