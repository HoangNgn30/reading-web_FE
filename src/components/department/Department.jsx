import FAQ from "./Faq";
import { useSpring, animated } from '@react-spring/web'
import card1 from '../assets/card-1.svg';
/* eslint-disable react/no-unescaped-entities */
function Department() {
    const styles = useSpring({
        from: { transform: 'translateX(-100%)', opacity: 0 },
        to: { transform: 'translateX(0%)', opacity: 1 },
        config: { tension: 200, friction: 100 }, 
      });
    return ( 
        <div>
            <section id="room" className="relative w-full overflow-hidden h-full flex flex-col pb-12">
                <div className="flex flex-col justify-center items-center gap-4 w-full z-[30] mb-12"
                     style={{opacity: "1", willChange:"auto", transform: "none"}}
                    >
                    <h5
                        className="text-neutral-400 font-medium text-xs lg:text-xl text-center px-10 lg:px-20 "
                        style={{opacity: "1", willChange:"auto", transform: "none"}}
                        >Liên chi đoàn hoạt động với</h5>
                    <h1 className=" font-bold text-center text-2xl lg:text-4xl text-white px-10 lg:px-20"
                        style={{opacity: "1", willChange:"auto", transform: "none"}}
                        >4 BAN</h1>
                    <animated.div style={styles} className="flex flex-wrap justify-center items-center gap-4 px-6 lg:px-20 mt-4">
                        <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] h-[24rem]"
                            style={{
                                backgroundImage:`url(${card1})`,
                                opacity: "1", willChange:"auto", transform: "none"}}
                        >
                            <div className="relative z-2 flex flex-col min-h[22rem] p-[2.4rem] pointer-events-none"
                            >
                                <h2 className="font-bold md:text-2xl mb-2 text-[#3c86f6]">BAN TRUYỀN THÔNG</h2>
                                <p className="body-2 mb-6 text-xs md:text-[1rem] font-semibold text-neutral-700 text-justify">Với slogan Ban "Truyền thông - Không sợ deadline, làm việc nhiệt tình, chơi hết mình" cùng các thành viên vô cùng năng động, sáng tạo và nhiệt huyết, ban Truyền thông mang trên mình sứ mệnh xây dựng, gìn giữ những hình ảnh đẹp về Liên chi, đồng thời là nơi lan tỏa những thông tin của Liên chi Đoàn nói riêng và khoa CNTT1 nói chung đến các bạn sinh viên trong và ngoài Học viện.</p>
                            </div>
                            <div className="absolute inset-0.5 bg-n-8 -z-10"
                            style={{clipPath:'url(#benefits)'}}>
                                <div className="absolute z-20 bg-white h-full w-full bottom-0 flex items-center">
                                    <img src='https://itis-portfolio.vercel.app/truyenthong.png'
                                    width={900} height={900} className="opacity-20"/>
                                </div>
                                <div className="absolute inset-0">
                                    <img src="https://itis-portfolio.vercel.app/bg-benefit.png"
                                    width={900} height={900} className="w-full h-full object-cover"/>
                                </div>
                            </div>
                            <svg className="block" width={0} height={0}>
                                <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                                <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"></path>
                                </clipPath>
                            </svg>
            
                        </div>
                        <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] h-[24rem]"
                            style={{
                                backgroundImage:`url(${card1})`,
                                opacity: "1", willChange:"auto", transform: "none"}}
                        >
                            <div className="relative z-2 flex flex-col min-h[22rem] p-[2.4rem] pointer-events-none">
                                <h2 className="font-bold md:text-2xl mb-2 text-[#3c86f6]">BAN HẬU CẦN</h2>
                                <p className="body-2 mb-6 text-xs md:text-[1rem] font-semibold text-neutral-700 text-justify">Ban Hậu Cần của ITIS bởi những thành viên đáng tin cậy và năng động, chịu trách nhiệm chủ yếu trong việc chuẩn bị các điều kiện vật chất cần thiết để đảm bảo mỗi sự kiện diễn ra suôn sẻ. Với tinh thần hợp tác, chúng tôi là khả năng kết nối mạch lạc giữa các bộ phận khác và là nguồn động viên quan trọng đằng sau mỗi thành công của tổ chức. Ban Hậu Cần là những người góp phần tạo nên không gian hoàn hảo cho mỗi sự kiện, đảm bảo rằng mọi điều kiện cần thiết sẽ được sắp xếp và chuẩn bị sẵn sàng.</p>
                            </div>
                            <div className="absolute inset-0.5 bg-n-8 -z-10"
                            style={{clipPath:'url(#benefits)'}}>
                                <div className="absolute z-20 bg-white h-full w-full bottom-0 flex items-center">
                                    <img src='https://itis-portfolio.vercel.app/haucan.png'
                                    width={900} height={900} className="opacity-20"/>
                                </div>
                                <div className="absolute inset-0">
                                    <img src="https://itis-portfolio.vercel.app/bg-benefit.png"
                                    width={900} height={900} className="w-full h-full object-cover"/>
                                </div>
                            </div>
                            <svg className="block" width={0} height={0}>
                                <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                                <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"></path>
                                </clipPath>
                            </svg>
            
                        </div>
                        <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] h-[24rem]"
                            style={{
                                backgroundImage:`url(${card1})`,
                                opacity: "1", willChange:"auto", transform: "none"}}
                        >
                            <div className="relative z-2 flex flex-col min-h[22rem] p-[2.4rem] pointer-events-none">
                                <h2 className="font-bold md:text-2xl mb-2 text-[#3c86f6]">BAN NỘI DUNG</h2>
                                <p className="body-2 mb-6 text-xs md:text-[1rem] font-semibold text-neutral-700 text-justify">Ban Nội dung - sân chơi của các tài năng được tỏa sáng, với những ý tưởng độc đáo, đặc sắc được gọi tên. Đây là nơi hội tụ của những con người nhiệt tình, tự tin và đam mê với lĩnh vực tổ chức các sự kiện, là nơi lên ý tưởng và kế hoạch cho các sự kiện của khoa và theo sát chương trình ngay từ những ngày đầu tiên. Là một lực lượng nòng cốt của Liên chi Đoàn, ban Nội dung giữ vai trò quan trọng trong việc công tác tổ chức các sự kiện như: xây dựng kế hoạch tổ chức, lên timeline chương trình, dự trù kinh phí cũng như xử lý các tình huống phát sinh.</p>
                            </div>
                            <div className="absolute inset-0.5 bg-n-8 -z-10"
                            style={{clipPath:'url(#benefits)'}}>
                                <div className="absolute z-20 bg-white h-full w-full bottom-0 flex items-center">
                                    <img src='https://itis-portfolio.vercel.app/noidung.png'
                                    width={900} height={900} className="opacity-20"/>
                                </div>
                                <div className="absolute inset-0">
                                    <img src="https://itis-portfolio.vercel.app/bg-benefit.png"
                                    width={900} height={900} className="w-full h-full object-cover"/>
                                </div>
                            </div>
                            <svg className="block" width={0} height={0}>
                                <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                                <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"></path>
                                </clipPath>
                            </svg>
            
                        </div>
                        <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem] h-[24rem]"
                            style={{
                                backgroundImage:`url(${card1})`,
                                opacity: "1", willChange:"auto", transform: "none"}}
                        >
                            <div className="relative z-2 flex flex-col min-h[22rem] p-[2.4rem] pointer-events-none">
                                <h2 className="font-bold md:text-2xl mb-2 text-[#3c86f6]">BAN NHÂN SỰ</h2>
                                <p className="body-2 mb-6 text-xs md:text-[1rem] font-semibold text-neutral-700 text-justify">Với slogan “Không ngại khó, chỉ sợ không có” cùng các thành viên hết sức năng động và nhiệt huyết, Ban Nhân sự đã, đang và sẽ hướng tới một hình mẫu đẹp và phù hợp, để đóng góp vào hình ảnh của Liên chi, đồng thời là cầu nối quan trọng giữa các bạn sinh viên trong Khoa và Liên chi Đoàn Khoa CNTT1, giúp cho các bạn sinh viên nắm bắt được những thông tin quan trọng, cũng như được tư vấn, hỗ trợ và giúp đỡ trong quá trình học tập tại Học viện.</p>
                            </div>
                            <div className="absolute inset-0.5 bg-n-8 -z-10"
                            style={{clipPath:'url(#benefits)'}}>
                                <div className="absolute z-20 bg-white h-full w-full bottom-0 flex items-center">
                                    <img src='https://itis-portfolio.vercel.app/nhansu.png'
                                    width={900} height={900} className="opacity-20"/>
                                </div>
                                <div className="absolute inset-0">
                                    <img src="https://itis-portfolio.vercel.app/bg-benefit.png"
                                    width={900} height={900} className="w-full h-full object-cover"/>
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
                <FAQ/>
            </section>
            
        </div>
     );
}

export default Department;
