import Slider from './Slider';
import section from '../../assets/section.svg';
import LabSlider from './LabSlider';
import { useState } from 'react';
import MemberSlide from '../slide/MemberSlide';

function Introduce() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-full relative overflow-hidden z-20 pb-10">
            <div id="Intro" className="h-full w-full bg-[#e4ded0]">
                <div
                    className="flex flex-col items-center justify-center w-full z-[30]"
                    style={{ opacity: '1', willChange: 'auto', backdropFilter: 'brightness(90%)' }}
                >
                    <h3
                        className="font-normal text-2xl text-black text-center mt-[3rem]"
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        Giới thiệu
                    </h3>
                    <h1
                        className="font-bold text-4xl text-primary text-center my-3 mx-6"
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        NGÀNH CÔNG NGHỆ THÔNG TIN
                    </h1>
                    <div className="flex flex-col lg:flex-row w-full lg:my-10 items-center justify-center gap-5 px-10 lg:px-20 mb-20">
                        <Slider></Slider>
                        <div className="flex flex-col gap-3 lg:max-w-[550px] text-black text-justify lg:ml-6">
                            <p
                                className="text-base lg:text-xl"
                                style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                            >
                                <span className="font-bold">Ngành Công nghệ thông tin (CNTT) </span> là một trong những
                                ngành được thành lập sớm nhất của trường Đại học Đại Nam. Sau 15 năm xây dựng và phát
                                triển, trường đã đào tạo được hơn 2.000 cử nhân CNTT chất lượng, tự tin hội nhập, tham
                                gia vào thị trường công nghệ rộng lớn, đầy cạnh tranh.
                            </p>
                            <p
                                className="text-base lg:text-xl"
                                style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                            >
                                Tốt nghiệp ngành Công nghệ thông tin, sinh viên có thể đảm nhiệm các công việc như: Lập
                                trình viên phần mềm, chuyên viên phân tích thiết kế hệ thống, quản lý dữ liệu, quản trị
                                mạng, kỹ thuật phần cứng máy tính, … tại các công ty phần mềm; Trở thành chuyên gia quản
                                lý, điều phối các dự án công nghệ thông tin tại các tập đoàn, tổ chức thương mại điện tử
                                trong và ngoài nước; Cán bộ, Chuyên viên về CNTT ở bộ phận CNTT hoặc cần ứng dụng CNTT ở
                                các cơ sở đào tạo từ bậc trung học phổ thông đến bậc đại học và các viện nghiên cứu.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full lg:my-10 items-center justify-center gap-5 px-10 lg:px-20 mb-20">
                        <LabSlider />

                        <div className="flex flex-col gap-3 lg:max-w-[550px] text-black text-justify lg:ml-6">
                            <p
                                className="text-base lg:text-xl"
                                style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                            >
                                <span className="font-bold">
                                    Phòng Lab AIoT Khoa Công nghệ thông tin Đại học Đại Nam
                                </span>{' '}
                                là một không gian học tập và nghiên cứu tiên tiến, được xây dựng với mục tiêu hỗ trợ
                                sinh viên và giảng viên trong việc khám phá và ứng dụng công nghệ Internet vạn vật (IoT)
                                và trí tuệ nhân tạo (AI). Lab được trang bị hệ thống máy tính mạnh mẽ, các thiết bị cảm
                                biến, robot giao tiếp, và các công cụ phần mềm hiện đại, tạo điều kiện thuận lợi cho
                                việc thực hiện các dự án nghiên cứu cũng như các bài tập thực hành.
                            </p>
                            {showMore && (
                                <p
                                    className="text-base lg:text-xl"
                                    style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                                >
                                    Ngoài việc phục vụ cho hoạt động học tập, phòng Lab còn tổ chức các buổi seminar,
                                    hội thảo với sự tham gia của các chuyên gia trong lĩnh vực AIoT, giúp sinh viên tiếp
                                    cận những kiến thức mới nhất và trao đổi kinh nghiệm thực tiễn. Sinh viên sẽ có cơ
                                    hội làm việc trong các dự án nghiên cứu đa dạng, từ phát triển ứng dụng thông minh
                                    cho nhà ở đến hệ thống giám sát trong nông nghiệp, hoặc các giải pháp giao thông
                                    thông minh, tạo ra giá trị thực tế cho cộng đồng. Với sự hỗ trợ từ giảng viên và sự
                                    khuyến khích tham gia vào các cuộc thi và dự án khởi nghiệp, phòng Lab AIoT không
                                    chỉ là nơi học tập mà còn là môi trường thúc đẩy sự sáng tạo, khơi dậy đam mê nghiên
                                    cứu và phát triển công nghệ trong thế hệ sinh viên tương lai.
                                </p>
                            )}
                            <button
                                className="text-primary underline mt-2 text-lg"
                                onClick={() => setShowMore(!showMore)}
                            >
                                {showMore ? 'Thu gọn...' : 'Đọc thêm...'}
                            </button>
                        </div>
                    </div>

                    <MemberSlide />

                    <h3
                        className="font-normal text-2xl text-black text-center my-3 lg:my-6"
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        Video giới thiệu
                    </h3>
                    <div className="w-full px-10 flex mb-[4rem] items-center justify-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/gLlDPBXyyxg"
                            title="Khám Phá Trường Đại Học Đại Nam | Tuyển Sinh 2024"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ maxWidth: '100%' }}
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="w-full h-full relative -z-9 -mt-2" style={{ filter: 'brightness(90%)' }}>
                <img src={section} width="1920" alt="" className="rotate-180 mb-0 relative pt-4 lg:pt-8 w-full" />
            </div>
        </div>
    );
}

export default Introduce;
