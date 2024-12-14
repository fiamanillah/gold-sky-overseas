import { motion } from 'framer-motion';
import { FaGlobe, FaUsers, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Page from '../components/Page';
import Section from '../components/Section';
import bannerBg from '../assets/about-bg.png';

export default function AboutPage() {
    // Framer Motion Variants
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    return (
        <Page>
            {/* Banner Section */}
            <Section className="relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        className="h-[30vh] w-full object-cover rounded-2xl shadow-lg"
                        src={bannerBg}
                        alt="Service Banner"
                    />
                </motion.div>
            </Section>

            {/* Content Sections */}
            <Section className={'relative my-10'}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {/* About Us */}
                    <motion.div variants={fadeIn} className="bg-base-200 rounded-lg shadow-lg p-6">
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <FaGlobe className="text-blue-500" /> About Us
                        </h1>
                        <p className="leading-relaxed mt-4">
                            At <strong>Gold Sky Overseas</strong>, we believe that dreams have no
                            boundaries, and our mission is to help you cross them with confidence.
                            Specializing in visa consultancy and international career guidance, we
                            provide a professional and personalized approach to assist individuals
                            in Bangladesh in achieving their aspirations abroad. Whether you’re
                            looking to build a career, pursue education, explore the world, or renew
                            a visa, we are here to make your journey smooth and stress-free.
                            <br />
                            With our strong connections with international embassies, trusted
                            partners, and industry experts, we provide reliable and efficient
                            services to guide you every step of the way. Our dedicated team of
                            experts is always here to assist you with advice, resources, and
                            support.
                        </p>
                    </motion.div>

                    {/* Our Vision */}
                    <motion.div variants={fadeIn} className="bg-base-200 rounded-lg shadow-lg p-6">
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <FaStar className="text-yellow-500" /> Our Vision
                        </h1>
                        <p className="leading-relaxed mt-4">
                            At Gold Sky Overseas, our vision is to create opportunities for
                            individuals to explore the world and unlock their potential on a global
                            stage. We aim to empower our clients by providing the resources and
                            support they need to achieve their dreams and make meaningful
                            contributions to society. Our commitment to excellence, innovation, and
                            customer satisfaction will continue to drive us forward as we work
                            towards becoming a global leader in visa consultancy and international
                            career development.
                            <br />
                            We strive to continuously improve our services and build long-term
                            relationships with our clients, helping them successfully navigate their
                            way to a brighter future.
                        </p>
                    </motion.div>

                    {/* Our Mission */}
                    <motion.div variants={fadeIn} className="bg-base-200 rounded-lg shadow-lg p-6">
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <FaUsers className="text-green-500" /> Our Mission
                        </h1>
                        <p className="leading-relaxed mt-4">
                            Our mission is to simplify the complexities of visa processing and
                            career planning by delivering expert guidance and personalized support.
                            We are committed to maintaining the highest standards of integrity and
                            efficiency in everything we do. Through our services, we aim to build a
                            foundation of trust and confidence for our clients, ensuring that they
                            feel supported every step of the way.
                            <br />
                            We continuously strive to maintain up-to-date knowledge of global visa
                            regulations, and we offer a wide array of services to assist with
                            everything from visa processing to job placement and career guidance.
                            Our goal is to make your transition to a new country as seamless as
                            possible.
                        </p>
                    </motion.div>

                    {/* Why Choose Us */}
                    <motion.div variants={fadeIn} className="bg-base-200 rounded-lg shadow-lg p-6">
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <FaStar className="text-purple-500" /> Why Choose Us?
                        </h1>
                        <p className="leading-relaxed mt-4">
                            <strong>Expert Guidance:</strong> Benefit from years of experience
                            navigating international visa requirements, ensuring every detail is
                            meticulously managed. <br />
                            <strong>Client-Centered Approach:</strong> We take the time to
                            understand your unique goals, crafting solutions tailored to your
                            aspirations. <br />
                            <strong>Commitment to Excellence:</strong> From initial consultation to
                            the final step of the process, we prioritize quality, transparency, and
                            reliability. <br />
                            <strong>Holistic Support:</strong> Beyond visa services, we provide
                            advice, insights, and resources to help you thrive in your new
                            destination. <br />
                            <strong>Dedicated Team:</strong> Our team of dedicated professionals
                            works around the clock to provide continuous support, ensuring your
                            experience with us is hassle-free and rewarding.
                        </p>
                    </motion.div>

                    {/* Our Team */}
                    <motion.div variants={fadeIn} className="bg-base-200 rounded-lg shadow-lg p-6">
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <FaUsers className="text-red-500" /> Our Team
                        </h1>
                        <p className="leading-relaxed mt-4">
                            Behind every successful journey is a dedicated team of professionals who
                            work tirelessly to make your process hassle-free. At Gold Sky Overseas,
                            we believe in a collaborative approach where every team member
                            contributes to delivering exceptional results. From consultation to
                            completion, our team is with you every step of the way, ensuring a
                            seamless and stress-free experience.
                            <br />
                            Our team comprises experienced consultants, knowledgeable agents, and
                            friendly support staff, all working together to ensure your success. We
                            believe in fostering a culture of continuous learning and improvement to
                            meet the evolving needs of our clients.
                        </p>
                    </motion.div>

                    {/* Visit Us */}
                    <motion.div variants={fadeIn} className="bg-base-200 rounded-lg shadow-lg p-6">
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <FaMapMarkerAlt className="text-orange-500" /> Visit Us
                        </h1>
                        <p className="leading-relaxed mt-4">
                            Located at the heart of Mirpur, Dhaka, we invite you to our office to
                            explore how we can support your aspirations. At Gold Sky Overseas, your
                            success is our purpose. <br />
                            <strong>Address:</strong> Level 3, Room No: 408, Muktobangla Shopping
                            Complex, Mirpur-1, Dhaka-1216 <br />
                            Feel free to drop by and speak with one of our experts who can guide you
                            through the process of visa applications, career planning, and travel
                            arrangements. Our team is always happy to assist you in person and
                            answer any questions you may have.
                        </p>
                    </motion.div>
                </motion.div>

  
                <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[90px] flex justify-end items-start">
                    <div
                        style={{
                            clipPath:
                                'polygon(0% 58%, 100% 67%, 100% 18%, 75% 76.5%, 75% 12.88%, 35.5% 82.5%, 35.5% 7.5%)',
                        }}
                        className="relative  inset-0  aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  translate-y-11"
                    />
                </div>

                <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[90px] flex justify-start items-end">
                    <div
                        style={{
                            clipPath:
                                'polygon(0% 58%, 100% 67%, 100% 18%, 75% 76.5%, 75% 12.88%, 35.5% 82.5%, 35.5% 7.5%)',
                        }}
                        className="relative  inset-0  aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  translate-y-11"
                    />
                </div>
            </Section>
        </Page>
    );
}
