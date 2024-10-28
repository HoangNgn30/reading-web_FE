import React from 'react';
import Slider from 'react-slick';
import anh1 from '../../assets/Mem1.jpg';
import anh2 from '../../assets/Phong.jpg';
import anh3 from '../../assets/Mem3.jpg';
import anh4 from '../../assets/Mem4.jpg';
import anh5 from '../../assets/Mem5.jpg';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IMemberListProps {
    className?: string;
}

const members = [
    { position: 'Trưởng Lab', name: 'ThS. Lê Trung Hiếu', image: anh1 },
    { position: 'Thành viên', name: 'ThS. Lê Văn Phong', image: anh2 },
    { position: 'Thành viên', name: 'ThS. Lê Thị Thùy Trang', image: anh3 },
    { position: 'Thành viên', name: 'ThS. Nguyễn Ngọc Ân', image: anh4 },
    { position: 'Thành viên', name: 'ThS. Lê Tuấn Anh', image: anh5 },
];

const CustomArrow = ({ className, onClick, direction }) => (
    <div
        className={`${className} ${
            direction === 'left' ? 'left-2' : 'right-2'
        } absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-gray-300`}
        onClick={onClick}
    >
        {direction === 'left' ? <BiArrowFromLeft size={24} /> : <BiArrowFromRight size={24} />}
    </div>
);

export default function AdviserList({ className }: IMemberListProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className={`flex flex-col items-center ${className} w-full max-w-screen-lg mx-auto`}>
            <h3 className="text-primary md:text-4xl text-3xl font-bold self-center md:mb-6 mb-10">Thành viên</h3>

            <div className="md:mb-6 mb-2 flex flex-col items-end px-6">
                <button className="md:px-4 px-3 py-2 rounded-full bg-orange-400 hover:scale-105 font-medium md:text-md text-sm text-neutral-500 flex gap-2 items-center">
                    <span>Tìm hiểu thêm</span>
                    <BiArrowFromLeft size={20} />
                </button>
            </div>

            <div className="w-full overflow-hidden">
                <Slider {...settings} className="w-full">
                    {members.map((item, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-center">
                                <div className="rounded-lg overflow-hidden w-full h-80 flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
                                <p className="text-gray-700">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
