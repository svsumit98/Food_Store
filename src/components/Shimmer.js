const Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
      {Array(18).fill("").map((_, index) => (
        <div key={index} className="shimmer-card bg-gray-200 rounded-lg p-4 shadow-md animate-pulse">
          <div className="shimmer-image bg-gray-300 rounded-lg w-full h-40 mb-4"></div>
          <div className="shimmer-line bg-gray-300 h-4 rounded w-3/4 mb-2"></div>
          <div className="shimmer-line bg-gray-300 h-4 rounded w-1/2 mb-2"></div>
          <div className="shimmer-line bg-gray-300 h-4 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
