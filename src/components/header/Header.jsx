import { useState } from 'react';
import ReactModal from 'react-modal';
import logo from '../../assets/dai-nam-11.jpg';

ReactModal.setAppElement('#root');
function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggleOpen = () => setModalIsOpen((prev) => !prev);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50  md:backdrop-blur-md z-40 px-10 bg-primary">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#Intro" className="h-full w-auto flex flex-row items-center">
                    <img
                        alt="logo"
                        loading="lazy"
                        width="80"
                        height="80"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: `transparent` }}
                        src={logo}
                    />

                    <span
                        className="font-bold ml-[10px] hidden md:block text-neutral-200"
                        style={{ textShadow: `2px 2px 4px rgba(0, 0, 0, 0.4)` }}
                    >
                        PHÒNG LAB KHOA CÔNG NGHỆ THÔNG TIN
                    </span>
                </a>

                <div
                    className="hidden lg:flex w-[500px] h-full flex-row items-center justify-between md:mr-10"
                    style={{ maxWidth: '100%' }}
                >
                    <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-50 gap-4 z-50">
                        <a href="#Intro" className="cursor-pointer">
                            Giới thiệu
                        </a>

                        <a href="#Activity" className="cursor-pointer">
                            Hoạt động
                        </a>

                        <a href="#Department" className="cursor-pointer">
                            Chuyên ngành
                        </a>

                        <a href="#Contact" className="cursor-pointer">
                            Liên hệ
                        </a>
                    </div>
                </div>

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
                            <a href="#Intro" className="block py-2 cursor-pointer text-white">
                                Giới thiệu
                            </a>
                            <a href="#Activity" className="block py-2 cursor-pointer text-white">
                                Hoạt động
                            </a>
                            <a href="#Department" className="block py-2 cursor-pointer text-white">
                                Chuyên ngành
                            </a>
                            <a href="#Contact" className="block py-2 cursor-pointer text-white">
                                Liên hệ
                            </a>
                        </div>
                    </ReactModal>
                </div>
            </div>
        </div>
    );
}

export default Header;
