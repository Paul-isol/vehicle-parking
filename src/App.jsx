import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import AuthProvider

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'; // Optional

// Page Components (Import all pages you created)
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FindParkingPage from './pages/FindParkingPage';
// import BookingPage from './pages/BookingPage'; // Example for booking a specific spot

// import MyBookingsPage from './pages/MyBookingsPage';
// import ProfilePage from './pages/ProfilePage';
// import NotFoundPage from './pages/NotFoundPage';
// import AdminDashboard from './pages/AdminDashboard'; // Optional

// Global Styles
import './App.css';


// Wrapper component to handle loading state from AuthContext
function AppContent() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        Loading Application...
      </div>
      ); // Or a proper spinner component
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/find-parking" element={<FindParkingPage />} />
          {/* <Route path="/parking-details/:spotId" element={<ParkingDetailsPage />} /> Potentially */}

          {/* Protected Routes (Require Login) */}
          <Route element={<ProtectedRoute />}> {/* Wrap protected routes */}
            {/* Use BookingPage if it's for confirming a booking *after* finding a spot */}
            {/* <Route path="/book/:spotId" element={<BookingPage />} /> */}
            {/* <Route path="/my-bookings" element={<MyBookingsPage />} /> */}
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
            {/* Optional Admin Route */}
            {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          </Route>

          {/* Catch-all Not Found Route */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


// Main App component that includes the AuthProvider and Router
function App() {
  return (
    <AuthProvider> {/* Wrap the entire app in AuthProvider */}
      <Router> {/* BrowserRouter */}
         <AppContent /> {/* Render the main content that depends on AuthContext */}
      </Router>
    </AuthProvider>
  );
}

export default App;
