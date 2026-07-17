import React, { useEffect, useState } from 'react';
import { HiMenuAlt4, HiX, HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';
import { images } from '../../constants';
import resumePdf from "../../assets/nandkishor_resume_01.pdf";

const sections = ['home', 'about', 'work', 'skills', 'testimonials', 'contact'];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            sections.forEach(section => {
                const element = document.getElementById(section);

                if (
                    element &&
                    scrollPosition >= element.offsetTop &&
                    scrollPosition < element.offsetTop + element.offsetHeight
                ) {
                    setActive(section);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt='logo' />
            </div>

            <ul className='app__navbar-links'>
                {sections.map(item => (
                    <li className={active === item ? 'active-link' : ''} key={item}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className='app__navbar-right'>
                <a href={resumePdf} download='Nandkishor_Resume.pdf' className='resume-btn'>
                    Resume <HiDownload />
                </a>

                <div className='app__navbar-menu'>
                    <HiMenuAlt4 onClick={() => setToggle(true)} />

                    {toggle && (
                        <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                            <HiX onClick={() => setToggle(false)} />

                            <ul>
                                {sections.map(item => (
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
