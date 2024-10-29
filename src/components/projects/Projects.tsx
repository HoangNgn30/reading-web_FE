import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Project.css';

const ResearchProjects = () => {
    return (
        <div id="Project" className="container mx-auto px-4 py-8 w-[90%] flex flex-col">
            <h1 className="text-[#001355] md:text-4xl text-3xl font-bold mb-10 self-center">
                ĐỀ TÀI/DỰ ÁN & CÔNG BỐ KHOA HỌC
            </h1>

            {/* Project Carousel */}
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
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="project-swiper"
                >
                    <SwiperSlide>
                        <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold md:w-full w-[300px]">
                            <h3 className="font-medium">
                                NGHIÊN CỨU XÂY DỰNG HỆ THỐNG PHẦN MỀM KIỂM TRA TRÙNG LẶP TRONG CÁC BÁO CÁO HỌC TẬP CỦA
                                SINH VIÊN NGÀNH CÔNG NGHỆ THÔNG TIN TẠI TRƯỜNG ĐẠI HỌC ĐẠI NAM
                            </h3>
                        </div>
                    </SwiperSlide>
                    {/* Add more SwiperSlide components as needed */}
                </Swiper>

                <hr className="my-4" />
            </div>

            {/* Publications Carousel */}
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

                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    // navigation
                    // pagination={{ clickable: true }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="project-swiper"
                >
                    <SwiperSlide>
                        <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold h-40">
                            <h3 className="font-medium pr-3">
                                Hand segmentation under different viewpoints by combination of Mask R-CNN with tracking
                                DH Nguyen, TH Le, TH Tran, H Vu, TL Le, HG Doan
                            </h3>
                            <p className="text-gray-600">TS. Lê Trung Hiếu</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold h-40">
                            <h3 className="font-medium pr-3">
                                The Internet-of-Things based hand gestures using wearable sensors for human machine
                                interaction TH Le, TH Tran, C Pham
                            </h3>
                            <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold h-40">
                            <h3 className="font-medium pr-3">
                                Hand Gesture Recognition From Wrist-Worn Camera for Human–Machine Interaction HQ Nguyen,
                                TH Le, TK Tran, HN Tran, TH Tran, TL Le, H Vu, C Pham
                            </h3>
                            <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold h-40">
                            <h3 className="font-medium pr-3">
                                Hand Gesture Recognition From Wrist-Worn Camera for Human–Machine Interaction HQ Nguyen,
                                TH Le, TK Tran, HN Tran, TH Tran, TL Le, H Vu, C Pham
                            </h3>
                            <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold h-40">
                            <h3 className="font-medium pr-3">
                                Hand Gesture Recognition From Wrist-Worn Camera for Human–Machine Interaction HQ Nguyen,
                                TH Le, TK Tran, HN Tran, TH Tran, TL Le, H Vu, C Pham
                            </h3>
                            <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border rounded shadow bg-[#F2F8FF] relative corner-fold h-40">
                            <h3 className="font-medium pr-3">
                                Hand Gesture Recognition From Wrist-Worn Camera for Human–Machine Interaction HQ Nguyen,
                                TH Le, TK Tran, HN Tran, TH Tran, TL Le, H Vu, C Pham
                            </h3>
                            <p className="text-gray-600">ThS. Lê Trung Hiếu</p>
                        </div>
                    </SwiperSlide>
                    {/* Add additional SwiperSlide components as needed */}
                </Swiper>
            </div>
        </div>
    );
};

export default ResearchProjects;
