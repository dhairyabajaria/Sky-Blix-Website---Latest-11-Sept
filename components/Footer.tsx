import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../constants';

const SocialIcon: React.FC<{ children: React.ReactNode, label: string }> = ({ children, label }) => (
    <a href="#" aria-label={label} className="text-gray-400 hover:text-brand-cyan transition-all duration-300 hover:scale-110">{children}</a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-blue/30 border-t border-cyan-400/20 z-10">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Logo className="w-8 h-8 text-brand-cyan" aria-hidden="true" />
                        <span className="font-orbitron text-xl font-bold">SKY BLIX</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
                        <Link to="/innovations" className="text-gray-300 hover:text-brand-cyan transition-all duration-300 inline-block hover:scale-105">Our Innovations</Link>
                        <Link to="/about" className="text-gray-300 hover:text-brand-cyan transition-all duration-300 inline-block hover:scale-105">About</Link>
                        <Link to="/investors" className="text-gray-300 hover:text-brand-cyan transition-all duration-300 inline-block hover:scale-105">Investors</Link>
                        <Link to="/contact" className="text-gray-300 hover:text-brand-cyan transition-all duration-300 inline-block hover:scale-105">Contact</Link>
                    </div>
                    <div className="flex gap-6">
                        <SocialIcon label="Follow us on X">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.28C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.11,9.75 4.26,10.54C3.54,10.51 2.88,10.31 2.3,10V10C2.3,12.08 3.75,13.81 5.7,14.22C5.31,14.33 4.89,14.38 4.46,14.38C4.19,14.38 3.92,14.36 3.66,14.31C4.19,16.04 5.77,17.27 7.68,17.31C6.25,18.44 4.5,19.13 2.63,19.13C2.29,19.13 1.96,19.11 1.62,19.07C3.55,20.29 5.86,21 8.36,21C16,21 20.33,14.46 20.33,8.84C20.33,8.63 20.33,8.42 20.32,8.21C21.17,7.63 21.88,6.87 22.46,6Z" /></svg>
                        </SocialIcon>
                        <SocialIcon label="Connect on LinkedIn">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M8.5,18H5.5V10H8.5V18M7,8.5A1.5,1.5 0 0,1 5.5,7A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 8.5,7A1.5,1.5 0 0,1 7,8.5M18.5,18H15.5V13.25C15.5,12.05 15,11.5 14.25,11.5C13.5,11.5 13,12.1 13,13V18H10V10H13V11.25C13.5,10.5 14.5,9.75 16,9.75C17.9,9.75 18.5,11.1 18.5,12.75V18Z" /></svg>
                        </SocialIcon>
                         <SocialIcon label="Subscribe on YouTube">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.58,6.18A2.78,2.78,0,0,0,19.61,4.2a29.3,29.3,0,0,0-7.61-.42,29.3,29.3,0,0,0-7.61.42A2.78,2.78,0,0,0,2.42,6.18,29.1,29.1,0,0,0,2,12a29.1,29.1,0,0,0,.42,5.82A2.78,2.78,0,0,0,4.39,19.8a29.3,29.3,0,0,0,7.61.42,29.3,29.3,0,0,0,7.61-.42A2.78,2.78,0,0,0,21.58,17.82,29.1,29.1,0,0,0,22,12,29.1,29.1,0,0,0,21.58,6.18ZM9.75,15.5V8.5L15.75,12Z"/></svg>
                        </SocialIcon>
                        <SocialIcon label="Follow us on Instagram">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 7.82 2.02 6.9 2.09c-.92.07-1.55.24-2.07.45-.53.21-.96.5-1.4.93s-.72.87-.93 1.4c-.21.52-.38 1.15-.45 2.07C2.02 7.82 2 8.13 2 12s.02 4.18.09 5.1c.07.92.24 1.55.45 2.07.21.53.5.96.93 1.4s.87.72 1.4.93c.52.21 1.15.38 2.07.45C7.82 21.98 8.13 22 12 22s4.18-.02 5.1-.09c.92-.07 1.55-.24 2.07-.45.53-.21.96-.5 1.4-.93s.72-.87.93-1.4c.21-.52-.38-1.15-.45-2.07.07-.92.09-1.23.09-5.1s-.02-4.18-.09-5.1c-.07-.92-.24-1.55-.45-2.07-.21-.53-.5-.96-.93-1.4s-.87-.72-1.4-.93c-.52-.21-1.15-.38-2.07-.45C16.18 2.02 15.87 2 12 2zm0 1.8c3.83 0 4.11 0 5.5.07.91.04 1.4.2 1.68.32.33.13.56.29.8.54.24.24.41.47.54.8.12.28.28.77.32 1.68.07 1.39.07 1.67.07 5.5s0 4.11-.07 5.5c-.04.91-.2 1.4-.32 1.68-.13.33-.29.56-.54.8-.24.24-.47.41-.8.54-.28.12-.77.28-1.68.32-1.39.07-1.67.07-5.5.07s-4.11 0-5.5-.07c-.91-.04-1.4-.2-1.68-.32-.33-.13-.56-.29-.8-.54-.24-.24-.41-.47-.54-.8-.12-.28-.28-.77-.32-1.68C3.82 16.11 3.8 15.83 3.8 12s0-4.11.07-5.5c.04-.91.2-1.4.32-1.68.13-.33.29.56.54-.8.24-.24.47.41.8-.54.28-.12.77-.28 1.68-.32C7.89 3.82 8.17 3.8 12 3.8zm0 3.3c-2.9 0-5.22 2.32-5.22 5.22s2.32 5.22 5.22 5.22 5.22-2.32 5.22-5.22-2.32-5.22-5.22-5.22zm0 8.54c-1.84 0-3.32-1.48-3.32-3.32s1.48-3.32 3.32-3.32 3.32 1.48 3.32 3.32-1.48 3.32-3.32 3.32zm6.22-8.6c0 .59-.48 1.07-1.07 1.07s-1.07-.48-1.07-1.07.48-1.07 1.07-1.07 1.07.48 1.07 1.07z" /></svg>
                        </SocialIcon>
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-8 text-sm">
                    &copy; {new Date().getFullYear()} Sky Blix Agro Science. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;