import React, { useState } from 'react';

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

    const handleChangeInput = e => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        if (!username || !email || !message) {
            alert('Please fill all fields');
            return;
        }

        setLoading(true);

        const web3FormData = new FormData();
        web3FormData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
        web3FormData.append('name', username);
        web3FormData.append('email', email);
        web3FormData.append('message', message);
        web3FormData.append('subject', `New Portfolio Message from ${username}`);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: web3FormData,
            });

            const result = await response.json();

            if (result.success) {
                setIsFormSubmitted(true);
                setFormData({
                    username: '',
                    email: '',
                    message: '',
                });
            } else {
                alert('Failed to send message');
            }
        } catch (error) {
            console.log(error);
            alert('Something went wrong');
        }

        setLoading(false);
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
                <a href='mailto:mandalnandkishorbk@gmail.com?subject=Portfolio Inquiry' className='app__footer-card'>
                    <img src={images.email} alt='email' />
                    <span className='p-text'>mandalnandkishorbk@gmail.com</span>
                </a>

                <a href='tel:+917400250689' className='app__footer-card'>
                    <img src={images.mobile} alt='mobile' />
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
                        />
                    </div>

                    <div>
                        <textarea
                            className='p-text'
                            name='message'
                            placeholder='Your Message'
                            value={message}
                            onChange={handleChangeInput}
                        />
                    </div>

                    <button type='button' onClick={handleSubmit}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            ) : (
                <div className='success-message'>
                    <h3 className='head-text'>Message Sent Successfully 🚀</h3>
                    <p className='p-text'>Thanks for reaching out. I’ll get back to you soon.</p>
                </div>
            )}
        </>
    );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
