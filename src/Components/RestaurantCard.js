import { Img_CDN_URL } from "../Constants";
const RestaurantCard = ({
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
  name,
  avgRating,
  locality,
}) => {
  return (
    <div className="w-72 h-96 p-1 m-6 shadow-md border-white bg-white rounded-md hover:scale-105 ease-in-out duration-300">
      <img src={Img_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl ">{name}</h2>
      <h5 className="overflow-hidden text-ellipsis">{cuisines.join(", ")}</h5>
      <h3>{locality}</h3>
      <h5>{lastMileTravelString}</h5>
      <h5>{avgRating}Star</h5>
    </div>
  );
};

export default RestaurantCard;
