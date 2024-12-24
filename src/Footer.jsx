import React from 'react';
import { FaEnvelope, FaTwitter, FaInstagram, FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer className="bg-span">
            <div className="mx-auto text-center p-4 sm:py-8 h-auto">
                <div className="flex justify-center space-x-6 mb-4 items-center h-full gap-4">                    <a href="mailto:narulaashutosh814@gmail.com" className="text-2xl">
                    <FaEnvelope />
                </a>
                    <a href="https://twitter.com" className="text-2xl" target="_blank">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/ashutosh_narula_" className="text-2xl" target="_blank">
                        <FaInstagram />
                    </a>
                    <a href="https://codepen.io/ashunarula" className="text-2xl" target="_blank">
                        <FaCodepen />
                    </a>
                    <a href="https://github.com/ashu-0511" className="text-2xl" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/ashutosh-narula-15a638269" className="text-2xl" target="_blank">
                        <FaLinkedin />
                    </a>
                </div>
                <p className="sm:text-sm mt-12 text-base">© Ashutosh Narula {year}</p>
            </div>
        </footer>
    );
};

export default Footer;
