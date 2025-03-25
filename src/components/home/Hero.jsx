import heroVideo from '../../assets/hero.mp4';
import bgHero from '../../assets/bgHero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgHero})` }}
            />

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
                    {/* Left side */}
                    <div className="text-white space-y-6">
                        <h1 className="h1 max-w-[46rem]">Hãy để trí tưởng tượng của bạn được dong chơi</h1>
                        <br />
                        <p>
                            Khám phá những cuốn sách đầy mê hoặc, khơi dậy trí tưởng tượng của bạn và đưa bạn vào những
                            thế giới mới mẻ, nơi sự sáng tạo không có giới hạn.
                        </p>
                        <div className="pt-4">
                            <Link to="/books" className="btn-secondaryOne hover:text-gray-50 transition-colors">
                                Khám phá ngay
                            </Link>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <video autoPlay loop muted playsInline className="w-full aspect-[4/5] object-cover">
                                <source src={heroVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
