
import { useState,useEffect } from "react";

const useResturantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);


    console.log("RestaurantMenu State:", restaurantMenu); // Debug state


    useEffect(() => {
        fetchMenu();
    }, []); // Re-fetch data if the restaurant ID changes

    const fetchMenu = async () => {
       
        try {
            const response = await fetch(`http://localhost:3200/menus/${resId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch menu: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Response:", data); // Debug API response

            if (data && data.menu) {
                setRestaurantMenu(data.menu); // Set first restaurant's data
            } else {
                setRestaurantMenu(null);
            }
        } catch (err) {
            console.error("Error fetching menu:", err);
        
        } 
    };
    return restaurantMenu

}

export default useResturantMenu

