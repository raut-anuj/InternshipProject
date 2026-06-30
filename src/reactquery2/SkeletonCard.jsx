import "./reactquery2.css";

const SkeletonCard = () => {
  return (
    <div className="holder-card holder-skeleton">
      <div className="holder-skeleton-number"></div>
      <div className="holder-skeleton-title"></div>
    </div>
  );
};

export default SkeletonCard;