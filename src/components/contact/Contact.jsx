import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
    return ( 
    <div id="contact" className="text-gray-200 w-full h-full bg-transparent shadow-lg p-4 z-20 relative">
        <div className="flex flex-col w-full justify-center items-center m-auto">
            <div className="flex flex-row w-full h-full justify-center items-center flex-wrap">
                <div className="">
                    <img src="https://itis-portfolio.vercel.app/logomain.svg"
                    width={300} height={300} alt="Logo"/>
                </div>
                <div className="w-auto h-auto md:mx-16 px-8">
                    <h3 className='font-bold w-full text-center md:text-left lg:text-[24px] text-base mb-4'>Liên hệ</h3>

                    {/* facebook */}

                    <div className="flex flex-col md:flex-row w-full items-center mb-3 gap-4">
                       <FontAwesomeIcon icon={faFacebook}/>
                       <a href="https://www.facebook.com/lcdkhoacntt1.ptit" className="ml-4">Liên chi Đoàn Khoa CNTT1 - PTIT</a>
                    </div>

                    {/* Phone */}

                    <div className="flex w-full items-center justify-center mb-3 gap-4">
                        <div className="flex flex-col md:flex-row items-center justify-center mb-3 gap-4">
                            <div>
                            <FontAwesomeIcon icon={faPhone}/>
                            </div>
                            <div className="flex flex-col md:flex-row md:ml-4 gap-4">
                                <div className=" items-center justify-center sm:ml-0 sm:mr-6 flex flex-col md:items-start md:justify-start">
                                    <p>033.585.0230</p>
                                    <p>Hà Mạnh Dũng (Bí thư)</p>
                                </div>
                                <div className=" items-center justify-center sm:ml-0 sm:mr-6 flex flex-col md:items-start md:justify-start">
                                    <p>039.454.4566</p>
                                    <p>Nguyễn Nhật Thành (Phó Bí thư)</p>
                                </div >
                                <div className=" items-center justify-center sm:ml-0 sm:mr-6 flex flex-col md:items-start md:justify-start">
                                    <p>033.585.0230</p>
                                    <p>Nguyễn Thạc Anh (Phó Bí thư)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* mail */}
                    
                    <div className="flex flex-col w-full md:flex-row gap-4 items-center mb-3">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                        <div className="ml-4">
                            <div>bch.cntt.ptit@gmail.com</div>
                        </div>
                    </div>

                </div>
            </div>
        
            <div className="w-full items-center justify-center flex text-gray-600 mb-4">
                <p>@ WebITIS created by Team ITIS_Dev</p>
            </div>
        </div>
    </div> 
    );
}

export default Contact;