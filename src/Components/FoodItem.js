import { Img_CDN_URL } from "../Constants";
const FoodItem = (
    {cloudinaryImageId, costForTwoMsg, name, description}) =>{
    
    return(
        <div className="w-56 p-2 m-2 bg-pink-100 
        transition transform hover:-translate-y-1 ">
            <img src={Img_CDN_URL+cloudinaryImageId}/>
        <h2 className="font-bold text-xl">{name}</h2>
        <h5>{description}</h5>
        <h5>{costForTwoMsg}</h5>
        </div>
        
    );
};

export default FoodItem;