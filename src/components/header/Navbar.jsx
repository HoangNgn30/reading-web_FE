import PropTypes from 'prop-types';
import { FaRegWindowClose } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
    const navItems = [
        { to: '/', label: 'Trang chủ' },
        { to: '/categories', label: 'Thể loại' },
        { to: '/following', label: 'Theo dõi' },
        { to: '/add-story', label: 'Thêm sách' },
        { to: '/books', label: 'Tìm sách' },
    ];
    return (
        <nav className={containerStyles}>
            {/* close button inside navbar */}
            {menuOpened && (
                <div className="flex flex-col w-full">
                    <div className="flex justify-between items-start w-full">
                        <Link to="/" className="text-xl font-bold mt-4">
                            <img src={logo} alt="logo" className="h-[50px] w-auto" />
                        </Link>
                        <FaRegWindowClose onClick={toggleMenu} className="text-xl cursor-pointer mt-4" />
                    </div>
                    
                    <div className="mt-8">
                        {navItems.map(({ to, label }) => (
                            <div key={label} className="mb-4">
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `items-center justify-between gap-x-2 ${
                                            isActive ? 'text-secondary font-medium' : 'text-black hover:text-secondary hover:underline'
                                        }`
                                    }
                                >
                                    <span className="medium-16">{label}</span>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {!menuOpened &&
                navItems.map(({ to, label }) => (
                    <div key={label} className="inline-flex relative top-1">
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                `items-center justify-between gap-x-2 ${
                                    isActive ? 'text-secondary font-medium' : 'text-black hover:text-secondary hover:underline'
                                }`
                            }
                        >
                            <span className="medium-16">{label}</span>
                        </NavLink>
                    </div>
                ))}
        </nav>
    );
};

Navbar.propTypes = {
    containerStyles: PropTypes.string.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    menuOpened: PropTypes.bool.isRequired,
};

export default Navbar;
