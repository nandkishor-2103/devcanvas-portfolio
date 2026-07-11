import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = event => {
        const { name, value } = event.target;

        setFormData(previousData => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleEmailClick = event => {
        event.preventDefault();

        window.location.href = 'mailto:mandalnandkishorbk@gmail.com?subject=Portfolio Inquiry';
    };

    const handleSubmit = async () => {
        const trimmedUsername = username.trim();
        const trimmedEmail = email.trim();
        const trimmedMessage = message.trim();

        if (!trimmedUsername || !trimmedEmail || !trimmedMessage) {
            toast.error('Please fill in all the fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(trimmedEmail)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            toast.error('Contact form is currently unavailable.');
            console.error('VITE_WEB3FORMS_ACCESS_KEY is missing.');
            return;
        }

        setLoading(true);

        const web3FormData = new FormData();

        web3FormData.append('access_key', accessKey);
        web3FormData.append('name', trimmedUsername);
        web3FormData.append('email', trimmedEmail);
        web3FormData.append('message', trimmedMessage);
        web3FormData.append('subject', `New Portfolio Message from ${trimmedUsername}`);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: web3FormData,
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Message submission failed.');
            }

            toast.success('Message sent successfully!');

            setIsFormSubmitted(true);

            setFormData({
                username: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Contact form submission error:', error);

            toast.error('Unable to send your message. Please try again shortly.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='app__footer-heading'>
                <h2 className='head-text'>
                    Let’s <span>Connect</span>
                </h2>

                <p className='p-text contact-subtext'>
                    Looking for a dedicated developer? Let’s discuss how I can contribute to your team.
                </p>
            </div>

            <div className='app__footer-cards'>
                <a href='mailto:mandalnandkishorbk@gmail.com' onClick={handleEmailClick} className='app__footer-card'>
                    <img src={images.email} alt='' />

                    <span className='p-text'>mandalnandkishorbk@gmail.com</span>
                </a>

                <a href='tel:+917400250689' className='app__footer-card'>
                    <img src={images.mobile} alt='' />

                    <span className='p-text'>+91 7400250689</span>
                </a>
            </div>

            {!isFormSubmitted ? (
                <div className='app__footer-form app__flex'>
                    <div className='app__flex'>
                        <input
                            className='p-text'
                            type='text'
                            name='username'
                            placeholder='Your Name'
                            value={username}
                            onChange={handleChangeInput}
                            autoComplete='name'
                            disabled={loading}
                        />
                    </div>

                    <div className='app__flex'>
                        <input
                            className='p-text'
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            value={email}
                            onChange={handleChangeInput}
                            autoComplete='email'
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <textarea
                            className='p-text'
                            name='message'
                            placeholder='Your Message'
                            value={message}
                            onChange={handleChangeInput}
                            disabled={loading}
                        />
                    </div>

                    <button type='button' onClick={handleSubmit} disabled={loading} aria-busy={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            ) : (
                <div className='success-message' role='status'>
                    <h3 className='head-text'>Message Sent Successfully 🚀</h3>

                    <p className='p-text'>Thanks for reaching out. I’ll get back to you soon.</p>
                </div>
            )}
        </>
    );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
