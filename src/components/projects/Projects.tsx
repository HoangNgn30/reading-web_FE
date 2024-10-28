import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ResearchProjects = () => {
    return (
        <div className="container mx-auto px-4 py-8 w-[90%]">
            <h1 className="text-3xl font-semibold mb-6 text-primary">Đề tài/Dự án & Công bố khoa học</h1>

            <div className="mb-8 bg-gray-200 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Đề tài/Dự án</h2>
                    <button className="flex items-center font-semibold text-primary">
                        Tìm hiểu thêm <FaArrowRight className="ml-1" />
                    </button>
                </div>
                <hr className="my-4" />
            </div>

            <div className="mb-8 bg-gray-200 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Công bố khoa học</h2>
                    <button className="flex items-center text-red-500 font-semibold">
                        Tìm hiểu thêm <FaArrowRight className="ml-1" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded shadow">
                        <h3 className="font-semibold">
                            Profitability of Ichimoku-Based Trading Rule in Vietnam Stock Market in the Context of the
                            COVID-19 Outbreak
                        </h3>
                        <p className="text-gray-600">TS. Lê Trung Hiếu</p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="font-semibold">
                            Mining frequent weighted utility patterns with dynamic weighted items from quantitative
                            databases
                        </h3>
                        <p className="text-gray-600">TS. Lê Văn Phong</p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="font-semibold">OPT-BAG Model for Predicting Student Employability</h3>
                        <p className="text-gray-600">KS. Nguyễn Văn Nhân</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchProjects;
