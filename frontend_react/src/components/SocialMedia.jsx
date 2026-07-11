import React from 'react';
// import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import LinkedinIcon from '../assets/linkedin_3669739.png';
import GithubIcon from '../assets/github_1051326.png';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a
                href='https://www.linkedin.com/in/nandkishormandal'
                target='_blank'
                rel='noreferrer'
                aria-label='Open LinkedIn profile'>
                <div>
                    <img src={LinkedinIcon} alt='' />
                </div>
            </a>

            <a
                href='https://github.com/nandkishor-2103'
                target='_blank'
                rel='noreferrer'
                aria-label='Open GitHub profile'>
                <div>
                    <img src={GithubIcon} alt='' />
                </div>
            </a>
        </div>
    );
};

export default SocialMedia;
