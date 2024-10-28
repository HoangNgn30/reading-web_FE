import section from '../../assets/section.svg';
import LabSlider from './LabSlider';
import { useState } from 'react';
import Memberlist from './Memberlist';
import AdviserList from './AdviserList';
import ResearchProjects from '../projects/Projects';

function Introduce() {
    return (
        <div className="flex flex-col items-center justify-center h-full relative overflow-hidden z-20 pb-10">
            <div id="Intro" className="h-full w-full bg-[#e4ded0]">
                <div
                    className="flex flex-col items-center justify-center w-full z-[30]"
                    style={{ opacity: '1', willChange: 'auto', backdropFilter: 'brightness(90%)' }}
                >
                    <h3
                        className="xl:text-3xl text-xl font-bold text-primary mt-20"
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        GIỚI THIỆU
                    </h3>

                    <div className="flex flex-col lg:flex-row w-full lg:my-10 items-center justify-center gap-5 px-10 lg:px-20 mb-20">
                        <LabSlider />

                        <div className="flex flex-col gap-3 lg:max-w-[550px] h-fit text-black text-justify lg:ml-6">
                            <p
                                className="text-base lg:text-xl"
                                style={{ opacity: '1', willChange: 'auto', fit: 'true' }}
                            >
                                <span className="font-bold">
                                    Phòng Lab AIoT Khoa Công nghệ thông tin Đại học Đại Nam
                                </span>{' '}
                                là một không gian học tập và nghiên cứu tiên tiến, được xây dựng với mục tiêu hỗ trợ
                                sinh viên và giảng viên trong việc khám phá và ứng dụng công nghệ Internet vạn vật (IoT)
                                và trí tuệ nhân tạo (AI). Lab được trang bị hệ thống máy tính mạnh mẽ, các thiết bị cảm
                                biến, robot giao tiếp, và các công cụ phần mềm hiện đại, tạo điều kiện thuận lợi cho
                                việc thực hiện các dự án nghiên cứu cũng như các bài tập thực hành. Ngoài việc phục vụ
                                cho hoạt động học tập, phòng Lab còn tổ chức các buổi seminar, hội thảo với sự tham gia
                                của các chuyên gia trong lĩnh vực AIoT, giúp sinh viên tiếp cận những kiến thức mới nhất
                                và trao đổi kinh nghiệm thực tiễn. Sinh viên sẽ có cơ hội làm việc trong các dự án
                                nghiên cứu đa dạng, từ phát triển ứng dụng thông minh cho nhà ở đến hệ thống giám sát
                                trong nông nghiệp, hoặc các giải pháp giao thông thông minh, tạo ra giá trị thực tế cho
                                cộng đồng. Với sự hỗ trợ từ giảng viên và sự khuyến khích tham gia vào các cuộc thi và
                                dự án khởi nghiệp, phòng Lab AIoT không chỉ là nơi học tập mà còn là môi trường thúc đẩy
                                sự sáng tạo, khơi dậy đam mê nghiên cứu và phát triển công nghệ trong thế hệ sinh viên
                                tương lai.
                            </p>
                        </div>
                    </div>

                    <Memberlist className="mt-20" />

                    <AdviserList className="mt-20" />

                    <ResearchProjects />
                </div>
            </div>
            <div className="w-full h-full relative -z-9 -mt-2" style={{ filter: 'brightness(90%)' }}>
                <img src={section} width="1920" alt="" className="rotate-180 mb-0 relative pt-4 lg:pt-8 w-full" />
            </div>
        </div>
    );
}

export default Introduce;
