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
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572577&lng=88.387538&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    //Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
    //setAllDining(collectionData);
    //setAllDining(collectionData);

  const isOnline = useOnline();
  if (!isOnline) {
    return <h2>Offline,please Check your Internet Connection!!!</h2>;
  }

  return (
    <>
      <div className="search-container p-5 bg-pink-100 my-2">
        <input
          type="text"
          className="search-bar p-1 m-2"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            //e.target.value = whatever we wanna write in input
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="bg-rose-600 p-1 m-2 rounded-md hover:bg-rose-700"
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
