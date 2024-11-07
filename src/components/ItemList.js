import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.card.info.id} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all">

          {/* Left Section */}
          <div className="w-7/12">
            <div className="mb-2">
              <h4 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h4>
              <span className="text-gray-600"> ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-sm text-gray-500">{item.card.info.description}</p>
          </div>

          {/* Right Section */}
          <div className="w-5/12 relative">
            <img 
              src={CDN_URL + item.card.info.imageId} 
              alt={item.card.info.name} 
              className="w-full h-32 object-cover rounded-lg shadow-md mb-2"
            />
            <button 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-md transition-all"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
