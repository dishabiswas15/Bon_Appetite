import { useEffect, useState } from "react";
//import { restaurantList } from "../Constants";
//import RestaurantCard from "./RestaurantCard";
//import Shimmer from "./Shimmer";
//import { Link } from "react-router-dom";
import { filterData, filterDining} from "../../Utils/Helper";
import useOnline from "../../Utils/useOnline";
import TabOption from "./TabOption";
import Delivery from "./Delivery";
import DiningOut from "./DiningOut";
import NightLife from "./NightLife";
import { collectionData } from "./DiningCollections";


const getCorrectScreen = (tab, restaurants, dining) => {
  // console.log(dining);
  switch (tab) {
    case "Delivery" :
      return <Delivery restaurants={restaurants} />;
    case "Dining Out":
      return <DiningOut dining={dining}/>;  
    case "Night Life":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

const Body = () => {
  // const SearchTxt = "KFC"
  // searchText is a local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState(""); // useState is used to create state variables
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [allDining, setAllDining] = useState(collectionData);
  const [filteredDining, setFilteredDining] = useState(collectionData);
  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    //Optional Chaining
    setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      //json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
    //setAllDining(collectionData);
    //setAllDining(collectionData);

  const isOnline = useOnline();
  if (!isOnline) {
    return <h2>Offline,please Check your Internet Connection!!!</h2>;
  }

  return (
    <>
      <div className="search-container p-5 my-2">
        <input
          type="text"
          className="search-bar p-1 m-2 bg-gray-100 rounded-md"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            //e.target.value = whatever we wanna write in input
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="bg-yellow-400 p-1 m-2 rounded-md hover:bg-yellow-600"
          onClick={() => {
            //need to filter the data
            // console.log(activeTab);
            if(activeTab=="Delivery"){
            let data = filterData(searchInput, allRestaurants);
            
            //update the state - restaurants

            setFilteredRestaurants(data);
            }
            else if(activeTab== "Dining Out"){
              // console.log("allDining");
              let data = filterDining(searchInput, allDining);
            
              //update the state - restaurants
              // console.log(data);
              setFilteredDining(data);
            }
            
          }}
        >
          Search
        </button>
      </div>
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />

      {getCorrectScreen(activeTab, filteredRestaurants, filteredDining)} 
    </>
  );
};

export default Body;
