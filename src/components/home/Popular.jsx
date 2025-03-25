import { useState, useEffect } from 'react';
import Title from './Title';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { books } from '../../assets/data';
import Item from '../item/Item';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Popular = () => {
    const [Popular, setPopular] = useState([]);

    //Extract the first new books as popular books
    useEffect(() => {
        const data = books.filter(item => item.popular)
        setPopular(data.slice(0, 5))
    }, [books]);

    return (
        <section className="max-padd-container py-16 bg-bgColor w-full">
            <Title
                title1={'Sách'}
                title2={' được đọc nhiều nhất'}
                para={'Khám phá những cuốn sách được đọc nhiều nhất  của chúng tôi'}
                titleStyles={'pb-10'}
                paraStyles={'!block text-black'}
            />
            {/* Swiper container*/}
            <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                //Add swiper modules
                modules={[Pagination, Autoplay]}
                className="h-[455px] sm:h-[488px] md:h-[455px] xl:h-[499px] mt-5"
            >
                {Popular.map((book) => (
                    <SwiperSlide key={book._id}>
                        <Item book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Popular;
