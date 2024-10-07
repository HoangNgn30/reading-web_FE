import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function SimpleSlide({ listOb }) {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2, // Hiển thị 2 slides cho màn hình từ 1024 đến 1280
                    centerPadding: '30px',
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Hiển thị 1 slide cho màn hình nhỏ hơn 1024
                },
            },
            
        ],
    };
    return (
        <div>
            <Slider {...settings} className="xl:w-[1090px] md:w-[720px] w-[430px]">
                {listOb.map((ob, index) => {
                    return (
                        <div className="w-[330px] max-w-[330px] h-[300px] relative" key={index}>
                            <div
                                className="w-[300px] max-w-[300px] h-[300px] bg-white rounded-3xl flex flex-col items-center overflow-hidden box-border absolute left-1/2 "
                                style={{ transform: 'translateX(-50%)' }}
                                
                            >
                                <div className="w-full " style={{ aspectRatio: 4 / 3 }}>
                                    <img src={ob.image} className="w-full h-full object-cover object center"></img>
                                </div>
                                <div className="p-2.5">
                                    <p className="line-clamp-2 text-lg font-bold">{ob.content}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default SimpleSlide;
