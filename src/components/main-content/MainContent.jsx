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
                <div className="h-[150px]"></div>
                <div className="w-full bg-[#F3F4F6] opacity-50 mt-6 md:block hidden">
                    <div className="flex justify-around">
                        {/* <div>
                            Lab Trí tuệ nhân tạo (Lab AI) Lab Trí tuệ nhân tạo (Lab AI) được thành lập vào năm 2022, là
                            đơn vị nghiên cứu thuộc Viện Khoa học tính toán và Trí tuệ nhân tạo, Trường Đại học Văn
                            Lang. Lab AI nghiên cứu phát triển lĩnh vực trí tuệ nhân tạo thông qua nghiên cứu liên
                            ngành, giáo dục và chuyển giao công nghệ. Nghiên cứu của Lab AI tập trung vào phát triển các
                            thuật toán và kỹ thuật học máy, xử lý ngôn ngữ tự nhiên, thị giác máy tính và robot. Lab AI
                            nhằm mục đích giải quyết các vấn đề phức tạp trong thế giới thực bằng cách áp dụng công nghệ
                            trí tuệ nhân tạo vào nhiều lĩnh vực khác nhau, bao gồm chăm sóc sức khỏe, tài chính, giao
                            thông vận tải và an ninh mạng.
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
