const SkeletonCard = () => {
  return (
    <div className="rounded-xl border p-4 shadow-md animate-pulse">
      <div className="h-5 w-40 bg-gray-300 rounded mb-3"></div>

      <div className="h-4 w-60 bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonCard;