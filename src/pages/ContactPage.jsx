import { useEffect, useRef, useState } from 'react';
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Section from '../components/Section';
import Page from '../components/Page';
import bannerBg from '../assets/contact-bg.png';

function ContactPage() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [state, handleSubmit] = useForm('mldeyrev');

    useEffect(() => {
        if (state.submitting) {
            setLoading(true);
        }

        if (state.succeeded) {
            setLoading(false);
            nameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';
        }
    }, [state.submitting, state.succeeded]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Page>
            <Section className={'relative'}>
                <div>
                    <img
                        className="h-[30vh] w-full object-cover rounded-2xl"
                        src={bannerBg}
                        alt="Service Banner"
                    />
                </div>
            </Section>
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-base-200 p-10 rounded-lg shadow-lg my-10"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                    >
                        {[
                            { icon: <FaPhone />, label: 'Phone', detail: '+880 1611 116279' },
                            {
                                icon: <FaEnvelope />,
                                label: 'Email',
                                detail: 'info@goldsky.com.bd | goldskybd@gmail.com',
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                label: 'Address',
                                detail: 'Level-3, Room No-408, Muktobangla Shopping Complex, Mirpur-1, Dhaka, Bangladesh',
                            },
                        ].map((info, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-center gap-4"
                            >
                                <div className="p-4 bg-primary text-primaryContent rounded-full">
                                    {info.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{info.label}</h3>
                                    <p className="text-sm">{info.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </Section>
            <Section className={'relative'}>
                <div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto text-center ">
                    <div className="w-full mx-auto p-5 flex items-center justify-between gap-4 mobile-lg:flex-col">
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="mt-5 w-full text-left font-bold basis-1/2"
                        >
                            <div className="mb-4">
                                <label className="block mb-2 text-base-content" htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    ref={nameRef}
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className={
                                        'block w-full p-2.5 bg-base-300 border-2 border-primaryFocus rounded-xl outline-none text-base-content font-medium'
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-base-content" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    ref={emailRef}
                                    placeholder="Your Email"
                                    required
                                    className={
                                        'block w-full p-2.5 bg-base-300 border-2 border-primaryFocus rounded-xl outline-none text-base-content font-medium'
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-base-content" htmlFor="message">
                                    Message:
                                </label>
                                <textarea
                                    ref={messageRef}
                                    rows="5"
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    className={
                                        'block w-full p-2.5 bg-base-300 border-2 border-primaryFocus rounded-xl outline-none text-base-content font-medium'
                                    }
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primaryFocus text-secondaryContent py-2 px-4 rounded-lg hover:scale-105 active:scale-95 duration-200"
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </motion.form>
                        <motion.div
                            className="basis-1/2 flex justify-end"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img className="w-11/12" src="/contact.svg" alt="Contact Us" />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full rounded-xl overflow-hidden my-10 border-2 border-primary"
                >
                    <iframe
                        title="Gold Sky Overseas"
                        width="100%"
                        height="500"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Muktobangla%20Shopping%20Complex,%20Mirpur-1,%20Dhaka-1216+(God%20Sky%20Overseas)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
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

                <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[90px] flex justify-start items-center">
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

export default ContactPage;
