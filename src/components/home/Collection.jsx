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

const Collection = () => {
    const [Collection, setCollection] = useState([]);

    //Extract the first new books as collect books
    useEffect(() => {
        const data = books.slice(0, 7);
        setCollection(data.reverse());
    }, [books]);

    return (
        <section className="max-padd-container py-16 bg-bgColor w-full">
            <Title
                title1={'Bộ sưu tập'}
                title2={' Sách'}
                para={
                    'Khám phá những tác phẩm đến từ khắp mọi nơi trên thế giới của chúng tôi, từ văn học kinh điển đến những cuốn sách bán chạy đương đại thuộc nhiều thể loại đa dạng.'
                }
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
                {Collection.map((book) => (
                    <SwiperSlide key={book._id}>
                        <Item book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Collection;
