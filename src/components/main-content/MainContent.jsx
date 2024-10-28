/* eslint-disable no-unused-vars */
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import backfix from '../../assets/labb1.jpg';
import logo from '../../assets/Logo_DAI_NAM.png';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

function MainContent() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen">
            <div className="absolute inset-0">
                <img
                    src={backfix}
                    height="1500"
                    alt=""
                    className="object-cover h-full w-full"
                    style={{ filter: 'brightness(60%)' }}
                />
            </div>
            <div className="absolute flex flex-col items-center w-full ">
                {/* <img src={logo} className="w-[150px] h-[150px]" />
                <h1 className="md:text-5xl font-bold text-primary mt-12 text-center text-3xl">
                    AIoT LAB
                </h1> */}
                <div className="h-[150px]"></div>
                <div className="w-full bg-[#F3F4F6] opacity-50 mt-6 md:block hidden">
                    <div className="flex justify-around">
                        <div className="flex items-center text-[#20409A]">
                            <AiOutlineGlobal className="h-full text-xl mr-1" />
                            <p className="md:font-bold font-medium text-sm">https://dainam.edu.vn</p>
                        </div>
                        <div className="flex items-center text-[#20409A]">
                            <FaFacebook className="h-full text-xl  mr-1" />
                            <p className="md:font-bold font-medium text-sm">facebook.com/DAINAM.EDU.VN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
