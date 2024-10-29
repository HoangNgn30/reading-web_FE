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
                    Phòng Lab Trí tuệ nhân tạo và Ứng dụng IoT (Lab AIoT), thành lập tháng 8/2024 tại Khoa Công nghệ
                    thông tin, Trường Đại học Đại Nam, là trung tâm nghiên cứu AI và IoT tiên tiến. Được trang bị máy
                    chủ, cảm biến, robot và phần mềm hiện đại, Lab tập trung phát triển các thuật toán học máy, xử lý
                    ngôn ngữ tự nhiên, thị giác máy tính và robot, đồng thời tổ chức các hội thảo kết nối sinh viên với
                    chuyên gia. Lab AIoT không ngừng đóng góp vào đào tạo và sự phát triển của Nhà trường
                </p>
                {/* <button className="bg-[#D72134] hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
                    Tìm hiểu thêm
                </button> */}
            </div>
        </div>
    );
}

export default MainContent;
