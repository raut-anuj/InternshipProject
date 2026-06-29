const SkeletonCard = () => {
  return (
    <div className="border rounded-xl p-4 shadow-md animate-pulse bg-white">
      <div className="h-6 w-1/2 bg-gray-300 rounded mb-4"></div>
      
      <div className="h-10 w-full bg-gray-200 rounded mb-2"></div>
      
      <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonCard;