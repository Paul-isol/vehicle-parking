import React from 'react';
import './Footer.css'; // Optional: for styling

const Footer = () => {
    return (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} ParkWise - Online Vehicle Parking. All rights reserved.</p>
            {/* Add other links like Contact, About Us, Terms, etc. if needed */}
        </footer>
    );
};

export default Footer;
