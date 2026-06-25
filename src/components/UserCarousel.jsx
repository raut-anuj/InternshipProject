import CardStackCarousel from "./CardStackCarousel";
import UserCard from "./UserCard";
import { useUsers } from "../hook/useUsers";

const UserCarousel = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useUsers();

  if (isLoading) {
    // FIX: Loading state ko fixed height de di hai taaki jump na aaye
    return (
      <div className="h-[182px] w-full flex items-center justify-center">
        <p className="animate-pulse text-gray-500 font-medium">Loading Carousel...</p>
      </div>
    );
  }

  if (isError) {
    // FIX: Error state ko bhi same height de di
    return (
      <div className="h-[182px] w-full flex items-center justify-center">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  const items = users.map((user) => (
    <UserCard
      key={user.id}
      user={user}
    />
  ));

  return <CardStackCarousel items={items} />;
};

export default UserCarousel;