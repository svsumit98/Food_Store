import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div 
          className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-100 transition-all duration-200 ease-in-out"
          onClick={handleClick}
        >
          <span className="font-semibold text-xl text-gray-800">{data.title} ({data.itemCards.length})</span>
          <span
            className={`transition-transform transform ${showItems ? 'rotate-180' : 'rotate-0'} text-gray-600`}
          >
            ⬇️
          </span>
        </div>
        
        {/* Accordion Body */}
        {showItems && (
          <div className="p-4 bg-gray-50">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
