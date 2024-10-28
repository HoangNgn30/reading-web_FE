import { FaFacebook } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';

import logo from '../../assets/logo.png';
function Contact() {
    return (
        <div id="Contact" className="text-gray-200 w-full h-full bg-transparent shadow-lg p-4 z-20 relative">
            <div className="flex flex-col w-full justify-center items-center m-auto">
                <div className="flex flex-row w-full h-full justify-around items-center flex-wrap">
                    <div className="">
                        <img src={logo} width={300} height={300} alt="Logo" />
                    </div>
                    <div className="w-auto h-auto md:mx-16 px-8">
                        <h3 className="font-bold w-full text-center md:text-left lg:text-[24px] text-base mb-4">
                            Liên hệ
                        </h3>

                        {/* mxh */}
                        <div className="flex flex-col md:flex-row items-center justify-center mb-3 gap-4">
                            <div className="flex flex-col md:flex-row w-full items-center mb-3 gap-4">
                                <FaFacebook />
                                <a
                                    href="https://www.facebook.com/profile.php?id=61567200969853"
                                    target="_blank"
                                    className="ml-4"
                                >
                                    AIoT LAB - FIT DNU
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row w-full items-center mb-3 gap-4">
                            <AiOutlineGlobal />
                            <a href="https://aiot-lab.vercel.app/" className="ml-4" target="_blank">
                                AIoT LAB Website
                            </a>
                        </div>

                        {/* Phone */}

                        <div className="flex w-full items-center justify-center mb-3 gap-4">
                            <div className="flex flex-col md:flex-row items-center justify-center mb-3 gap-4">
                                <div>
                                    <FaPhone />
                                </div>
                                <div className="flex flex-col md:flex-row md:ml-4 gap-5">
                                    <div className=" items-center justify-center sm:ml-0 sm:mr-6 flex flex-col md:items-start md:justify-start">
                                        <p>P301 - GD2</p>
                                        <p>Địa chỉ: Số 1 Phố Xốm, Phú Lãm, Hà Đông, Hà Nội</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* mail */}

                        <div className="flex flex-col w-full md:flex-row gap-4 items-center mb-3">
                            <div>
                                <FaEnvelope />
                            </div>
                            <div className="ml-4">
                                <div>fit@dainam.edu.vn</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full items-center justify-center flex text-gray-600 mb-4 mt-6">
                    <p>Copyright @2024 AIoT LAB - FIT DNU</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
