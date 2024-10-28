import React from 'react';
import anh1 from '../../assets/o3djdjq0tzxy76vnh0z320240115042507_thump.jpg';
import anh2 from '../../assets/6alqk0tbxvmh72ov51il20231205065453_thump.jpg';
import anh3 from '../../assets/bieoyveubm5r8d35bbcc20240228092829_thump.jpg';
import anh4 from '../../assets/Mem4.jpg';
import { BiArrowFromLeft } from 'react-icons/bi';

interface IAdvisorListProps {
    className?: string;
}

const members = [
    {
        name: 'Cố vấn 1',
        position: 'Mô tả Cố vấn 1',
        image: anh1,
        member: true,
    },
    {
        name: 'Cố vấn 2',
        position: 'Mô tả Cố vấn 2',
        image: anh2,
        member: true,
    },
    {
        name: 'Cố vấn 3',
        position: 'Mô tả Cố vấn 3',
        image: anh3,
        member: true,
    },
    {
        name: 'Cố vấn 3',
        position: 'Mô tả Cố vấn 3',
        image: anh4,
        member: true,
    },
];

export default function AdviserList({ className }: IAdvisorListProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <h3 className="text-primary text-4xl font-bold self-center md:mb-6 mb-10">CỐ VẤN</h3>

            <div className="md:mb-6 mb-2 flex flex-col items-end px-6"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 gap-4 px-6 mb-10">
                {members.map((item, index) => (
                    <div key={index}>
                        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg p-4 w-full h-96 flex flex-col">
                            <img src={item.image} alt={item.name} className="w-full h-64 object-cover mb-4" />
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-700">{item.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
