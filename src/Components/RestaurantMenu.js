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
      <div className="bg-slate-50 p-4 m-2">
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
                {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}
              </li>
              </ul>
              <div className="flex justify-between bg-white h-8 py-1 shadow-md">
              {restaurant?.cards[0]?.card?.card?.info?.avgRating <4 ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-green-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              ):(
                <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-yellow-400"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          />
        </svg>
              )}
              <h1 className="font-bold text-sm px-2">
                {restaurant?.cards[0]?.card?.card?.info?.avgRating}{" "}
              </h1>
              </div>
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
                )?.qty != 0 ? (
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
