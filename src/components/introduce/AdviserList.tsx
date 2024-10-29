import React from 'react';
import anh1 from '../../assets/cv1.jpg';
import anh2 from '../../assets/cv2.jpg';
import anh3 from '../../assets/cv3.jpg';

interface IMemberListProps {
    className?: string;
}

const members = [
    { position: 'Phó trưởng Khoa CNTT', name: 'TS. Đậu Hải Phong', image: anh2 },
    { position: 'Trưởng Khoa CNTT', name: 'TS. Trần Đăng Công', image: anh1 },
    { position: 'Phó trưởng Khoa CNTT', name: 'ThS. Phạm Văn Tiệp', image: anh3 },
];

export default function AdviserList({ className }: IMemberListProps) {
    return (
        <div className={`flex flex-col items-center ${className} w-full mx-auto px-28`}>
            <h3 className="text-[#001355] md:text-4xl text-3xl font-bold mb-10">CỐ VẤN</h3>

            <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-8">
                {members.map((item, index) => (
                    <div key={index} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
                        <div className="w-full h-80">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
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
