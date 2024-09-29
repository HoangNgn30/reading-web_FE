import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import backfix from '../assets/backfix.png';
import thuyen0 from '../assets/thuyen0.png';

function MainContent() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen">
            <div className="absolute inset-0">
                <img src={backfix} height="1500" alt="" className="object-cover h-full w-full" />
                <Particles
                    init={particlesInit}
                    className="absolute top-0 z-20 w-full h-full"
                    options={{
                        fullScreen: {
                            enable: false, // Tắt chế độ full màn hình
                        },
                        background: {
                            color: {
                                value: 'transparent',
                            },
                        },
                        fpsLimit: 60,
                        particles: {
                            number: {
                                value: 100, // Số lượng hạt (sao)
                            },
                            size: {
                                value: 2, // Kích thước của hạt
                            },
                            move: {
                                enable: true,
                                speed: 1, // Tốc độ chuyển động của các hạt
                                direction: 'none',
                                outMode: 'bounce', // Hiệu ứng khi hạt chạm vào cạnh
                            },
                            color: {
                                value: '#ffffff', // Màu trắng của hạt (sao)
                            },
                            links: {
                                enable: false, // Không nối các hạt với nhau
                            },
                            opacity: {
                                value: 0.7, // Độ mờ của hạt
                            },
                        },
                        backgroundMode: {
                            enable: true,
                            zIndex: 20,
                        },
                        detectRetina: true, // Hỗ trợ màn hình Retina
                    }}
                ></Particles>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center px-10 lg:px-20 xl:px-32 2xl:px-40 mt-20 w-full  relative">
                <div className="flex flex-col items-center gap-3 lg:items-start text-justify h-full w-full justify-center">
                    <div
                        className="text-neutral-800 font-bold flex flex-col text-center lg:text-start gap-6 mt-6 text-6xl xl:text-7xl 2xl:text-8xl h-auto w-auto lg:px-16 xl:px-20 2xl:px-24"
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        <span className="kanit-bold-italic">
                            Welcome!
                            <br />
                            We are
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ce48a6] to-[#0f8eaa]">
                                {' '}
                                ITIS
                            </span>
                        </span>
                    </div>
                    <p
                        className="text-xs lg:text-lg xl:text-base 2xl:text-xl text-neutral-800 my-5 max-w-[700px] lg:px-16 xl:px-20 2xl:px-24 text-center text-justify"
                        style={{
                            textShadow: 'rgba(255, 255, 255, 0.4) 2px 2px 4px',
                            opacity: '1',
                            willChange: 'auto',
                            transform: 'none',
                        }}
                    >
                        Con tàu thám hiểm ITIS lừng danh cưỡi sóng vượt biển khám phá vùng đất mới, với hành trình không
                        ngừng nghỉ và chỉ trở về bến cảng mỗi năm một lần vào mùa thu. Ngoài bổ sung lương thực và nhiên
                        liệu thì còn có một nhiệm vụ vô cùng quan trọng, đó chính là tuyển thêm những thuỷ thủ đoàn mới
                        đầy tiềm năng!
                    </p>
                    <div
                        className="lg:px-16 xl:px-20 2xl:px-24"
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        <div className="rounded-md border-gray-800 border-solid">
                            <ul className="flex flex-col lg:flex-row gap-4">
                                <li className="px-4 py-3 bg-[#fcc0c0] border-[#b16969] border-2  rounded-md font-medium text-xs text-center">
                                    Nhận CV <br /> 05/09 - 12h00 18/09
                                </li>
                                <li className="px-4 py-3 bg-[#bcdafc] border-[#698bb1] border-2  rounded-md font-medium text-xs text-center">
                                    Phỏng vấn <br /> 22/09
                                </li>
                                <li className="px-4 py-3 bg-[#c2ffc5] border-[#69b195] border-2  rounded-md font-medium text-xs text-center">
                                    Training
                                    <br /> tháng 10/2024 - tháng 01/2025
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center py-4">
                    <img
                        src={thuyen0}
                        alt=""
                        className="w-full h-auto"
                        style={{ opacity: '1', willChange: 'transform', transform: 'translateX(-12.023px)' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default MainContent;
