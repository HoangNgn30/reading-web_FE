import backfix from '../../assets/labb1.jpg';

function MainContent() {
    return (
        <div className="relative flex items-center w-full min-h-screen bg-fixed bg-cover">
            <div className="absolute inset-0">
                <img
                    src={backfix}
                    alt="Background"
                    className="object-cover h-full w-full"
                    style={{ filter: 'brightness(50%)' }}
                />
            </div>

            <div className="relative z-10 max-w-2xl text-left text-white p-10 md:pl-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">AIoT LAB</h1>
                <p className="text-lg md:text-xl mb-8">
                    Lab Trí tuệ nhân tạo (Lab AI) Lab Trí tuệ nhân tạo (Lab AI) được thành lập vào năm 2022, là đơn vị
                    nghiên cứu thuộc Viện Khoa học tính toán và Trí tuệ nhân tạo, Trường Đại học Văn Lang. Lab AI nghiên
                    cứu phát triển lĩnh vực trí tuệ nhân tạo thông qua nghiên cứu liên ngành, giáo dục và chuyển giao
                    công nghệ. Nghiên cứu của Lab AI tập trung vào phát triển các thuật toán và kỹ thuật học máy, xử lý
                    ngôn ngữ tự nhiên, thị giác máy tính và robot.
                </p>
                <button className="bg-[#D72134] hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
                    Tìm hiểu thêm
                </button>
            </div>
        </div>
    );
}

export default MainContent;
