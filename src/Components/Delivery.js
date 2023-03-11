import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import DeliveryCollections from "./DeliveryCollectons";
const Delivery = ({ restaurants }) => {
  return (
    <>
      <DeliveryCollections />
      <div className="max-w-5xl mx-auto my-0 collection-title text-2xl mb-8 font-semibold">
        Delivery Restaurants
      </div>
      <div className="flex flex-wrap justify-center">
        {restaurants?.length == 0 ? (
          <h1>No Restaurant to filter</h1>
        ) : (
          restaurants.map((restraunt) => {
            return (
              <Link to={"restaurant/" + restraunt.data.id}>
                {" "}
                <RestaurantCard key={restraunt.data.id} {...restraunt.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Delivery;
