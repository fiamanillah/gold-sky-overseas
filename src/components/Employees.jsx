import Section from './Section';
import { motion } from 'framer-motion';
import React from 'react';
export default function Employees() {
    const animationVariants = {
        hidden: direction => ({ opacity: 0, x: direction === 'right' ? 50 : -50 }),
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' }, // Smoother transition with easeOut
        },
        hover: {
            scale: 1.02, // Slight scale up on hover
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Added shadow for hover effect
            transition: { duration: 0.3, type: 'spring', stiffness: 300 },
        },
    };

    const employees = [
        {
            name: 'Abu Jar Gifary Jahid',
            position: 'Managing Director',
            direction: 'left',
            quote: 'Leadership is not about titles, it is about impact.',
            photoUrl: '/employee/1.jpg', // Replace with actual URL
        },
        {
            name: 'Md. Thohidul Islam',
            position: 'Executive Officer',
            direction: 'right',
            quote: 'Efficiency is doing better what is already being done.',
            photoUrl: '/employee/2.jpg', // Replace with actual URL
        },
        {
            name: 'Tasniva Ittasum Sumi',
            position: 'Software Engineer',
            direction: 'left',
            quote: 'Code is like humor. When you have to explain it, it’s bad.',
            photoUrl: '/employee/3.jpg', // Replace with actual URL
        },
        {
            name: 'Firozur Rahman',
            position: 'Computer Operator',
            direction: 'right',
            quote: 'The future belongs to those who prepare today.',
            photoUrl: '/employee/4.jpg', // Replace with actual URL
        },
        {
            name: 'Farjana Mim',
            position: 'Receptionist',
            direction: 'left',
            quote: 'Welcoming smiles, lasting impressions.',
            photoUrl: '/employee/5.jpg', // Replace with actual URL
        },
    ];

    const gradientColors = [
        'bg-gradient-to-r from-pink-500 to-red-500',
        'bg-gradient-to-r from-green-400 to-teal-500',
        'bg-gradient-to-r from-yellow-400 to-orange-500',
        'bg-gradient-to-r from-purple-500 to-pink-500',
    ];

    return (
        <Section className={'relative'}>
            <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold mb-2">Meet Our Team</h1>
                <p className="text-lg">
                    Our dedicated team helps you navigate the visa application process and fulfill
                    your dreams of visiting abroad.
                </p>
            </div>
            <div className="relative flex flex-col justify-center items-center laptop-xl:gap-3">
                <div className="absolute inset-0 laptop-xl:hidden ">
                    <div className="w-1 bg-primary h-[80%] absolute inset-0 top-[50%] translate-y-[-50%] left-1/2 translate-x-[-50%]"></div>
                    {employees.map((_, index) => (
                        <React.Fragment key={index}>
                            {/* Circle */}
                            <div
                                className="w-6 h-6 bg-primary absolute rounded-full"
                                style={{
                                    top: `calc(${index * 20}% + 10%)`, // Adjust the top position dynamically
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            ></div>
                            {/* Line */}
                            <div
                                className={`w-[200px] h-1 bg-primary absolute rounded-full ${
                                    index % 2 === 0 ? 'right-[50%]' : 'left-[50%]'
                                }`}
                                style={{
                                    top: `calc(${index * 20}% + 10%)`, // Same top position as the circle

                                    transform:
                                        index % 2 === 0 ? 'translateY(-50%)' : 'translateY(-50%)',
                                }}
                            ></div>
                        </React.Fragment>
                    ))}
                </div>
                {employees.map((employee, index) => (
                    <div
                        key={employee.name}
                        className={`w-10/12 laptop-xl:w-full flex justify-${
                            employee.direction === 'right' ? 'end' : 'start'
                        } items-center round`}
                    >
                        <motion.div
                            className={`h-[250px] w-2/5 laptop-xl:w-full bg-base-300 text-base-content rounded-2xl z-10 flex items-center p-3 border-2 border-primary shadow-2xl relative overflow-hidden`}
                            initial="hidden"
                            whileInView="visible"
                            custom={employee.direction}
                            variants={animationVariants}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover="hover" // Trigger hover effect on hover
                        >
                            <div className="-z-20">
                                <div
                                    className={`absolute inset-0 ${gradientColors[index]}`}
                                    style={{
                                        clipPath:
                                            'polygon(0.35% 75%, 10.4% 37.6%, 18.6% 95.03%, 40.55% 19.09%, 59.98% 58.6%, 80.63% 92.68%, 92.7% 6.77%, 88.18% 63.51%, 72.93% 42.95%, 55.02% 69.68%, 29.4% 1%, 33.01% 77.14%, 26.45% 75%, 13.4% 58.6%)',
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-base-100 bg-opacity-25 backdrop-blur-[80px]"></div>
                            </div>
                            <div className="p-3 h-full flex items-center basis-1/3">
                                <img
                                    className="border-8 rounded-full border-primary w-full max-w-[150px] max-h-[150px]"
                                    src={employee.photoUrl}
                                    alt=""
                                />
                            </div>
                            <div className="basis-2/3">
                                <h1 className="text-xl font-semibold ">{employee.name}</h1>
                                <p className="text-primary text-sm">{employee.position}</p>
                                <blockquote className=" text-sm italic mt-2">
                                    &quot;{employee.quote}&quot;
                                </blockquote>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[90px] flex justify-end items-start">
                <div
                    style={{
                        clipPath:
                            'polygon(0% 58%, 100% 67%, 100% 18%, 75% 76.5%, 75% 12.88%, 35.5% 82.5%, 35.5% 7.5%)',
                    }}
                    className="relative  inset-0  aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  translate-y-11"
                />
            </div>

            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[80px] flex justify-start items-end">
                <div
                    style={{
                        clipPath:
                            'polygon(0% 35.25%, 24.17% 36.24%, 37.28% 29.97%, 82.61% 8.31%, 100% 11%, 66.05% 26.5%, 7.5% 69.09%, 40.75% 88.5%, 80.11% 69.09%, 72.3% 53.25%, 100% 29.97%, 59.43% 43.8%, 59.43% 64.06%, 0% 88.5%, 7.5% 69.09%, 66.05% 26.5%, 48.8% 30.79%, 7.5% 58.25%)',
                    }}
                    className="relative  inset-0  aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  translate-y-11"
                />
            </div>
        </Section>
    );
}
