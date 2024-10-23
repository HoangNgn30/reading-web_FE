import { memo, useEffect, useRef, useState } from 'react';
import lab1 from '../../assets/lab1.jpg';
import lab2 from '../../assets/lab2.jpg';
import lab3 from '../../assets/lab3.jpg';
import lab4 from '../../assets/lab4.jpg';

let count = 0;
function Slider() {
    const listImage = [
        { src: lab1, content: '' },
        { src: lab2, content: '' },
        { src: lab3, content: '' },
        { src: lab4, content: '' },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggleReeffect, setToogleReefect] = useState(false);
    const slideWrapper = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            handleClickNext();
        }, 5000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toggleReeffect]);
    const handleClickNext = () => {
        if (count === listImage.length - 1) {
            count = 0;
            setCurrentIndex(count);
        } else {
            count++;
            setCurrentIndex(count);
        }
        let width = slideWrapper.current.offsetWidth;
        slideWrapper.current.style.transform = `translateX(${-1 * width * count}px)`;
    };
    const handleClickBack = () => {
        if (count === 0) {
            count = listImage.length - 1;
            setCurrentIndex(count);
        } else {
            count--;
            setCurrentIndex(count);
        }
        let width = slideWrapper.current.offsetWidth;
        slideWrapper.current.style.transform = `translateX(${-1 * width * count}px)`;
    };
    return (
        <div
            className=" relative w-full lg:min-w-[450px] max-w-[650px] z-30 mb-6 rounded-[30px] overflow-hidden  border-box"
            style={{ opacity: '1', willChange: 'auto', transform: 'none', aspectRatio: 3 / 2 }}
        >
            <div ref={slideWrapper} className="flex w-full h-full duration-500">
                {listImage.map((image, index) => {
                    return (
                        <div key={index} className="relative shrink-0 w-full">
                            <img src={image.src} className="w-full h-full object-cover object-center" />
                            <h5 className="absolute left-2/4 -translate-x-2/4 bottom-[50px] text-[30px] text-white inline-block font-bold whitespace-nowrap">
                                {image.content}
                            </h5>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-row w-full items-center justify-center absolute bottom-[10px] h-[20px]">
                {listImage.map((image, index) => {
                    return (
                        <div
                            className={`w-[30px] h-[3px] rounded-sm ${
                                currentIndex === index ? 'bg-white' : 'bg-slate-300'
                            } mx-[4px] cursor-pointer`}
                            key={index}
                        ></div>
                    );
                })}
            </div>
            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                onClick={() => {
                    handleClickBack();
                    setToogleReefect((prev) => !prev);
                }}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                </span>
            </button>
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                onClick={() => {
                    handleClickNext();
                    setToogleReefect((prev) => !prev);
                }}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                </span>
            </button>
        </div>
    );
}

export default memo(Slider);
