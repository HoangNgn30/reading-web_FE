import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from './Navbar';
import { CgMenuLeft } from 'react-icons/cg';
import { RiSearchLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import useAuthApi from '../../services/authServices';

ReactModal.setAppElement('#root');

function Header() {
    const [menuOpened, setMenuOpened] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {logout} = useAuthApi();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpened((prev) => !prev);
    };

    useEffect(() => {
        const token = Cookies.get('jwt');
        //console.log(token);
        if(!token)
            setIsLoggedIn(false);
        else
            setIsLoggedIn(true);
    }, []);

    const handleLogOut = async () => {
        try {
            const response = await logout();
            setIsLoggedIn(false);
            toast.success(response.data.message, { autoClose: 1000 });
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error) {
            toast.error('Đăng xuất thất bại, hãy thử lại!');
            console.error(error);
        }
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <header className="fixed top-0 left-0 right-0 h-[80px] w-screen bg-white shadow-sm z-50">
            <div className="max-pad-container h-full flex items-center">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold w-[200px]">
                    <img src={logo} alt="logo" className="h-[80px] w-auto" />
                </Link>

                {/* Navigation */}
                <div className="flex-1 flex justify-center">
                    <Navbar
                        containerStyles={`${
                            menuOpened
                                ? 'flex flex-col gap-y-16 h-screen w-[200px] absolute left-0 top-0 z-50 bg-white px-10 py-4 shadow-xl'
                                : 'hidden xl:flex justify-center gap-x-8 xl:gap-x-14 medium-15 px-2 py-1'
                        }`}
                        toggleMenu={toggleMenu}
                        menuOpened={menuOpened}
                    />
                </div>

                {/* Right Section - Menu, Search & User */}
                <div className="flex items-center gap-x-4 w-[500px] justify-end m-10">
                    {/* Menu Button */}
                    <CgMenuLeft
                        onClick={toggleMenu}
                        className="w-5 h-5 text-black text-2xl xl:hidden cursor-pointer mr-[10px]"
                    />

                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Tìm kiếm"
                            className="w-[200px] h-10 pl-4 pr-10 rounded-full border border-black focus:outline-none focus:border-secondary"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2">
                            <RiSearchLine className="w-5 h-5 text-black" />
                        </button>
                    </div>

                    {isLoggedIn == true ? (
                        <button
                            onClick={handleLogOut}
                            className="px-4 py-2 rounded-full bg-secondary text-white hover:bg-secondaryOne hover:text-black transition-colors"
                        >
                            Đăng xuất
                        </button>
                    ) : (
                        <button
                            onClick={handleLogin}
                            className="px-4 py-2 rounded-full bg-secondary text-white hover:bg-secondaryOne hover:text-black transition-colors"
                        >
                            Đăng nhập
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
