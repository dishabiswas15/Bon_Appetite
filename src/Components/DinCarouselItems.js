//import { Link } from "react-router-dom";

const DinCarouselItems = ({ carousel }) => {
  return (
    <div>
      <div className="dining-item-cover w-72 h-96 p-1 m-6 shadow-md border-white bg-white rounded-md hover:scale-105 ease-in-out duration-300 ">
        <img
          src={carousel.cover}
          className="dining-item-image inline-block p-2 cursor-pointer rounded-lg
           object-cover w-full h-64 opacity-1 transition-opacity "
          alt={carousel.name}
        />
        <h1 className="dining-item-title text-center text-xl font-medium overflow-hidden text-ellipsis mt-1">
          {carousel.name}
        </h1>
      </div>
    </div>
  );
};
export default DinCarouselItems;
