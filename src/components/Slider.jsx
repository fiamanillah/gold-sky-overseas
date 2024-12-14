import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Section from './Section';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Slider() {
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/slider.json');
                const data = await response.json();
                setSliderData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        })();
    }, []);

    const textAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const containerAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    return (
        <Section className={'relative'}>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="h-[80vh] rounded-lg"
            >
                {sliderData?.map(slide => (
                    <SwiperSlide key={slide.id} className="relative text-white">
                        <motion.img
                            className="h-full w-full object-cover absolute inset-0 z-0"
                            src={slide.backgroundImage}
                            alt="Slide Background"
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 20 }}
                            viewport={{ once: true, amount: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] from-20%">
                            <motion.div
                                className="w-2/4 laptop-xl:w-3/4 mobile-lg:w-full h-full flex flex-col justify-center items-start gap-6 p-5"
                                variants={containerAnimation}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.h1
                                    className="text-white text-4xl font-bold"
                                    variants={textAnimation}
                                >
                                    {slide.headline}
                                </motion.h1>
                                <motion.h2 className="text-white text-2xl" variants={textAnimation}>
                                    {slide.subheadline}
                                </motion.h2>
                                <motion.p className="text-white text-lg" variants={textAnimation}>
                                    {slide.paragraph}
                                </motion.p>
                                <motion.button
                                    className="btn btn-primary"
                                    variants={textAnimation}
                                >
                                    <Link to={slide.ctaButtons.link}>
                                        {' '}
                                        <span className="text-secondaryContent font-bold">
                                            {slide.ctaButtons.text}{' '}
                                        </span>
                                    </Link>
                                </motion.button>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[70px] flex justify-end items-end">
                <div
                    style={{
                        clipPath:
                            'polygon(0% 25.5%, 51.5% 47.38%, 45.18% 88.68%, 42.43% 39.1%, 35.49% 10.13%, 55.5% 21.25%, 80.46% 0.19%, 75.73% 32.5%, 79.75% 100%, 100% 32.5%, 65.99% 42.93%, 31.98% 53.36%, 30.77% 37.2%, 33.9% 78.9%, 2.15% 86.09%)',
                    }}
                    className="relative  inset-0  aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  translate-y-11"
                />
            </div>
        </Section>
    );
}
