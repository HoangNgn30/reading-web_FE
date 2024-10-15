import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

import logo from "../../assets/Logo_DAI_NAM.png";
function Contact() {
    return ( 
    <div id="contact" className="text-gray-200 w-full h-full bg-transparent shadow-lg p-4 z-20 relative">
        <div className="flex flex-col w-full justify-center items-center m-auto">
            <div className="flex flex-row w-full h-full justify-around items-center flex-wrap">
                <div className="">
                    <img src={logo}
                    width={300} height={300} alt="Logo"/>
                </div>
                <div className="w-auto h-auto md:mx-16 px-8">
                    <h3 className='font-bold w-full text-center md:text-left lg:text-[24px] text-base mb-4'>Liên hệ</h3>

                    {/* mxh */}
                    <div className="flex flex-col md:flex-row items-center justify-center mb-3 gap-4">
                        <div className="flex flex-col md:flex-row w-full items-center mb-3 gap-4">
                            <FaFacebook />
                            <a href="https://www.facebook.com/DAINAM.EDU.VN/" target="_blank" className="ml-4">Đại Học Đại Nam</a>
                        </div>
                        <div className="flex flex-col md:flex-row w-full items-center mb-3 gap-4">
                            <BsInstagram />
                            <a href="https://www.instagram.com/daihocdainam?fbclid=IwY2xjawF7K5hleHRuA2FlbQIxMAABHQ5w3iMFXeelpyNC58RqIh9ozadahHSM64K_2FmE6CNeExS5q1jyNUZiLg_aem_1z8A4X9MTrsNpjIlhl6A-A" 
                            className="ml-4" target="_blank">daihocdainam</a>
                        </div>
                        
                    </div>


                    <div className="flex flex-col md:flex-row w-full items-center mb-3 gap-4">
                        <AiOutlineGlobal />
                       <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.dainam.edu.vn%2Fvi%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR33dGAOcjtIRnK32fU9JkeM81G69ExC8EqyNUrX2VmbUTxGsbqzMvybrc0_aem_LaGGt4af7uR8eXZ56c348A&h=AT2N7AHVf1gqDVuz_I2wFVLhjylo7wONzpalM2TiOgN3vMsj-VFo2IHYySbP4-1L_9keA-oUWgKkXglRbuy_pFFlaf18xdK3qoJ8UjcoS5Kz_KTy3iq521_9KoHDBFsPznp8nA" 
                       className="ml-4" target="_blank">dainam.edu.vn/vi</a>
                    </div>

                    {/* Phone */}

                    <div className="flex w-full items-center justify-center mb-3 gap-4">
                        <div className="flex flex-col md:flex-row items-center justify-center mb-3 gap-4">
                            <div>
                            <FaPhone />
                            </div>
                            <div className="flex flex-col md:flex-row md:ml-4 gap-5">
                                <div className=" items-center justify-center sm:ml-0 sm:mr-6 flex flex-col md:items-start md:justify-start">
                                    <p> (024) 35577799</p>
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
                            <div>dnu@dainam.edu.vn</div>
                        </div>
                    </div>

                </div>
            </div>
        
            <div className="w-full items-center justify-center flex text-gray-600 mb-4">
                <p>Copyright @2019 Đại học Đại Nam</p>
            </div>
        </div>
    </div> 
    );
}

export default Contact;