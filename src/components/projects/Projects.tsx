import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Project.css';

const ResearchProjects = () => {
    return (
        <div id="Project" className="container mx-auto px-4 py-8 w-[90%] flex flex-col">
            <h1 className="text-[#001355] md:text-4xl text-3xl font-bold mb-10 self-center">
                ĐỀ TÀI/DỰ ÁN & CÔNG BỐ KHOA HỌC
            </h1>

            <div className="mb-8 bg-gray-200 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Đề tài/Dự án</h2>

                    <button className="flex items-center text-black font-medium text-base">
                        Tìm hiểu thêm
                        <span className="flex items-center ml-2 bg-red-600 text-white py-1 font-bold px-4 text-center content-center rounded-full">
                            <FaArrowRight className="ml-1" />
                        </span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold">
                        <h3 className="font-medium">
                            NGHIÊN CỨU XÂY DỰNG HỆ THỐNG PHẦN MỀM KIỂM TRA TRÙNG LẶP TRONG CÁC BÁO CÁO HỌC TẬP CỦA SINH
                            VIÊN NGÀNH CÔNG NGHỆ THÔNG TIN TẠI TRƯỜNG ĐẠI HỌC ĐẠI NAM”
                        </h3>
                    </div>
                </div>

                <hr className="my-4" />
            </div>

            <div className="mb-8 bg-gray-200 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold self-center">Công bố khoa học</h2>

                    <button className="flex items-center text-black font-medium text-base">
                        Tìm hiểu thêm
                        <span className="flex items-center ml-2 bg-red-600 text-white py-1 font-bold px-4 text-center content-center rounded-full">
                            <FaArrowRight className="ml-1" />
                        </span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold">
                        <h3 className="font-medium pr-3">
                            Hand segmentation under different viewpoints by combination of Mask R-CNN with tracking DH
                            Nguyen, TH Le, TH Tran, H Vu, TL Le, HG Doan 2018 5th Asian conference on defense technology
                            (ACDT), 14-20 20 2018
                        </h3>
                        <p className="text-gray-600">TS. Lê Trung Hiếu</p>
                    </div>
                    <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold">
                        <h3 className="font-medium pr-3">
                            The Internet-of-Things based hand gestures using wearable sensors for human machine
                            interaction TH Le, TH Tran, C Pham 2019 International Conference on Multimedia Analysis and
                            Pattern Recognition … 15 2019
                        </h3>
                        <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                    </div>
                    <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold">
                        <h3 className="font-medium pr-3">
                            Hand Gesture Recognition From Wrist-Worn Camera for Human–Machine Interaction HQ Nguyen, TH
                            Le, TK Tran, HN Tran, TH Tran, TL Le, H Vu, C Pham, ... IEEE Access 11, 53262-53274 6 2023
                        </h3>
                        <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                    </div>
                    <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold">
                        <h3 className="font-medium pr-3">
                            A pilot study on hand posture recognition from wrist-worn camera for human machine
                            interaction TH Tran, HN Tran, HQ Nguyen, TH Le, VT Nguyen, TK Tran, C Pham, ... 2021
                            International Conference on Advanced Technologies for Communications … 5 2021
                        </h3>
                        <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                    </div>
                    <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold">
                        <h3 className="font-medium pr-3">
                            Human action recognition from inertial sensors with transformer TH Le, TH Tran, C Pham 2022
                            international conference on multimedia analysis and pattern recognition … 2022
                        </h3>
                        <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                    </div>
                    <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold">
                        <h3 className="font-medium pr-3">
                            Combined local and global features for action recognition from motion sensors TH Le, QT
                            Nguyen, TH Tran, C Pham International Conference on Intelligence of Things, 146-155 1 2022
                        </h3>
                        <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                    </div>
                    <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold">
                        <h3 className="font-medium pr-3">
                            Hand Gesture Recognition From Wrist-Worn Camera for Human–Machine Interaction HQ Nguyen, TH
                            Le, TK Tran, HN Tran, TH Tran, TL Le, H Vu, C Pham, ... IEEE Access 11, 53262-53274 6 2023
                        </h3>
                        <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchProjects;
