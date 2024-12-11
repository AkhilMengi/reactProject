import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { resId } = useParams(); // Get restaurant ID from URL params

  console.log("RestaurantMenu State:", restaurantMenu); // Debug state

  useEffect(() => {
    fetchMenu();
  }, [resId]); // Re-fetch data if the restaurant ID changes

  const fetchMenu = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3200/restaurantsMenu/${resId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch menu: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data); // Debug API response

      if (data.restaurants?.length > 0) {
        setRestaurantMenu(data.restaurants[0]); // Set first restaurant's data
      } else {
        setRestaurantMenu(null);
      }
    } catch (err) {
      console.error("Error fetching menu:", err);
      setError("Unable to load restaurant data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading menu...</p>; // Show a loading indicator
  }

  if (error) {
    return <p>{error}</p>; // Show an error message
  }

  if (!restaurantMenu) {
    return <p>No menu found for this restaurant.</p>; // Fallback if no data
  }

  return (
    <div className="menu">
      {/* Restaurant name and cuisine */}
      <h1>{restaurantMenu.name}</h1>
      <h3>{restaurantMenu.cuisine}</h3>

      <ul>
        {/* Render menu categories dynamically */}
        {restaurantMenu.menu &&
          Object.keys(restaurantMenu.menu).map((category) => {
            const items = restaurantMenu.menu[category];
            return (
              <li key={category}>
                <strong>{category.charAt(0).toUpperCase() + category.slice(1)}: </strong>
                {items.map((item) => `${item.name} - ₹${item.price}`).join(", ")}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
