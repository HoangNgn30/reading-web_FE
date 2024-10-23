import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import anh1 from '../../assets/o3djdjq0tzxy76vnh0z320240115042507_thump.jpg';
import anh2 from '../../assets/6alqk0tbxvmh72ov51il20231205065453_thump.jpg';
import anh3 from '../../assets/bieoyveubm5r8d35bbcc20240228092829_thump.jpg';
import anh4 from '../../assets/jrz7falci9ohz3quwa3820230601011109_thump.jpg';
import anh5 from '../../assets/tgsr6q056c80wytv0n4720221227011757_thump.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const items = [
    {
        title: 'Thành viên 1',
        description: 'Mô tả Thành viên 1',
        image: anh1,
    },
    {
        title: 'Thành viên 2',
        description: 'Mô tả Thành viên 2',
        image: anh2,
    },
    {
        title: 'Thành viên 3',
        description: 'Mô tả Thành viên 3',
        image: anh3,
    },
    {
        title: 'Thành viên 4',
        description: 'Mô tả Thành viên 4',
        image: anh4,
    },
    {
        title: 'Thành viên 5',
        description: 'Mô tả Thành viên 5',
        image: anh5,
    },
];

function MemberSlide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="py-12 rounded-lg w-[90%]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20">
                <div className="flex lg:flex-row flex-col lg:items-start items-center gap-8 justify-between">
                    <div className="flex flex-col space-y-2">
                        <h2 className="xl:text-3xl text-xl font-bold text-primary">THÀNH VIÊN</h2>

                        <button className="px-4 py-2 rounded-full bg-orange-400 font-medium md:text-md text-sm text-neutral-500">
                            Tìm hiểu thêm <i className="fa-solid fa-angles-right"></i>
                        </button>
                    </div>

                    <div className="lg:w-[75%] w-full">
                        <Slider {...settings}>
                            {items.map((item, index) => (
                                <div key={index} className="px-2">
                                    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 w-full h-96">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-64 object-cover mb-4"
                                        />

                                        <h3 className="text-lg font-semibold">{item.title}</h3>

                                        <p className="text-gray-700">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberSlide;
