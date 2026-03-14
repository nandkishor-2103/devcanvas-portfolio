import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
                <div>
                    <FaLinkedinIn />
                </div>
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
                <div>
                    <FaGithub />
                </div>
            </a>
        </div>
    );
};

export default SocialMedia;
