import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../src/Constants";

const useRestaurant = (id) => {
    const[restaurant, setRestaurant] = useState(null);

    // Get data from API
    useEffect(() => {
        getRestaaurantInfo();},
        []);

    async function getRestaaurantInfo() {
        const data = await fetch
        (FETCH_MENU_URL+ id);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }
    //restaurant Restaurant data
    return restaurant;
}
export default useRestaurant;