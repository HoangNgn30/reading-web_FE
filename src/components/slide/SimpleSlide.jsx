/* eslint-disable react/prop-types */
import { FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SimpleGrid({ listOb }) {
    // Slider settings
    const settings = {
        dots: false, // Show dots for navigation
        infinite: true, // Infinite loop sliding
        speed: 500, // Transition speed
        slidesToShow: 3, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        responsive: [
            {
                breakpoint: 1024, // Adjust settings for screen sizes
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="scrollbar-custom overflow-x-auto flex flex-col px-24">
            <button className="flex items-center text-black font-medium text-base md:self-end self-center mb-8">
                Tìm hiểu thêm
                <span className="flex items-center ml-2 bg-red-600 text-white py-1 font-bold px-4 text-center content-center rounded-full">
                    <FaArrowRight className="ml-1" />
                </span>
            </button>
            <Slider {...settings} className="grid gap-x-8 gap-y-8">
                {listOb.map((ob, index) => (
                    <div key={index} className="flex-shrink-0 rounded-lg px-4 h-fit">
                        <div className="bg-white rounded-lg flex flex-col items-center">
                            <div className="w-full">
                                <img src={ob.image} className="w-full rounded-t-lg h-64 object-cover" alt="member" />
                            </div>
                            <div className="p-3 md:h-40 h-52 text-[#172554]">
                                <p className="text-lg font-medium">{ob.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SimpleGrid;
