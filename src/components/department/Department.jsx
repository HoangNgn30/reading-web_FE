import FAQ from './Faq';
import { useSpring, animated } from '@react-spring/web';
import card1 from '../../assets/card-1.svg';
import image1 from '../../assets/department1.jpg';
import image2 from '../../assets/department2.jpg';
import image3 from '../../assets/department3.jpg';

function Department() {
    const styles = useSpring({
        from: { transform: 'translateX(-100%)', opacity: 0 },
        to: { transform: 'translateX(0%)', opacity: 1 },
        config: { tension: 200, friction: 100 },
    });
    return (
        <div id="Department">
            <section id="room" className="relative w-full overflow-hidden h-full flex flex-col pb-12">
                <div
                    className="flex flex-col justify-center items-center gap-4 w-full z-[30] mb-12"
                    style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                >
                    <h5
                        className="text-neutral-400 font-medium text-sm lg:text-xl text-center px-10 lg:px-20 "
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        Những ngành khoa Công nghệ thông tin Đại học Đại Nam đang đào tạo{' '}
                    </h5>
                    <h1
                        className=" font-bold text-center text-2xl lg:text-4xl text-white px-10 lg:px-20"
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        3 NGÀNH
                    </h1>
                    <animated.div
                        style={styles}
                        className="flex flex-wrap justify-center items-center gap-4 px-6 lg:px-20 mt-4"
                    >
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] h-[24rem]"
                            style={{
                                backgroundImage: `url(${card1})`,
                                opacity: '1',
                                willChange: 'auto',
                                transform: 'none',
                            }}
                        >
                            <div className="relative z-2 flex flex-col min-h[22rem] p-[2.4rem] pointer-events-none">
                                <h2 className="font-bold md:text-2xl mb-2 text-[#448bf5]">Ngành Khoa học máy tính</h2>
                                <h4 className="font-bold md:text-lg mb-2 text-[#448bf5]">Mã ngành: 7480101</h4>
                                <p className="body-2 mb-6 text-sm md:text-lg font-semibold text-neutral-700 text-justify">
                                    Ngành Khoa học máy tính tập trung đào tạo các học phần về trí tuệ nhân tạo, học máy,
                                    học sâu, dữ liệu lớn, phân tích dữ liệu, trực quan hóa dữ liệu, xử lý ngôn ngữ tự
                                    nhiên.
                                    <br />
                                    Sinh viên tốt nghiệp đảm nhiệm tốt các vị trí việc làm về trí tuệ nhân tạo, khoa học
                                    dữ liệu, kỹ thuật lập trình.
                                </p>
                            </div>
                            <div className="absolute inset-0.5 bg-n-8 -z-10" style={{ clipPath: 'url(#benefits)' }}>
                                <div className="absolute z-20 bg-white h-full w-full bottom-0 flex items-center">
                                    <img src={image1} width={900} height={900} className="opacity-20" />
                                </div>
                                <div className="absolute inset-0">
                                    <img
                                        src="https://itis-portfolio.vercel.app/bg-benefit.png"
                                        width={900}
                                        height={900}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <svg className="block" width={0} height={0}>
                                <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                                    <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"></path>
                                </clipPath>
                            </svg>
                        </div>
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] h-[24rem]"
                            style={{
                                backgroundImage: `url(${card1})`,
                                opacity: '1',
                                willChange: 'auto',
                                transform: 'none',
                            }}
                        >
                            <div className="relative z-2 flex flex-col min-h[22rem] p-[2.4rem] pointer-events-none">
                                <h2 className="font-bold md:text-2xl mb-2 text-[#da3dd0]">Ngành Công nghệ thông tin</h2>
                                <h4 className="font-bold md:text-lg mb-2 text-[#da3dd0]">Mã ngành: 7480201</h4>
                                <p className="body-2 mb-6 text-sm md:text-lg font-semibold text-neutral-700 text-justify">
                                    Ngành CNTT tập trung đào tạo sâu về kỹ thuật lập trình, thiết kế phần mềm, thiết kế
                                    và xây dựng các hệ thống thông minh.
                                    <br />
                                    Sinh viên sau tốt nghiệm đảm nhiệm tốt các vị trí việc làm về lập trình viên, thiết
                                    kế phần mềm, giải pháp chuyển đổi số, kỹ thuật máy tính, mạng máy tính, nông nghiệp
                                    thông minh, thành phố thông minh.
                                </p>
                            </div>
                            <div className="absolute inset-0.5 bg-n-8 -z-10" style={{ clipPath: 'url(#benefits)' }}>
                                <div className="absolute z-20 bg-white h-full w-full bottom-0 flex items-center">
                                    <img src={image2} width={900} height={900} className="opacity-20" />
                                </div>
                                <div className="absolute inset-0">
                                    <img
                                        src="https://itis-portfolio.vercel.app/bg-benefit.png"
                                        width={900}
                                        height={900}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <svg className="block" width={0} height={0}>
                                <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                                    <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"></path>
                                </clipPath>
                            </svg>
                        </div>
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] h-[24rem]"
                            style={{
                                backgroundImage: `url(${card1})`,
                                opacity: '1',
                                willChange: 'auto',
                                transform: 'none',
                            }}
                        >
                            <div className="relative z-2 flex flex-col min-h[22rem] p-[2.4rem] pointer-events-none">
                                <h2 className="font-bold md:text-2xl mb-2 text-[#3dcb68]">Ngành Hệ thống thông tin</h2>
                                <h4 className="font-bold md:text-lg mb-2 text-[#3dcb68]">Mã ngành: 7480104</h4>
                                <p className="body-2 mb-6 text-sm md:text-lg font-semibold text-neutral-700 text-justify">
                                    Ngành Hệ thống thông tin tập trung đào tạo sâu về thiết kế hệ thống thông tin, tối
                                    ưu hiệu năng hoạt động của hệ thống thông tin, quản trị dữ liệu, phân tích dữ liệu,
                                    quản trị mạng và bảo mật hệ thống.
                                    <br />
                                    Sinh viên sau tốt nghiệp đảm nhiệm tốt các vị trí công việc về phụ trách hệ thống
                                    thông tin của doanh nghiệp, quản trị dữ liệu, quản trị hệ thống CNTT, bảo mật hệ
                                    thống.
                                </p>
                            </div>
                            <div className="absolute inset-0.5 bg-n-8 -z-10" style={{ clipPath: 'url(#benefits)' }}>
                                <div className="absolute z-20 bg-white h-full w-full bottom-0 flex items-center">
                                    <img src={image3} width={900} height={900} className="opacity-20" />
                                </div>
                                <div className="absolute inset-0">
                                    <img
                                        src="https://itis-portfolio.vercel.app/bg-benefit.png"
                                        width={900}
                                        height={900}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <svg className="block" width={0} height={0}>
                                <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                                    <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"></path>
                                </clipPath>
                            </svg>
                        </div>
                    </animated.div>
                </div>
                {/* faq */}
                <FAQ />
            </section>
        </div>
    );
}

export default Department;
