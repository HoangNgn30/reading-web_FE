import React, { useEffect, useState } from "react";
import { useMemberApi } from "../../services/memberServices";

interface IAdviserListProps {
    className?: string;
}

export default function AdviserList({ className }: IAdviserListProps) {
    const { getMembers } = useMemberApi();
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const response = await getMembers();
            if (response?.data) {
                const filteredMembers = response.data.filter(member => member.isApplied);
                setMembers(filteredMembers);
            }
        };

        fetchMembers();
    }, []);

    return (
        <div
            id="Member"
            className={`flex flex-col items-center ${className} w-full max-w-screen-lg mx-auto md:px-2 px-8`}
        >
            <h3 className="text-[#001355] md:text-4xl text-3xl font-bold mb-10">CỐ VẤN</h3>

            <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 gap-x-4">
                {members.length > 0 ? (
                    members.map((item, index) => (
                        <div key={index} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
                            <div className="w-full md:h-80 h-72">
                                <img
                                    src={item.image || "/default-avatar.png"}
                                    alt={item.name}
                                    className="w-full h-full md:object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-700">{item.position}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">Không có cố vấn nào được hiển thị.</p>
                )}
            </div>
        </div>
    );
}
