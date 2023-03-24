import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItems } from "../../Utils/CartSlice";
import useRestaurant from "../../Utils/useRestaurant";
import { Img_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams(); // useParams is used to read the dyanamic URL
  const { id } = params;

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItems(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="grid justify-center">
      <div className="bg-slate-50 p-2 m-2">
        {/* <h1>Restaurant id: {id}</h1> */}
        <div className="text-2xl font-bold">
          {restaurant?.cards[0]?.card?.card?.info?.name}
        </div>
        <div className="pb-4">
          <div className="flex flex-row justify-between">
            <ul className="flex flex-col w-100">
              <li className="font-light text-sm">
                {restaurant?.cards[0]?.card?.card?.info?.areaName}
              </li>
              <li className="font-light text-sm">
                {restaurant?.cards[0]?.card?.card?.info?.city}
              </li>
              <li className="font-bold text-sm">
                {restaurant?.cards[0]?.card?.card?.info?.avgRating} star
              </li>
              <li className="font-bold text-sm">
                {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5 m-5">
        <h1 className="mb-2">Menu: </h1>
        
          {Object.values(
            restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              ?.card?.card?.itemCards
          ).map((item) => (
            <>
              <div className="max-w-sm w-full m-4 lg:flex divide-y-2 lg:max-w-full">
                <img
                  className="h-36 lg:w-48 overflow-hidden rounded-md"
                  key={item.card.info.imageId}
                  src={
                    item.card.info.imageId.length == 0
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9GWLE69HDcgm3CPfYQLu8t272L978R8vV1LYjR92Vw&s"
                      : Img_CDN_URL + item.card.info.imageId
                  }
                />
                <div className="text-sm p-2 pl-4">
                  <p className="mb-2 text-base font-bold text-gray-700">{item.card.info.name}</p>
                  <p className="text-xs text-gray-500 overflow-hiddenmb-1">{item.card.info.price / 100}</p>
                  <p className="text-xs w-80 h-20 text-gray-500 overflow-hidden">{item.card.info.description}</p>
                  <button
                    className="p-1 m-1 bg-green-100"
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </>
          ))}
        
      </div>
    </div>
  );
};

export default RestaurantMenu;
