import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Wraps around routes that require authentication
const ProtectedRoute = ({ children }) => {
    const { isLoggedIn, isLoading } = useAuth();

    if (isLoading) {
        // Show a loading indicator while checking auth status
        return <div>Loading authentication status...</div>;
    }

    if (!isLoggedIn) {
        // Redirect to login page if not logged in
        // Pass the current location to redirect back after login (optional)
        return <Navigate to="/login" replace />;
    }

    // If logged in, render the child component (or Outlet for nested routes)
    return children ? children : <Outlet />;
};

export default ProtectedRoute;
