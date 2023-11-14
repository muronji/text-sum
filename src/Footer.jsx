import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-blue-500 py-3 px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Muronji.com. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
