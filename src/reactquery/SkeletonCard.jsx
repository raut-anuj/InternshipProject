const SkeletonCard = () => {
  return (
    <div className="w-[260px] rounded-xl border shadow-md bg-white px-8 py-8 animate-pulse">
      <div className="h-6 w-40 bg-gray-300 rounded mb-6"></div>

      <div className="h-14 w-32 bg-gray-200 rounded"></div>
    </div>
  );
};

export default SkeletonCard;