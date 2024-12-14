import Section from './Section';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Serajul Islam Patwary',
        role: 'Managing Director BALTD',
        image: '/testimonial/1.png',
        quote: 'I have been working with Gold Sky Overseas for years, and their services are exceptional. They have consistently supported me in my work journey in Saudi Arabia!',
    },
    {
        name: 'Md. Rezuanul Haque',
        role: 'CEO SAMSWISS',
        image: '/testimonial/2.png',
        quote: 'Gold Sky Overseas has been instrumental in helping me secure opportunities across Europe. Their expertise in Schengen visas and European employment is unmatched!',
    },
    {
        name: 'Al-Amin Hossain',
        role: 'Founder of Bridge Sky',
        image: '/testimonial/3.png',
        quote: 'My experience with Gold Sky Overseas has been fantastic. Their professionalism and dedication have made my work in Saudi Arabia smooth and successful!',
    },
    {
        name: 'Mamun Khan',
        role: 'Director IOE',
        image: '/testimonial/4.png',
        quote: 'Gold Sky Overseas has been my trusted partner for work in Saudi Arabia, Dubai, Turkey, and Serbia. Their reliable support has made every opportunity seamless and rewarding!',
    },
];

export default function Testimonial() {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <Section className={'relative'}>
            <div
                className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
                id="testimonials"
            >
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 tracking-tight font-extrabold">Client Testimonials</h2>
                    <p className="mb-8 font-light lg:mb-16 sm:text-xl">
                        Hear from individuals who have successfully navigated their journey to work
                        abroad with the help of our expert visa consultancy services.
                    </p>
                </div>
                <motion.div
                    className="grid mb-8 lg:mb-12 lg:grid-cols-2 rounded-2xl overflow-hidden border-2 border-base-300 border-lightCardSecondary dark:border-darkCardSecondary shadow-xl relative"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <figure
                            key={index}
                            className={`flex flex-col justify-center items-center p-8 text-center bg-base-200 border-b border-base-300 md:p-12 ${
                                index % 2 === 0 ? 'lg:border-r' : ''
                            }`}
                        >
                            <blockquote className="mx-auto mb-8 max-w-2xl">
                                <h3 className="text-lg font-semibold">“{testimonial.quote}”</h3>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <img
                                    className="w-9 h-9 rounded-full"
                                    src={testimonial.image}
                                    alt="profile picture"
                                />
                                <div className="space-y-0.5 font-medium text-left">
                                    <div>{testimonial.name}</div>
                                    <div className="text-sm font-light">{testimonial.role}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}

                    <div className="absolute inset-0 z-0 transform-gpu overflow-hidden blur-[60px] ]">
                        <div
                            style={{
                                clipPath:
                                    'polygon(69.98% 14.35%, 24.17% 36.24%, 37.28% 29.97%, 46.97% 37.23%, 82.61% 8.31%, 100% 11%, 66.05% 26.5%, 7.5% 69.09%, 40.75% 88.5%, 80.11% 69.09%, 24.13% 78.79%, 20% 64.06%, 59.43% 64.06%, 59.43% 64.06%, 0% 88.5%, 7.5% 69.09%, 66.05% 26.5%, 41.94% 11%, 90.5% 5.74%)',
                            }}
                            className="relative  aspect-video w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  "
                        />
                    </div>
                </motion.div>
            </div>

            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[70px] ]">
                <div
                    style={{
                        clipPath:
                            'polygon(2.43% 12.75%, 8.29% 38%, 25.26% 16.48%, 19.61% 46.21%, 23.25% 46.21%, 61.49% 85.05%, 91.47% 90.75%, 79.42% 58.71%, 93.26% 65.83%, 79.42% 95.28%, 71.02% 73.43%, 62.13% 86.27%, 23.62% 46.21%, 19.56% 20.74%, 14.93% 43.88%, 13.86% 25%)',
                    }}
                    className="relative  aspect-video w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  "
                />
            </div>
        </Section>
    );
}
