// src/pages/FindParkingPage.jsx
// import React, { useState, useEffect } from 'react';
// import './FindParkingPage.css';
// // You might add imports for mapping libraries (Leaflet, Google Maps) or API services later

// const FindParkingPage = () => {
//     const [location, setLocation] = useState('');
//     const [parkingSpots, setParkingSpots] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');

//     // Placeholder function for searching - will eventually call an API
//     const handleSearch = async (e) => {
//          if (e) e.preventDefault(); // Prevent form submission if called from a form event
//          if (!location.trim()) {
//             setError('Please enter a location or address to search.');
//             setParkingSpots([]); // Clear existing results if search is empty
//             return;
//          }

//          setIsLoading(true);
//          setError('');
//          setParkingSpots([]); // Clear previous results before new search

//          console.log(`Searching for parking near: ${location}`);

//          try {
//              // --- Replace with actual API Call ---
//              // Example: const spots = await api.findParking(location);
//              // Simulate API call
//              await new Promise(resolve => setTimeout(resolve, 1500));
//              // Fake results based on search term (very basic example)
//              const fakeSpots = [
//                  { id: 'p1', name: 'Downtown Garage', address: '123 Main St', availability: 15, distance: '0.5 miles', price: '$3/hr' },
//                  { id: 'p2', name: 'Uptown Lot B', address: '456 Oak Ave', availability: 5, distance: '1.2 miles', price: '$2/hr' },
//                  { id: 'p3', name: 'Airport Parking South', address: '789 Elm Rd', availability: location.toLowerCase().includes('airport') ? 50 : 0, distance: '5 miles', price: '$15/day' },
//              ].filter(spot => spot.availability > 0); // Only show available spots

//              if (fakeSpots.length === 0) {
//                 setError(`No available parking spots found near "${location}".`);
//              }
//              setParkingSpots(fakeSpots);
//              // --- End Replace ---

//          } catch (err) {
//              console.error("Error finding parking:", err);
//              setError('Failed to fetch parking spots. Please try again later.');
//              setParkingSpots([]); // Ensure spots are cleared on error
//          } finally {
//              setIsLoading(false);
//          }
//     };

//      useEffect(() => {
//         // Optional: could fetch nearby spots based on user's current location on initial load
//         // if (navigator.geolocation) { ... }
//      }, []);

//     return (
//         <div>
//             <h2>Find Parking</h2>
//             <form onSubmit={handleSearch}>
//                  <label htmlFor="location-search">Enter Location (e.g., address, landmark):</label>
//                 <input
//                     type="text"
//                     id="location-search"
//                     value={location}
//                     onChange={(e) => {
//                         setLocation(e.target.value);
//                         if (error) setError(''); // Clear error when user types
//                     }}
//                     placeholder="e.g., 123 Main St, City Center"
//                     style={{ minWidth: '300px', marginRight: '10px' }}
//                     required
//                 />
//                 <button type="submit" disabled={isLoading}>
//                     {isLoading ? 'Searching...' : 'Search'}
//                 </button>
//             </form>

//             {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

//             <div className="parking-results" style={{ marginTop: '2rem' }}>
//                 {isLoading && <p>Loading parking spots...</p>}

//                 {!isLoading && parkingSpots.length > 0 && (
//                     <>
//                         <h3>Available Parking Nearby:</h3>
//                         <ul>
//                             {parkingSpots.map(spot => (
//                                 <li key={spot.id} style={{ border: '1px solid #eee', padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
//                                     <strong>{spot.name}</strong> ({spot.distance}) <br />
//                                     Address: {spot.address} <br />
//                                     Availability: {spot.availability} spots <br />
//                                     Price: {spot.price}
//                                     {/* Add a button/link to view details or book */}
//                                     {/* <Link to={`/book/${spot.id}`}>Book Now</Link> */}
//                                 </li>
//                             ))}
//                         </ul>
//                     </>
//                 )}

//                 {!isLoading && !error && parkingSpots.length === 0 && location.trim() && (
//                     // Show this only if a search was attempted but yielded no results (and no error occurred)
//                      // Avoid showing this on initial load before any search
//                     <p>No results found for "{location}". Try searching for a nearby area.</p>
//                 )}
//             </div>
//             {/* Placeholder for a map component */}
//             {/* <div id="map-placeholder" style={{ height: '400px', background: '#e0e0e0', marginTop: '2rem', display:'flex', alignItems:'center', justifyContent:'center'}}>Map Component Goes Here</div> */}
//         </div>
//     );
// };

// export default FindParkingPage;


// src/pages/FindParkingPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link and useLocation
import './FindParkingPage.css'; // Import the CSS file

const FindParkingPage = () => {
    const [locationInput, setLocationInput] = useState(''); // Renamed from 'location' to avoid conflict with hook
    const [parkingSpots, setParkingSpots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchedTerm, setSearchedTerm] = useState(''); // To display "results for X"

    const reactLocation = useLocation(); // Hook to get location state

    // Function to perform the search
    const performSearch = async (searchTerm) => {
        if (!searchTerm || !searchTerm.trim()) {
            setError('Please enter a location or address to search.');
            setParkingSpots([]);
            setSearchedTerm('');
            return;
        }

        setIsLoading(true);
        setError('');
        setParkingSpots([]);
        setSearchedTerm(searchTerm); // Store the term used for search

        console.log(`Searching for parking near: ${searchTerm}`);

        try {
            // --- Replace with actual API Call ---
            await new Promise(resolve => setTimeout(resolve, 1500));
            const fakeSpots = [
                 { id: 'p1', name: 'Downtown Garage', address: '123 Main St', availability: 15, distance: '0.5 miles', price: '$3/hr' },
                 { id: 'p2', name: 'Uptown Lot B', address: '456 Oak Ave', availability: 5, distance: '1.2 miles', price: '$2/hr' },
                 { id: 'p3', name: 'Airport Parking South', address: '789 Elm Rd', availability: searchTerm.toLowerCase().includes('airport') ? 50 : 0, distance: '5 miles', price: '$15/day' },
            ].filter(spot => spot.availability > 0 && spot.name.toLowerCase().includes(searchTerm.toLowerCase().split(' ')[0])); // Basic filter example

            if (fakeSpots.length === 0) {
                setError(`No available parking spots found matching "${searchTerm}".`);
            }
            setParkingSpots(fakeSpots);
            // --- End Replace ---

        } catch (err) {
            console.error("Error finding parking:", err);
            setError('Failed to fetch parking spots. Please try again later.');
            setParkingSpots([]);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        performSearch(locationInput);
    };

    // Check for initial search term from navigation state (e.g., from HomePage links)
    useEffect(() => {
        const initialSearch = reactLocation.state?.initialSearch;
        if (initialSearch) {
            console.log("Initial search detected:", initialSearch);
            setLocationInput(initialSearch); // Set the input field
            performSearch(initialSearch); // Perform the search automatically
             // Optional: Clear the state after using it to prevent re-search on refresh
             // navigate('.', { state: {}, replace: true }); // Requires useNavigate hook
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reactLocation.state]); // Only re-run if the state object changes


    return (
        // Add the main container class
        <div className="find-parking-container">
            <h2>Find Parking</h2>
            {/* Add classes to form elements */}
            <form onSubmit={handleSearchSubmit} className="search-form">
                {/* Label can be styled via CSS selector: .find-parking-container .search-form label */}
                <label htmlFor="location-search">Enter Location (e.g., address, landmark):</label>
                <input
                    type="text"
                    id="location-search"
                    className="search-input" // Add class
                    value={locationInput}
                    onChange={(e) => {
                        setLocationInput(e.target.value);
                        if (error) setError('');
                    }}
                    placeholder="e.g., 123 Main St, City Center"
                    required
                    disabled={isLoading} // Disable input while loading
                />
                <button
                    type="submit"
                    className="search-button" // Add class
                    disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {/* Add classes for status messages */}
            {error && <p className="error-message">{error}</p>}
            {isLoading && <p className="loading-message">Loading parking spots...</p>}

            <div className="parking-results">
                {/* Conditionally render results header */}
                {!isLoading && parkingSpots.length > 0 && (
                    <h3>Available Parking Near "{searchedTerm}":</h3>
                )}

                {!isLoading && !error && parkingSpots.length === 0 && searchedTerm && (
                    <p className="no-results-message">No available spots found matching "{searchedTerm}". Try a different search.</p>
                )}

                {/* Add classes and structure to list items */}
                {!isLoading && parkingSpots.length > 0 && (
                    <ul>
                        {parkingSpots.map(spot => (
                            // Add item class
                            <li key={spot.id} className="parking-spot-item">
                                {/* Add details container */}
                                <div className="spot-details">
                                    <strong>{spot.name}</strong> {/* Name styled via selector */}
                                     <span>Address: {spot.address} ({spot.distance})</span>
                                    <span className='availability'>Availability: {spot.availability} spots</span> {/* Class for specific styling */}
                                    <span className='price'>Price: {spot.price}</span> {/* Class for specific styling */}
                                </div>
                                {/* Add actions container */}
                                <div className="spot-actions">
                                    {/* Add button class */}
                                    <Link to={`/book/${spot.id}`} className="book-button">
                                        Book Now
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Optional Map Placeholder */}
            {/* <div id="map-placeholder">Map Component Goes Here</div> */}
        </div>
    );
};

export default FindParkingPage;
