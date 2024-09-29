import Slider from './Slider';
import section from '../assets/section.svg'
import itis from '../assets/ITIS LA NHA.png'

function Introduce() {
    return (
        <div className="flex flex-col items-center justify-center h-full relative overflow-hidden z-20 pb-10">
            <div id="Intro" className="h-full w-full bg-[#040224] ">
                <div
                    className="flex flex-col items-center justify-center w-full z-[30]"
                    style={{ opacity: '1', willChange: 'auto' }}
                >
                    <h3
                        className="font-normal text-2xl text-neutral-400 text-center mt-[3rem]"
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        Giới thiệu
                    </h3>
                    <h1
                        className="font-bold text-4xl text-white text-center my-3 mx-6"
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        Liên chi Đoàn Khoa CNTT1 - PTIT
                    </h1>
                    <div className="flex flex-col lg:flex-row w-full lg:my-10 items-center justify-center gap-5 px-10 lg:px-20">
                        <Slider></Slider>
                        <div className="flex flex-col gap-3 lg:max-w-[550px] text-neutral-300 text-justify lg:ml-6">
                            <p
                                className="text-base lg:text-xl"
                                style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                            >
                                <span className="font-bold">Liên chi Đoàn khoa CNTT1</span> là Liên chi Đoàn lớn nhất
                                Học viện với khoảng hơn 5000 đoàn viên.
                            </p>
                            <p
                                className="text-base lg:text-xl"
                                style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                            >
                                <span className="font-bold">Liên chi Đoàn khoa CNTT1</span> là đơn vị đoàn thể trực
                                thuộc khoa CNTT1-PTIT. Với mục đích mang lại lợi ích của sinh viên trong khoa, đẩy mạnh
                                các hoạt động của khoa CNTT1, Liên chi Đoàn Khoa CNTT1 tạo ra nhiều sân chơi giúp sinh
                                viên trong khoa trở nên năng động hơn trong mọi hoạt động. Là là nơi hội tụ của các bạn
                                sinh viên ngành CNTT, CNTT CLC, KHMT, ATTT, CNTT Việt - Nhật.
                            </p>
                        </div>
                    </div>
                    <h3
                        className="font-normal text-2xl text-neutral-400 text-center my-3 lg:my-6"
                        style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                    >
                        Video giới thiệu
                    </h3>
                    <div className="w-full px-10 flex mb-[4rem] items-center justify-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/d9gIJpnlRQM?si=-v9KGKfandREPhR8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen=""
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="w-full h-full relative -z-9">
                <img
                    src={itis}
                    width="1920"
                    alt=""
                    className="absolute -top-6 lg:-top-8 z-10 rotate-20 w-full"
                />
                <img src={section} width="1920" alt="" className="rotate-180 mb-0 relative pt-4 lg:pt-8 w-full" />
            </div>
        </div>
    );
}

export default Introduce;
