import { useEffect, useState } from 'react';
import { MdWork, MdCardTravel, MdUpdate } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from './Section';

const Services = () => {
    const [services, setServices] = useState([]);

    // Fetch data from the public folder
    useEffect(() => {
        fetch('/services.json')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    // Map icons to React Icons components
    const iconMap = {
        MdWork: <MdWork />,
        FaGraduationCap: <FaGraduationCap />,
        MdCardTravel: <MdCardTravel />,
        MdUpdate: <MdUpdate />,
        AiOutlinePhone: <AiOutlinePhone />,
    };

    // Refined card animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
        hover: {
            scale: 1.02, // Slight scale up on hover
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Added shadow for hover effect
            transition: { duration: 0.3, type: 'spring', stiffness: 300 },
        },
    };

    // Define gradient background colors (top-to-bottom)
    const gradientColors = [
        'bg-gradient-to-b from-pink-400 to-red-500',
        'bg-gradient-to-b from-green-400 to-teal-500',
        'bg-gradient-to-b from-yellow-400 to-orange-500',
        'bg-gradient-to-b from-purple-400 to-pink-500',
    ];

    // Define icon background colors corresponding to the gradients
    const iconBg = ['bg-pink-600', 'bg-green-500', 'bg-yellow-500', 'bg-purple-600'];

    // Icon animation variants
    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.2, duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <Section className="py-10 mb-10 relative">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold mb-2">Our Services</h1>
                <p className="text-lg">
                    Explore the wide range of services we offer to help you achieve your goals.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        className={`overflow-hidden flex flex-col items-center text-center px-3 py-6 rounded-xl shadow-xl ${
                            gradientColors[index % gradientColors.length]
                        }`}
                        key={service.id}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div
                            style={{ borderRadius: '50%' }}
                            className={`text-5xl p-4 rounded-full border-4 text-white shadow-2xl ${
                                iconBg[index % iconBg.length]
                            }`}
                            variants={iconVariants}
                        >
                            {iconMap[service.icon]}
                        </motion.div>
                        <h2 className="font-bold mt-4 text-white p-3">{service.title}</h2>
                        <div className="bg-black bg-opacity-10 p-3 rounded-xl h-full flex flex-col items-center justify-between">
                            <p className="text-justify text-white mt-2 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            <Link
                                className="btn mt-4 px-6 py-2 text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-105 text-sm border-none"
                                to={service.detailsLink} // Use "to" instead of "href" for Link
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[70px] flex justify-start items-end">
                <div
                    style={{
                        clipPath:
                            'polygon(0% 25.5%, 51.5% 47.38%, 45.18% 88.68%, 42.43% 39.1%, 35.49% 10.13%, 55.5% 21.25%, 80.46% 0.19%, 75.73% 32.5%, 79.75% 100%, 100% 32.5%, 65.99% 42.93%, 31.98% 53.36%, 30.77% 37.2%, 33.9% 78.9%, 2.15% 86.09%)',
                    }}
                    className="relative aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 translate-y-11"
                />
            </div>
        </Section>
    );
};

export default Services;
