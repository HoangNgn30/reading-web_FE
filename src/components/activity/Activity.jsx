import anh1 from '../../assets/o3djdjq0tzxy76vnh0z320240115042507_thump.jpg';
import anh2 from '../../assets/6alqk0tbxvmh72ov51il20231205065453_thump.jpg';
import anh3 from '../../assets/bieoyveubm5r8d35bbcc20240228092829_thump.jpg';
import anh4 from '../../assets/jrz7falci9ohz3quwa3820230601011109_thump.jpg';
import anh5 from '../../assets/tgsr6q056c80wytv0n4720221227011757_thump.jpg';
import SimpleSlide from '../slide/SimpleSlide';

function Activity() {
    const listActivity = [
        {
            image: anh1,
            content:
                'Doanh nghiệp tiếp sức đào tạo, sinh viên CNTT Đại Nam rộng cửa thực tập và làm việc tại các doanh nghiệp lớn',
        },
        {
            image: anh2,
            content: 'Đại học Đại Nam đẩy mạnh hợp tác nghiên cứu và ứng dụng giảng dạy trí tuệ nhân tạo tại khoa CNTT',
        },
        {
            image: anh3,
            content: 'Cuộc thi tìm kiếm "Tài Năng Lập Trình DNU, khám phá khả năng lập trình của bạn',
        },
        {
            image: anh4,
            content:
                'Sinh viên FIT-DNU trải nghiệm thực tế tại FPT Software: Nhà trường đẩy mạnh đào tạo thực hành, doanh nghiệp có cơ hội “thẩm định” nguồn nhân lực chất lượng cao',
        },
        {
            image: anh5,
            content:
                'Đối thoại trực tiếp với doanh nghiệp: Hiểu thị trường, nắm bắt xu hướng công nghệ, quy trình vận hành của DN để có việc làm ngay khi còn ngồi trên ghế nhà trường',
        },
    ];
    return (
        <div
            className="flex flex-col items-center justify-center h-full relative overflow-hidden z-10 py-10 bg-[#F2F5FF] w-full"
            id="Activity"
        >
            <div
                className="flex flex-col items-center justify-center gap-4 w-full z-[30]"
                style={{ opacity: '1', willChange: 'auto' }}
            >
                <h1
                    className="font-bold text-center text-2xl lg:text-4xl text-[#001355] px-10 lg:px-20 mt-8 my-10"
                    style={{ opacity: '1', willChange: 'auto', transform: 'none' }}
                >
                    HOẠT ĐỘNG
                </h1>
                <SimpleSlide listOb={listActivity} />
            </div>
            <img src="/section_white.png" width="1920" alt="" className="w-full relative" />
        </div>
    );
}

export default Activity;
