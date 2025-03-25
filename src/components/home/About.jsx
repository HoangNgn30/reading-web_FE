import Title from '../home/Title';
import { MdLightbulbOutline } from 'react-icons/md';
import about from '../../assets/about.jpg';

const About = () => {
    return (
        <section className='max-padd-container py-12 xl:py-24 bg-bgColorOne'>
            {/* container */}
            <div className='flexCenter flex-col gap-16 xl:gap-8 xl:flex-row'>
                {/* left side  */}
                <div className='flex-1 '>
                    <Title
                        title1={'Tất cả'}
                        title2={' về Read Love!'}
                        para={
                            'Từ những tác phẩm kinh điển vượt thời gian đến những sáng tác hiện đại, hãy tìm cuốn sách hoàn hảo cho mọi khoảnh khắc '
                        }
                        titleStyles={'pb-10'}
                        paraStyles={'!block text-black'}
                    />
                    <div className='flex flex-col items-start gap-y-4'>
                        <div className="flexCenter gap-x-4">
                            <div className="h-16 min-w-16 bg-secondaryOne flexCenter rounded-md">
                                <MdLightbulbOutline className="text-2xl" />
                            </div>
                            <div>
                                <h4 className="medium-18">Thiết kế hiện đại và tối ưu</h4>
                                <p className='text-text1'>
                                    Trang web được thiết kế với phong cách hiện đại, tối giản và sang trọng mang lại
                                    trải nghiệm người dùng cao cấp và thân thiện.
                                </p>
                            </div>
                        </div>
                        <div className="flexCenter gap-x-4">
                            <div className="h-16 min-w-16 bg-secondaryOne flexCenter rounded-md">
                                <MdLightbulbOutline className="text-2xl" />
                            </div>
                            <div>
                                <h4 className="medium-18">Thiết kế hiện đại và tối ưu</h4>
                                <p className='text-text1'>
                                    Trang web được thiết kế với phong cách hiện đại, tối giản và sang trọng mang lại
                                    trải nghiệm người dùng cao cấp và thân thiện.
                                </p>
                            </div>
                        </div>
                        <div className="flexCenter gap-x-4">
                            <div className="h-16 min-w-16 bg-secondaryOne flexCenter rounded-md">
                                <MdLightbulbOutline className="text-2xl" />
                            </div>
                            <div>
                                <h4 className="medium-18">Thiết kế hiện đại và tối ưu</h4>
                                <p className='text-text1'>
                                    Trang web được thiết kế với phong cách hiện đại, tối giản và sang trọng mang lại
                                    trải nghiệm người dùng cao cấp và thân thiện.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side  */}
                <div className='flex-1 flexCenter'>
                    <div className='bg-secondary flexCenter p-24 max-h-[33rem] max-w-[33rem] rounded-3xl'>
                        <img src={about} alt="aboutImg" height={244} width={244} className='shadow-2xl shadow-slate-900/50 rounded-lg'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
