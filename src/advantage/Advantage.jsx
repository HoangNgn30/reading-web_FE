import card1 from '../assets/card-1.svg';
import mot from '../assets/1.png'
import hai from '../assets/2.png'
import ba from '../assets/3.png'

function Advantage() {
    return (
        <div className="flex flex-col items-center justify-center h-full relative overflow-hidden z-10" >
            <div
                className="flex flex-col items-center justify-center gap-4 w-full z-[30]"
                style={{ opacity: '1', willChange: 'auto' }}
            >
                <h5
                    className="font-medium text-xs lg:text-xl text-neutral-400 text-center  px-10 lg:px-20"
                    style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                >
                    Bạn sẽ nhận được gì khi trở thành
                </h5>
                <h1
                    className="font-bold text-center text-2xl lg:text-4xl text-white px-10 lg:px-20"
                    style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                >
                    Thành viên Liên chi Đoàn Khoa CNTT1
                </h1>
                <div className="flex flex-wrap items-center justify-center  px-10 lg:px-20 gap-4 mt-4">
                    <div
                        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                        style={{
                            backgroundImage: `url(${card1})`,
                            opacity: '1',
                            willChange: 'auto',
                            transform: 'none',
                        }}
                    >
                        <div className="relative z-2 flex flex-col  min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <p className="body-2 mb-6 text-xl font-semibold text-neutral-700 ">
                                Được tiếp xúc và làm việc trực tiếp cùng các thầy cô.
                            </p>
                        </div>
                        <div className="absolute inset-0.5 bg-n-8 -z-10 " style={{ clipPath: 'url(#benefits)' }}>
                            <div className="absolute z-20 bg-white h-full w-full bottom-0 flex items-center">
                                <img src={mot} width="900" height="900" alt="" className="opacity-10" />
                            </div>
                            <div className="absolute inset-0">
                                <img
                                    src="/bg-benefit.png"
                                    width="900"
                                    height="900"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="h-full w-full absolute top-8 -z-30 left-1/3 -translate-x-12">
                            <img src="/gradient.png" width="1000" alt="" className="" />
                        </div>
                        <svg className="block " width="0" height="0">
                            <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                                <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"></path>
                            </clipPath>
                        </svg>
                    </div>
                    <div
                        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                        style={{
                            backgroundImage: `url(${card1})`,
                            opacity: '1',
                            willChange: 'auto',
                            transform: 'none',
                        }}
                    >
                        <div className="relative z-2 flex flex-col  min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <p className="body-2 mb-6 text-xl font-semibold text-neutral-700 ">
                                Được tham gia các hoạt động vui chơi tổ chức một cách chuyên nghiệp.
                            </p>
                        </div>
                        <div className="absolute inset-0.5 bg-n-8 -z-10 " style={{ clipPath: 'url(#benefits)' }}>
                            <div className="absolute z-20 bg-white h-full w-full bottom-0 flex items-center">
                                <img src={hai} width="900" height="900" alt="" className="opacity-10" />
                            </div>
                            <div className="absolute inset-0">
                                <img
                                    src="/bg-benefit.png"
                                    width="900"
                                    height="900"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="h-full w-full absolute top-8 -z-30 left-1/3 -translate-x-12">
                            <img src="/gradient.png" width="1000" alt="" className="" />
                        </div>
                        <svg className="block " width="0" height="0">
                            <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                                <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"></path>
                            </clipPath>
                        </svg>
                    </div>
                    <div
                        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                        style={{
                            backgroundImage: `url(${card1})`,
                            opacity: '1',
                            willChange: 'auto',
                            transform: 'none',
                        }}
                    >
                        <div className="relative z-2 flex flex-col  min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <p className="body-2 mb-6 text-xl font-semibold text-neutral-700 ">
                                {' '}
                                Ngoài ra sẽ được học các kĩ năng như: kĩ năng tổ chức sự kiện, kĩ năng thuyết trình, kĩ
                                năng làm việc nhóm,...Đặc biệt trực tiếp tham gia tổ chức các hoạt động quy mô Khoa và
                                Học viện.
                            </p>
                        </div>
                        <div className="absolute inset-0.5 bg-n-8 -z-10 " style={{ clipPath: 'url(#benefits)' }}>
                            <div className="absolute z-20 bg-white h-full w-full bottom-0 flex items-center">
                                <img src={ba} width="900" height="900" alt="" className="opacity-10" />
                            </div>
                            <div className="absolute inset-0">
                                <img
                                    src="/bg-benefit.png"
                                    width="900"
                                    height="900"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="h-full w-full absolute top-8 -z-30 left-1/3 -translate-x-12">
                            <img src="/gradient.png" width="1000" alt="" className="" />
                        </div>
                        <svg className="block " width="0" height="0">
                            <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                                <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"></path>
                            </clipPath>
                        </svg>
                    </div>
                </div>
            </div>
            <img src="/section_white.png" width="1920" alt="" className="w-full relative" />
        </div>
    );
}

export default Advantage;
