import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Could store user object or token
    const [isLoading, setIsLoading] = useState(true); // To handle initial auth check

    // Simulate checking authentication status on initial load (e.g., from localStorage)
    useEffect(() => {
        const checkAuthStatus = async () => {
            console.log("Auth Check: Starting..."); // <-- Add log
            setIsLoading(true);
            try {
                const storedToken = localStorage.getItem('authToken');
                if (storedToken) {
                    console.log("Auth Check: Token found."); // <-- Add log
                    setUser({ token: storedToken, name: 'Demo User' }); // Replace with actual user data fetch later
                } else {
                     console.log("Auth Check: No token found."); // <-- Add log
                    setUser(null);
                }
             } catch (error) {
                  console.error("Auth Check: Error occurred", error); // <-- Add log for errors
             } finally {
                  console.log("Auth Check: Setting isLoading to false."); // <-- Add log
                 setIsLoading(false); // *** Make sure this line is ALWAYS reached ***
             }
        };
        checkAuthStatus();
    }, []); // Ensure the dependency array is empty [] so it only runs once on mount
    

    const login = async (credentials) => {
        // --- Replace with actual API call ---
        console.log("Attempting login with:", credentials);
        // Simulate successful login
        const fakeToken = `fake-token-${Date.now()}`;
        localStorage.setItem('authToken', fakeToken);
        setUser({ token: fakeToken, name: credentials.username || 'Demo User' }); // Adjust based on API response
        console.log("Login successful (simulated).");
        return true; // Indicate success
        // --- End Replace ---

        // Example error handling (if API call fails)
        // console.error("Login failed (simulated).");
        // return false; // Indicate failure
    };

    const logout = () => {
        // --- Replace with actual logic if needed (e.g., API call to invalidate token) ---
        console.log("Logging out.");
        localStorage.removeItem('authToken');
        setUser(null);
        // --- End Replace ---
    };

    const value = {
        user,
        isLoggedIn: !!user, // Boolean check if user object exists
        isLoading,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => {
    return useContext(AuthContext);
};
