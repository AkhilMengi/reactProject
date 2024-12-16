
import IMAGE_URL from "../utility/content";
const ResturantCard = (props) => {
    const { resData } = props;
    const { name } = resData;

    return (
        <div className="restro-card">
            <img 
                src={IMAGE_URL}
                alt="Restaurant logo" 
            />
            <h3>{name}</h3>
            {/* <p>Cuisines: {cuisines.join(", ")}</p>
            <p>Rating: ⭐ {avgRating}</p>
            <p>Cost for Two: {costForTwo}</p>
            <p>Delivery Time: {sla.deliveryTime} mins</p> */}
        </div>
    );
};

 export const withPromoteLabel = (ResturantCard)=>{
    return(props)=>{
        return(
            <div>
                <label>Label</label> 
            <ResturantCard  {...props}/>
            </div>  
        )
    }
}

export default ResturantCard