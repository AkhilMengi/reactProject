
import useResturantMenu from "../utility/useResturantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  
  const { resId } = useParams(); // Get restaurant ID from URL params
  const restaurantMenu = useResturantMenu(resId)

  if (!restaurantMenu) {
    return <p>No menu found for this restaurant.</p>; // Fallback if no data
  }
  const { Starters, MainCourse, Desserts } = restaurantMenu;

  const menuCategories = restaurantMenu
  return (
    <div className="menu">
    {Object.keys(menuCategories).map((category, index) => (
      <div key={index}>
        <h2>{category}</h2>
        {menuCategories[category].map((item, idx) => (
          <h3 key={idx}>{item}</h3>
        ))}
      </div>
    ))}
  </div>
  );
};

export default RestaurantMenu;
