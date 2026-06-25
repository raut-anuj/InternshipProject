import { useUsers } from "../hook/useUsers";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

const Skeleton = () => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useUsers();

  if (isLoading) {
    return (
      <div className="grid gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="grid gap-4">
      {data.map((user) => (
        <Card
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
};

export default Skeleton;