import { motion } from 'framer-motion';
import { FaGlobe, FaPlane, } from 'react-icons/fa';
import { MdWork, MdCardTravel, } from 'react-icons/md';
import Section from './Section';

const faqData = [
    {
        question: 'What is included in Visa Processing services?',
        answer: 'We provide end-to-end visa processing assistance, including document preparation, embassy filing, interview guidance, and updates on the status of your visa application.',
        icon: <MdWork />,
    },
    {
        question: 'Can you help with booking air tickets?',
        answer: 'Yes, we offer air ticketing services for both domestic and international flights. We assist with booking the best flights based on your preferences and budget.',
        icon: <FaPlane />,
    },
    {
        question: 'What are the highlights of your Domestic Tour packages?',
        answer: 'Our domestic tours offer customized travel packages to explore Bangladesh’s top destinations, including Cox’s Bazar, Sundarbans, Bandarban, and more, with comfortable transport and expert tour guides.',
        icon: <MdCardTravel />,
    },
    {
        question: 'What does the International Tour package include?',
        answer: 'Our international tour packages cover travel planning, flight bookings, hotel reservations, transportation, guided tours, and special activities to make your trip memorable.',
        icon: <FaGlobe />,
    },
    {
        question: 'How do you assist with Work Visa Processing?',
        answer: 'We provide comprehensive assistance with work visa processing, including document verification, embassy filing, and interview preparation for various countries such as Canada, the USA, and Australia.',
        icon: <MdWork />,
    },
    {
        question: 'Can I book both domestic and international air tickets through your service?',
        answer: 'Yes, we offer both domestic and international flight bookings, ensuring competitive prices and personalized options based on your travel needs.',
        icon: <FaPlane />,
    },
    {
        question: 'What destinations are covered in your Domestic Tours?',
        answer: 'We offer domestic tours to popular destinations in Bangladesh, including Cox’s Bazar, Srimangal, Sundarbans, and Bandarban, with a focus on adventure, culture, and relaxation.',
        icon: <MdCardTravel />,
    },
    {
        question: 'How can I book an International Tour?',
        answer: 'Booking an international tour is easy. Simply contact us with your desired destination, and we’ll take care of the travel planning, bookings, and itineraries.',
        icon: <FaGlobe />,
    },
];

export default function FAQ() {
    return (
        <Section className={'relative'}>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold ">Frequently Asked Questions</h2>
                <p className="text-xl mt-4">
                    Find answers to some of the most common questions about our visa services.
                </p>
            </div>

            <div className="space-y-3 w-10/12 mobile-lg:w-full mx-auto">
                {faqData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }} // Starts with hidden and below view
                        whileInView={{ opacity: 1, y: 0 }} // Animates into view
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }} // Only trigger when 50% of the element is in view
                    >
                        <div
                            tabIndex={0}
                            className="collapse collapse-plus border-base-300 bg-base-200 border"
                        >
                            <div className="collapse-title text-xl font-medium flex items-center">
                                <span className="mr-2">{item.icon}</span>
                                {item.question}
                            </div>
                            <div className="collapse-content">
                                <p className='ml-8'>{item.answer}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[100px] flex justify-end items-start">
                <div
                    style={{
                        clipPath:
                            'polygon(0% 58%, 100% 67%, 100% 18%, 75% 76.5%, 75% 12.88%, 35.5% 82.5%, 35.5% 7.5%)',
                    }}
                    className="relative  inset-0  aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  translate-y-11"
                />
            </div>
        </Section>
    );
}
