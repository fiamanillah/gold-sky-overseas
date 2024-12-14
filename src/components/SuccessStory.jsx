import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay } from 'swiper/modules';
import Section from './Section';

export default function SuccessStory() {
    // Dummy Data for Testimonials
    const testimonials = [
        {
            id: 1,
            name: 'Alaef Hossain',
            location: 'Saudi Arabia',
            review: 'Riyadh has become my second home! Working in the chocolate factory is a dream come true, and I’m learning so much every day. Gold Sky Overseas made this journey smooth and successful',
            rating: 5,
            imgSrc: '/successStory/Alaef Hossain.jpg', // Replace with real image link
        },
        {
            id: 2,
            name: 'Sakib Hossain',
            location: 'Saudi Arabia',
            review: 'Life in Saudi Arabia has been a blessing for me. Working in the restaurant industry has opened doors to new opportunities and skills. Thanks to Gold Sky Overseas, I’m building a brighter future!',
            rating: 5,
            imgSrc: '/successStory/Shakib Hossain.jpg', // Replace with real image link
        },
        {
            id: 3,
            name: 'Rubel Hossain',
            location: 'Saudi Arabia',
            review: 'My journey to Saudi Arabia has been nothing short of amazing. Working in food supply has given me stability and pride in my work. Grateful to Gold Sky Overseas for making this possible',
            rating: 5,
            imgSrc: '/successStory/Rubel Hossain.jpg', // Replace with real image link
        },
        {
            id: 4,
            name: 'Mohammad Nahim Mozumder',
            location: 'Saudi Arabia',
            review: 'My job as an assistant at a community center is fulfilling and keeps me motivated. With a daily earning of 15 Riyals for 8 hours of work, I’m happy and progressing. Grateful to Gold Sky Overseas for making this journey possible',
            rating: 5,
            imgSrc: '/successStory/Mohammad Nahim Mozumder.jpg', // Replace with real image link
        },
        {
            id: 5,
            name: 'Noron Nobi Ariyan',
            location: 'Saudi Arabia',
            review: 'Working at a coffee shop in Riyadh has been an exciting and enjoyable experience. With a salary of 1600 Riyals, I’m proud of my work and love what I do every day. Thank you, Gold Sky Overseas, for helping me achieve this!',
            rating: 5,
            imgSrc: '/successStory/Noron Nobi Ariyan.jpg', // Replace with real image link
        },
        {
            id: 6,
            name: 'Ashik Hossain',
            location: 'Saudi Arabia',
            review: ' Working in a madrasa cleaning job has been a stable and rewarding experience. Earning 1000 Riyals monthly with opportunities for overtime has improved my life. Thanks to Gold Sky Overseas, I’m doing great in Saudi Arabia!',
            rating: 5,
            imgSrc: '/successStory/Ashik Hossain.jpg', // Replace with real image link
        },
        {
            id: 7,
            name: 'Delewyer Hossain',
            location: 'Saudi Arabia',
            review: ' Outdoor cleaning in Saudi Arabia has brought stability and financial security to my family. Earning 1200 Riyals with opportunities for overtime has made a huge difference. Gold Sky Overseas has truly transformed my life!',
            rating: 5,
            imgSrc: '/successStory/Delewyer Hossain.jpg', // Replace with real image link
        },
        // Add more testimonial objects as needed
    ];

    return (
        <Section className={'py-8'}>
            <div className="p-8 mobile-lg:p-0">
                <h2 className="text-3xl font-bold text-center mb-4">Voices of Success</h2>
                <p className="text-center  mb-8">
                    Discover firsthand experiences and success stories from clients who have
                    embarked on their abroad journeys with Gold Sky Overseas Study Abroad Ltd.
                </p>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        // When the window width is >= 0px (mobile devices)
                        0: {
                            slidesPerView: 1, // Show 1 slide
                        },
                        // When the window width is >= 768px (tablet and above)
                        768: {
                            slidesPerView: 2, // Show 2 slides
                        },
                    }}
                >
                    {testimonials.map(testimonial => (
                        <SwiperSlide key={testimonial.id} className="flex justify-center py-5">
                            <div className=" bg-base-200 shadow-lg p-4 rounded-lg flex gap-4 laptop-xl:flex-col relative">
                                <img
                                    src={testimonial.imgSrc}
                                    alt={testimonial.name}
                                    className="w-[300px] mobile-sm:w-full h-[300px] object-cover rounded-lg mb-4"
                                />
                                <div className="flex flex-col justify-evenly">
                                    <blockquote className="pl-2 text-lg mb-4">
                                        &quot;{testimonial.review}&quot;
                                    </blockquote>
                                    <div className="flex items-center gap-2 mb-2">
                                        {Array(testimonial.rating)
                                            .fill()
                                            .map((_, index) => (
                                                <span
                                                    key={index}
                                                    className="text-orange-500 text-xl"
                                                >
                                                    ★
                                                </span>
                                            ))}
                                    </div>
                                    <h3 className=" font-bold">{testimonial.name}</h3>
                                    <p className="text-primary">{testimonial.location}</p>
                                </div>

                                <img
                                    className="absolute w-[140px] bottom-0 right-5 opacity-30 z-0"
                                    src="/qoute.png"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Section>
    );
}
