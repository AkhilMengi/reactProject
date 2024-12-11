import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import ShimmerCard from './Shimmer';
import { Link } from "react-router-dom";

const Body = () => {
    const [ListOfResturant, setListOfResturant] = useState([]); // Original list
    const [filteredResturants, setFilteredResturants] = useState([]); // Filtered list
    const [searchText, setSearchText] = useState(""); // Search text
    console.log(filteredResturants); // Log filtered restaurants to debug

    // Fetch data from API
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("http://localhost:3200/restaurants");
        const json = await data.json();
        console.log('API Response:', json); // Log the API response
        setListOfResturant(json.restaurants);
        setFilteredResturants(json.restaurants); // Initialize filtered list with all restaurants
    };

    if (ListOfResturant.length === 0) {
        return <ShimmerCard />; // Show shimmer loading if data is not fetched yet
    }

    return (
        <div className="body">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search restaurants..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} // Update searchText on input change
                />
                <button
                    onClick={() => {
                        // Filter the restaurants by search text
                        const filteredBySearch = searchText.trim()
                            ? ListOfResturant.filter((res) =>
                                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                              )
                            : ListOfResturant;
                        setFilteredResturants(filteredBySearch);
                    }}
                >
                    Search
                </button>
                <div className="filter">
                    <button
                        className="filter-btn"
                        onClick={() => {
                            // Filter top-rated restaurants
                            const filteredTopRated = ListOfResturant.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setFilteredResturants(filteredTopRated);
                        }}
                    >
                        Top rated Restaurants
                    </button>
                </div>
            </div>

            <div className="restro-container">
                {filteredResturants.length > 0 ? (
                    filteredResturants.map((resturant) => (
                        <Link key={resturant.info.id} to={`/resturants/${resturant.info.id}`}>
  <ResturantCard resData={resturant} />
</Link>

                    ))
                ) : (
                    <p>No restaurants found</p> // Show message if no restaurants match filter
                )}
            </div>
        </div>
    );
};

export default Body;
