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
    <div className="pb-12">
      <div className="w-72 h-96 px-4 m-6 shadow-md border-white bg-white rounded-md hover:scale-105 ease-in-out duration-300">
        <img className="rounded-md" src={Img_CDN_URL + cloudinaryImageId} />
        <div className="flex justify-between">
          <h2 className="font-bold text-xl ">{name}</h2>
          <div className="flex pt-2 bg-white w-12 h-9 drop-shadow-md">
            {avgRating < 4 ? (
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
            ) : (
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
            <h5 className="">{avgRating}</h5>
          </div>
        </div>
        <h5 className="overflow-hidden text-ellipsis">{cuisines.join(", ")}</h5>
        <h3>{locality}</h3>

        <h5>{lastMileTravelString}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
