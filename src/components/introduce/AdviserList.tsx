import React from 'react';
import Slider from 'react-slick';
import anh1 from '../../assets/cv1.jpg';
import anh2 from '../../assets/cv2.jpg';
import anh3 from '../../assets/cv3.jpg';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IMemberListProps {
    className?: string;
}

const members = [
    { position: 'Phó trưởng Khoa CNTT', name: 'TS. Đậu Hải Phong', image: anh2 },
    { position: 'Trưởng Khoa CNTT', name: 'TS. Trần Đăng Công', image: anh1 },
    { position: 'Phó trưởng Khoa CNTT', name: 'ThS. Phạm Văn Tiệp', image: anh3 },
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
        autoplay: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className={`flex flex-col items-center ${className} w-full max-w-screen-lg mx-auto`}>
            <h3 className="text-[#001355] md:text-4xl text-3xl font-bold self-center md:mb-6 mb-10">CỐ VẤN</h3>

            <div className="md:mb-6 mb-2 flex flex-col items-end px-6"></div>

            <div className="w-full overflow-hidden">
                <Slider {...settings} className="w-full">
                    {members.map((item, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-gray-200 shadow-lg rounded-lg flex flex-col items-center">
                                <div className="rounded-t-lg overflow-hidden w-full h-80 flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
                                <p className="text-gray-700 pb-4">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
