import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const deliveryTime = resData?.info.sla?.deliveryTime;

  return (
    <div className="m-4 p-2 w-[240px] rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        className="rounded-lg w-full h-40 object-cover mb-4"
        alt="Restaurant Logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <h4 className="text-gray-600 text-sm mb-3">{cuisines.join(", ")}</h4>
      
      <div className="flex items-center justify-between mt-4">
        <span className="bg-green-500 text-white text-sm font-medium py-1 px-2 rounded-lg">
          ⭐ {avgRating}
        </span>
        <span className="text-gray-500 text-sm">{deliveryTime} MINS</span>
      </div>
    </div>
  );
};

export default RestuarantCard;
