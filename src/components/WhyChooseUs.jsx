import { motion } from 'framer-motion';
import Section from './Section';
import {
    FaRegIdCard,
    FaRegClock,
    FaHandshake,
    FaMoneyBillWave,
    FaUsers,
    FaGlobeAmericas,
} from 'react-icons/fa';

export default function WhyChooseUs() {
    const features = [
        {
            title: 'Expert Visa Consultants',
            description:
                'Our experienced visa consultants have in-depth knowledge of various visa processes and can guide you through every step of the application.',
            icon: <FaRegIdCard />,
        },
        {
            title: 'Fast Processing Times',
            description:
                'We offer expedited services to ensure that your visa application is processed quickly, so you can travel without unnecessary delays.',
            icon: <FaRegClock />,
        },
        {
            title: 'Trusted by Thousands',
            description:
                'Our consultancy is trusted by thousands of clients around the world, ensuring you receive reliable and professional service every time.',
            icon: <FaHandshake />,
        },
        {
            title: 'Affordable and Transparent Pricing',
            description:
                'We believe in providing excellent value for money. Our pricing is transparent with no hidden fees, so you always know what to expect.',
            icon: <FaMoneyBillWave />,
        },
        {
            title: 'Personalized Support',
            description:
                'We offer personalized consultations, tailoring solutions based on your specific visa needs, ensuring that you have the right advice for your situation.',
            icon: <FaUsers />,
        },
        {
            title: 'Global Expertise',
            description:
                'With experience in processing visas for multiple countries, we provide expert guidance for a variety of immigration and travel requirements.',
            icon: <FaGlobeAmericas />,
        },
    ];

    return (
        <Section className={'relative'}>
            <div
                className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
                id="why-choose-us"
            >
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 font-extrabold">Why Choose Us</h2>
                    <p className="mb-8 font-light lg:mb-16 sm:text-xl text-base-content">
                        With years of experience and a focus on your unique needs, we make the visa
                        application process simple, fast, and efficient.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col justify-center items-start p-6 rounded-lg shadow-md bg-base-200 border border-base-300"
                            initial={{ opacity: 0, y: 30 }} // initial state
                            whileInView={{ opacity: 1, y: 0 }} // final state when in view
                            transition={{ duration: 0.5, ease: 'easeInOut' }} // animation properties
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{
                                scale: 1.02, // Slight scale up on hover
                                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Added shadow for hover effect
                                transition: { duration: 0.3, type: 'spring', stiffness: 300 },
                            }}
                        >
                            <div className="mb-4">
                                <span className="text-4xl text-primary">{feature.icon}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm font-light text-gray-600 dark:text-gray-400 text-left">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[90px] ]">
                <div
                    style={{
                        clipPath:
                            'polygon(0% 25.5%, 51.5% 47.38%, 45.18% 88.68%, 42.43% 39.1%, 35.49% 10.13%, 55.5% 21.25%, 80.46% 0.19%, 75.73% 32.5%, 79.75% 100%, 100% 32.5%, 65.99% 42.93%, 31.98% 53.36%, 30.77% 37.2%, 33.9% 78.9%, 2.15% 86.09%)',
                    }}
                    className="relative  aspect-video w-[50vw]  bottom-0 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  "
                />
            </div>
        </Section>
    );
}
