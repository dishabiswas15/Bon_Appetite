import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItems } from "../../Utils/CartSlice";
import useRestaurant from "../../Utils/useRestaurant";
import { Img_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>
{
    const params = useParams(); // useParams is used to read the dyanamic URL
    const {id} = params;

    const restaurant = useRestaurant(id);

    const dispatch = useDispatch();

    const addFoodItem = (item) =>{
        dispatch(addItems(item));
    };

    return  !restaurant ? (
    <Shimmer />
    ) : (
        <div className="flex">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant.name}</h2>
                <img src= {Img_CDN_URL + restaurant.cloudinaryImageId} />
                <h2>{restaurant.area}</h2>
                <h2>{restaurant.city}</h2>
                <h2>{restaurant.avgRating} star</h2>
                <h2>{restaurant.costForTwoMsg}</h2>
            </div>
            <div className="p-5 m-5">
                <h1>Menu: </h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item)=> (
                        <li key={item.id}> {item.name}- 
                        <button className="p-1 m-1 bg-green-100" 
                        onClick={()=>addFoodItem(item)}>
                            Add</button></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;