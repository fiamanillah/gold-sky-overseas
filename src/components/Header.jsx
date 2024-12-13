import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Section from './Section';
import { IoMoonOutline } from 'react-icons/io5';
import { IoSunny } from 'react-icons/io5';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';

export default function Header() {
    const { darkMode, toggleDarkMode } = useTheme();
    const { scrollYProgress } = useScroll();
    const [navVisible, setNavVisible] = useState(false);

    const navVariants = {
        hidden: {
            scaleY: 0,
            opacity: 0,
            originY: 0,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
        visible: {
            scaleY: 1,
            opacity: 1,
            originY: 0,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
    };

    // Close the menu when clicking outside or navigating
    useEffect(() => {
        const handleClickOutside = event => {
            if (!event.target.closest('.navbar') && !event.target.closest('.menu')) {
                setNavVisible(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <Section className="bg-base-200 sticky top-0 shadow-lg bg-opacity-70 backdrop-blur-lg z-50">
            <motion.div
                className="progress-bar z-50 bg-secondary w-full h-1 fixed top-0 left-0 origin-left"
                style={{ scaleX: scrollYProgress }}
            />
            <div className="navbar items-center ">
                <div className="navbar-start">
                    <Link to={'/'} aria-label="Home">
                        <img className="h-12" src="/GoldSkyLogo.png" alt="Gold Sky Logo" />
                    </Link>
                </div>
                <div className="navbar-center flex laptop-xl:hidden">
                    <Navbar />
                </div>
                <div className="navbar-end flex gap-2">
                   
                    <button
                        className={`w-12 h-12 flex items-center justify-center no-animation rounded-full  duration-500  text-3xl ${
                            darkMode
                                ? 'rotate-0 bg-base-300 border-2 border-accent'
                                : 'rotate-90 bg-warning bg-opacity-20 border-2 border-warning text-warning'
                        }`}
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? <IoMoonOutline /> : <IoSunny />}
                    </button>
                    <button
                        className={`w-12 h-12 laptop-xl:flex items-center justify-center no-animation rounded-full bg-base-300 border-2 border-accent duration-500  text-3xl hidden`}
                        onClick={() => {
                            setNavVisible(prev => !prev);
                        }}
                    >
                        {navVisible ? (
                            <RxCross2 className="pointer-events-none" />
                        ) : (
                            <CiMenuFries className="pointer-events-none" />
                        )}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {navVisible && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={navVariants}
                        className="fixed bg-primary h-[300px] inset-0 top-[70px] rounded-b-2xl  overflow-hidden hidden laptop-xl:flex shadow-2xl"
                    >
                        <Navbar />
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
