// src/pages/FindParkingPage.jsx
import React, { useState, useEffect } from 'react';
// You might add imports for mapping libraries (Leaflet, Google Maps) or API services later

const FindParkingPage = () => {
    const [location, setLocation] = useState('');
    const [parkingSpots, setParkingSpots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Placeholder function for searching - will eventually call an API
    const handleSearch = async (e) => {
         if (e) e.preventDefault(); // Prevent form submission if called from a form event
         if (!location.trim()) {
            setError('Please enter a location or address to search.');
            setParkingSpots([]); // Clear existing results if search is empty
            return;
         }

         setIsLoading(true);
         setError('');
         setParkingSpots([]); // Clear previous results before new search

         console.log(`Searching for parking near: ${location}`);

         try {
             // --- Replace with actual API Call ---
             // Example: const spots = await api.findParking(location);
             // Simulate API call
             await new Promise(resolve => setTimeout(resolve, 1500));
             // Fake results based on search term (very basic example)
             const fakeSpots = [
                 { id: 'p1', name: 'Downtown Garage', address: '123 Main St', availability: 15, distance: '0.5 miles', price: '$3/hr' },
                 { id: 'p2', name: 'Uptown Lot B', address: '456 Oak Ave', availability: 5, distance: '1.2 miles', price: '$2/hr' },
                 { id: 'p3', name: 'Airport Parking South', address: '789 Elm Rd', availability: location.toLowerCase().includes('airport') ? 50 : 0, distance: '5 miles', price: '$15/day' },
             ].filter(spot => spot.availability > 0); // Only show available spots

             if (fakeSpots.length === 0) {
                setError(`No available parking spots found near "${location}".`);
             }
             setParkingSpots(fakeSpots);
             // --- End Replace ---

         } catch (err) {
             console.error("Error finding parking:", err);
             setError('Failed to fetch parking spots. Please try again later.');
             setParkingSpots([]); // Ensure spots are cleared on error
         } finally {
             setIsLoading(false);
         }
    };

     useEffect(() => {
        // Optional: could fetch nearby spots based on user's current location on initial load
        // if (navigator.geolocation) { ... }
     }, []);

    return (
        <div>
            <h2>Find Parking</h2>
            <form onSubmit={handleSearch}>
                 <label htmlFor="location-search">Enter Location (e.g., address, landmark):</label>
                <input
                    type="text"
                    id="location-search"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                        if (error) setError(''); // Clear error when user types
                    }}
                    placeholder="e.g., 123 Main St, City Center"
                    style={{ minWidth: '300px', marginRight: '10px' }}
                    required
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

            <div className="parking-results" style={{ marginTop: '2rem' }}>
                {isLoading && <p>Loading parking spots...</p>}

                {!isLoading && parkingSpots.length > 0 && (
                    <>
                        <h3>Available Parking Nearby:</h3>
                        <ul>
                            {parkingSpots.map(spot => (
                                <li key={spot.id} style={{ border: '1px solid #eee', padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
                                    <strong>{spot.name}</strong> ({spot.distance}) <br />
                                    Address: {spot.address} <br />
                                    Availability: {spot.availability} spots <br />
                                    Price: {spot.price}
                                    {/* Add a button/link to view details or book */}
                                    {/* <Link to={`/book/${spot.id}`}>Book Now</Link> */}
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {!isLoading && !error && parkingSpots.length === 0 && location.trim() && (
                    // Show this only if a search was attempted but yielded no results (and no error occurred)
                     // Avoid showing this on initial load before any search
                    <p>No results found for "{location}". Try searching for a nearby area.</p>
                )}
            </div>
            {/* Placeholder for a map component */}
            {/* <div id="map-placeholder" style={{ height: '400px', background: '#e0e0e0', marginTop: '2rem', display:'flex', alignItems:'center', justifyContent:'center'}}>Map Component Goes Here</div> */}
        </div>
    );
};

export default FindParkingPage;
