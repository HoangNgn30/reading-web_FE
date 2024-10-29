import React from 'react';
import anh1 from '../../assets/cv1.jpg';
import anh2 from '../../assets/cv2.jpg';
import anh3 from '../../assets/cv3.jpg';

interface IAdviserListProps {
    className?: string;
}

const members = [
    { position: 'Phó trưởng Khoa CNTT', name: 'TS. Đậu Hải Phong', image: anh2 },
    { position: 'Trưởng Khoa CNTT', name: 'TS. Trần Đăng Công', image: anh1 },
    { position: 'Phó trưởng Khoa CNTT', name: 'ThS. Phạm Văn Tiệp', image: anh3 },
];

const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    centerPadding: '50px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                centerPadding: '30px',
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerPadding: '20px',
            },
        },
    ],
};

export default function AdviserList({ className }: IAdviserListProps) {
    return (
        <div className={`flex flex-col items-center ${className} w-full max-w-screen-lg mx-auto md:px-2 px-8`}>
            <h3 className="text-[#001355] md:text-4xl text-3xl font-bold mb-10">CỐ VẤN</h3>

            <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 gap-x-4">
                {members.map((item, index) => (
                    <div key={index} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
                        <div className="w-full md:h-80 h-72">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full md:object-cover"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-700">{item.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
