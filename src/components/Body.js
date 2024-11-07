import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-600">
        Looks like you're offline! Please check your internet connection.
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="filter flex justify-between items-center mb-6">
        <div className="search flex items-center space-x-2">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-200"
          onClick={() => {
            const topRated = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
            setFilteredRestaurant(topRated);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestuarantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
