import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import './Header.css'; // Optional: for styling

const Header = () => {
    const { isLoggedIn, user, logout } = useAuth(); // Get auth state and functions

    return (
        <header className="app-header">
            <Link to="/" className="logo">ParkWise</Link> {/* Example Logo/Brand */}
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to="/find-parking" className={({ isActive }) => isActive ? "active" : ""}>Find Parking</NavLink></li>
                    {isLoggedIn ? (
                        <>
                            <li><NavLink to="/my-bookings" className={({ isActive }) => isActive ? "active" : ""}>My Bookings</NavLink></li>
                            <li><NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile ({user?.name})</NavLink></li>
                            {/* Add Admin link if user has admin role (check user object) */}
                            {/* {user?.isAdmin && <li><NavLink to="/admin">Admin</NavLink></li>} */}
                            <li><button onClick={logout} className="logout-button">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></li>
                            <li><NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
