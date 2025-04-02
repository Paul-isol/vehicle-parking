// src/pages/RegisterPage.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './RegisterPage.css';
// // import { useAuth } from '../context/AuthContext'; // Import if needed for registration API

// const RegisterPage = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();
//     // const { register } = useAuth(); // Assuming you add a register function to AuthContext

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         if (password !== confirmPassword) {
//             setError('Passwords do not match.');
//             return;
//         }
//         if (password.length < 6) { // Example basic validation
//             setError('Password must be at least 6 characters long.');
//             return;
//         }

//         setIsLoading(true);
//         try {
//             // --- Replace with actual API call ---
//             console.log('Registering:', { username, email, password });
//             // Example: const success = await register({ username, email, password });
//             // Simulate success after a delay
//             await new Promise(resolve => setTimeout(resolve, 1000));
//             const success = true; // Assume success for now
//             // --- End Replace ---

//             if (success) {
//                 console.log('Registration successful (simulated)');
//                 // Redirect to login page or dashboard after successful registration
//                 navigate('/login', { state: { message: 'Registration successful! Please log in.' } });
//             } else {
//                 setError('Registration failed. Please try again.'); // From API response
//             }
//         } catch (err) {
//             console.error("Registration error:", err);
//             setError('An error occurred during registration. Please try again later.'); // Generic error
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                         disabled={isLoading}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         disabled={isLoading}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                          value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                          minLength="6" // Add basic validation hint
//                         disabled={isLoading}
//                     />
//                 </div>
//                  <div>
//                     <label htmlFor="confirmPassword">Confirm Password:</label>
//                     <input
//                         type="password"
//                         id="confirmPassword"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                         disabled={isLoading}
//                     />
//                 </div>
//                 <button type="submit" disabled={isLoading}>
//                      {isLoading ? 'Registering...' : 'Register'}
//                 </button>
//             </form>
//              <p>Already have an account? <Link to="/login">Login here</Link></p>
//         </div>
//     );
// };

// export default RegisterPage;

// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Import if needed
import './RegisterPage.css'; // Import the CSS file

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // const { register } = useAuth(); // Assuming you add a register function

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        setIsLoading(true);
        try {
            // --- Replace with actual API call ---
            console.log('Registering:', { username, email, password });
            await new Promise(resolve => setTimeout(resolve, 1000));
            const success = true;
            // --- End Replace ---

            if (success) {
                console.log('Registration successful (simulated)');
                navigate('/login', { state: { message: 'Registration successful! Please log in.' } });
            } else {
                setError('Registration failed. Please try again.');
            }
        } catch (err) {
            console.error("Registration error:", err);
            setError('An error occurred during registration. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        // Add the main container class
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                 {/* Add the error message class */}
                {error && <p className="error-message">{error}</p>}
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
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
                        minLength="6"
                        disabled={isLoading}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
            {/* Add the link container class */}
            <p className="switch-auth-link">
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};

export default RegisterPage;


