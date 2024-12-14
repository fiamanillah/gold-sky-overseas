import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from './Section';
import CountUp from 'react-countup';

export default function Stats() {
    // State to trigger CountUp for individual children
    const [startCounting, setStartCounting] = useState([false, false, false, false]);

    const handleViewportEnter = (index) => {
        setStartCounting((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    };

    const childVariants = {
        hidden: { opacity: 0, scale: 0.5 }, // Start hidden and moved down
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }, // Animate to visible
    };

    const stats = [
        { end: 15, suffix: "+", label: "Countries" },
        { end: 150, suffix: "+", label: "Cities" },
        { end: 500, suffix: "+", label: "Happy Clients" },
        { end: 98, suffix: "%", label: "Success Rate" },
    ];

    return (
        <Section>
            <div className="bg-base-300 bg-opacity-20 backdrop-blur-sm border-2 border-base-200  py-7 rounded-2xl flex justify-evenly my-10 mobile-lg:grid mobile-lg:grid-cols-2 gap-5">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        className="flex flex-col items-center"
                        variants={childVariants}
                        initial="hidden"
                        whileInView="visible"
                        onViewportEnter={() => handleViewportEnter(index)} // Trigger CountUp
                        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
                    >
                        {startCounting[index] && (
                            <CountUp
                                className="text-4xl font-bold"
                                start={0}
                                end={stat.end}
                                duration={2.75}
                                suffix={stat.suffix}
                            />
                        )}
                        <span>{stat.label}</span>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
