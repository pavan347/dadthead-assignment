import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Navigation links object
export const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
];

export const socialIcons = [
    { platform: 'X', url: 'https://www.twitter.com', icon: FaTwitter, color: '#1da1f2' },
    { platform: 'Facebook', url: 'https://www.facebook.com', icon: FaFacebook, color: '#3b5998' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com', icon: FaLinkedin, color: '#0077b5' },
    { platform: 'Instagram', url: 'https://www.instagram.com', icon: FaInstagram, color: '#e1306c' },
    
];
