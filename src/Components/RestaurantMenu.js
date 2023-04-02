import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItems, updateCart, removeItems } from "../../Utils/CartSlice";
import useRestaurant from "../../Utils/useRestaurant";
import { Img_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams(); // useParams is used to read the dyanamic URL
  const { id } = params;

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  const addFoodItem = (item) => {
    const existingItems = cartItems.find(
      (i) => i.card?.info?.id == item.card?.info?.id
    );
    if (existingItems) {
      dispatch(
        updateCart({
          id: existingItems.card?.info?.id,
          qty: existingItems.qty + 1,
        })
      );
    } else {
      dispatch(addItems({ ...item, qty: 1 }));
    }
    console.log(cartItems);
  };

  const removeFoodItem = (item) => {
    const existingItems = cartItems.find(
      (i) => i.card?.info?.id == item.card?.info?.id
    );
    if (existingItems) {
      if (existingItems.qty > 0) {
        dispatch(
          updateCart({
            id: existingItems?.card?.info?.id,
            qty: existingItems.qty - 1,
          })
        );
      }
    } else {
      dispatch(removeItems({ id: existingItems?.card?.info?.id }));
    }
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
                key={item?.card?.info?.imageId}
                src={
                  item?.card?.info?.imageId?.length == 0
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9GWLE69HDcgm3CPfYQLu8t272L978R8vV1LYjR92Vw&s"
                    : Img_CDN_URL + item?.card?.info?.imageId
                }
              />
              <div className="text-sm p-2 pl-4">
                <p className="mb-2 text-base font-bold text-gray-700">
                  {item?.card?.info?.name}
                </p>
                <p className="text-xs text-gray-500 overflow-hiddenmb-1">
                  {" "}
                  Price-
                  {item?.card?.info?.price / 100}/- only
                </p>
                <p className="text-xs w-80 h-20 text-gray-500 overflow-hidden">
                  {item?.card?.info?.description}
                </p>
                {cartItems.findIndex(
                    (i) => item?.card?.info?.id == i.card?.info?.id
                  )?.qty !=0 ? (
                <div className="flex items-center border border-gray-300 w-16 justify-around">
                  
                    <>
                      <button
                        className="text-xl"
                        onClick={() => removeFoodItem(item)}
                      >
                        -
                      </button>

                      <p>
                        {
                          cartItems[
                            cartItems.findIndex(
                              (i) => item?.card?.info?.id == i.card?.info?.id
                            )
                          ]?.qty
                        }
                      </p>
                      <button
                        className="text-xl"
                        onClick={() => addFoodItem(item)}
                      >
                        +
                      </button>
                    </>
                    </div>
                  ) : (
                    <button
                      className="bg-green-100 p-2 m-2"
                      onClick={() => addFoodItem(item)}
                    >
                      Add
                    </button>
                  )}
                </div>
              
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
