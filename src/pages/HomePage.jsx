// import React from 'react';

// const HomePage = () => {
//     return (
//         <div>
//             <h1>Welcome to Parkwise!</h1>
//             <p>Find and book your parking spot easily.</p>
//             {/* Add search bar or featured locations here later */}
//         </div>
//     );
// };

// export default HomePage;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import './HomePage.css'; // We'll create this CSS file next

// --- Placeholder Data (Replace with actual data from API later) ---
const featuredLocationsData = [
    {
        id: 'loc1',
        name: 'Downtown Metro Garage',
        description: 'Secure parking near the business district.',
        image: 'dt1.jpeg', // Placeholder image URL
        searchQuery: 'Downtown Metro Garage, Cityville' // Query to use when clicking
    },
    {
        id: 'loc2',
        name: 'Airport Parking Lot C',
        description: 'Affordable long-term parking by the airport.',
        image: 'airport.jpeg', // Placeholder image URL
        searchQuery: 'Airport Parking Lot C'
    },
    {
        id: 'loc3',
        name: 'Uptown Shopping Mall Parkade',
        description: 'Convenient parking for shoppers.',
        image: 'shopping.jpeg', // Placeholder image URL
        searchQuery: 'Uptown Shopping Mall'
    },
];

const testimonialsData = [
    {
        id: 't1',
        quote: 'So easy to find and book a spot near my office. Saved me so much time!',
        author: 'UWAIS.',
        rating: 5
    },
    {
        id: 't2',
        quote: 'Used ParkWise for airport parking. The process was smooth and hassle-free.',
        author: 'JUMAIL.',
        rating: 4
    },
    {
        id: 't3',
        quote: 'Love the app! Finding parking in the city used to be a nightmare.',
        author: 'ISOL.',
        rating: 5
    }
];
// --- End Placeholder Data ---


const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (searchTerm.trim()) {
            console.log(`Navigating to find parking with search: ${searchTerm}`);
            // Navigate to the Find Parking page, passing the search term via state
            navigate('/find-parking', { state: { initialSearch: searchTerm } });
        } else {
            // Optional: Add feedback if search term is empty
            alert("Please enter a location to search for.");
        }
    };

    return (
        <div className="homepage-container">
            {/* === Hero Section with Search Bar === */}
            <section className="hero-section">
                <h1>Find & Book Your Perfect Parking Spot</h1>
                <p className="subtitle">Enter your destination below to find available parking nearby.</p>
                <form onSubmit={handleSearchSubmit} className="search-form">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter address, landmark, or area (e.g., 'Main Street')"
                        className="search-input"
                        aria-label="Search for parking location"
                    />
                    <button type="submit" className="search-button">
                        Search Parking
                    </button>
                </form>
            </section>

            {/* === How It Works Section === */}
            <section className="how-it-works-section">
                <h2>How ParkWise Works</h2>
                <div className="steps-container">
                    <div className="step-item">
                        {/* Replace with actual icons later */}
                        <span className="step-icon">🔍</span>
                        <h3>1. Search</h3>
                        <p>Enter your destination to see nearby available parking spots.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-icon">📅</span>
                        <h3>2. Book</h3>
                        <p>Choose your spot, select your time, and book instantly.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-icon">🅿️</span>
                        <h3>3. Park</h3>
                        <p>Drive to the location and park your vehicle stress-free!</p>
                    </div>
                </div>
            </section>

            {/* === Featured Locations Section === */}
            <section className="featured-locations-section">
                <h2>Popular Parking Locations</h2>
                <div className="featured-grid">
                    {featuredLocationsData.map((location) => (
                        <div key={location.id} className="location-card">
                            <img src={location.image} alt={location.name} className="location-image" />
                            <div className="location-info">
                                <h3>{location.name}</h3>
                                <p>{location.description}</p>
                                {/* Link to FindParkingPage, passing the specific location query */}
                                <Link
                                    to="/find-parking"
                                    state={{ initialSearch: location.searchQuery }}
                                    className="btn-view-location"
                                >
                                    Find Parking Here
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

             {/* === Testimonials/Feedback Section === */}
             <section className="testimonials-section">
                <h2>What Our Users Say</h2>
                <div className="testimonials-container">
                    {testimonialsData.map((testimonial) => (
                         <div key={testimonial.id} className="testimonial-item">
                             <p className="quote">"{testimonial.quote}"</p>
                             {/* Optional: Add star rating visual */}
                              <div className="rating-stars">
                                 {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                             </div>
                             <p className="author">- {testimonial.author}</p>
                         </div>
                    ))}
                </div>
            </section>

            {/* === Extra Features / Benefits Section (Optional) === */}
            <section className='extra-features-section'>
                <h2>Why Choose ParkWise?</h2>
                 <ul>
                    <li>✓ Real-time availability updates</li>
                    <li>✓ Secure online booking and payment</li>
                    <li>✓ Wide network of parking locations</li>
                    <li>✓ Easy navigation to your booked spot</li>
                    <li>✓ Dedicated customer support</li>
                 </ul>
            </section>

        </div>
    );
};

export default HomePage;
