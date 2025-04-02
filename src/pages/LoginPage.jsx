// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const { login } = useAuth();
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/"; // Redirect back or to home

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setIsSubmitting(true);
//         try {
//             // Pass credentials to the login function from AuthContext
//             const success = await login({ username, password });
//             if (success) {
//                 navigate(from, { replace: true }); // Redirect on success
//             } else {
//                 setError('Invalid username or password. Please try again.');
//             }
//         } catch (err) {
//             console.error("Login error:", err);
//             setError('An error occurred during login. Please try again later.');
//         } finally {
//              setIsSubmitting(false);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text" // Or email
//                         id="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                         disabled={isSubmitting}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         disabled={isSubmitting}
//                     />
//                 </div>
//                 <button type="submit" disabled={isSubmitting}>
//                     {isSubmitting ? 'Logging in...' : 'Login'}
//                     </button>
//             </form>
//             {/* Add link to Register page */}
//              <p>Don't have an account? <Link to="/register">Register here</Link></p>
//         </div>
//     );
// };

// export default LoginPage; // Make sure to add `import { Link } from 'react-router-dom';` if using Link

// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom'; // Import Link
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"; // Redirect back or to home

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        try {
            const success = await login({ username, password });
            if (success) {
                navigate(from, { replace: true }); // Redirect on success
            } else {
                setError('Invalid username or password. Please try again.');
            }
        } catch (err) {
            console.error("Login error:", err);
            setError('An error occurred during login. Please try again later.');
        } finally {
             setIsSubmitting(false);
        }
    };

    return (
        // Add the main container class
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* Add the error message class */}
                {error && <p className="error-message">{error}</p>}
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text" // Or email
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        disabled={isSubmitting}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={isSubmitting}
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
            </form>
            {/* Add the link container class */}
            <p className="switch-auth-link">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

export default LoginPage;
