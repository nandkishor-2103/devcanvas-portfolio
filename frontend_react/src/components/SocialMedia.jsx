import React from 'react';
import { BsTwitterX, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <div>
                    <BsTwitterX />
                </div>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <div>
                    <FaFacebook />
                </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <div>
                    <BsInstagram />
                </div>
            </a>
        </div>
    );
};

export default SocialMedia;
