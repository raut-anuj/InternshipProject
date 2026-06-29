import { useUsers } from "../hook/useUsers";
import SkeletonCard from "./SkeletonCard";
import Card from "./Card";

const Skeleton = () => {
  const { data, isLoading, isError } = useUsers();
  
  // API ka data
  const users = data?.data || [];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center p-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
    );
  }

  if (isError) return <p>Error loading data!</p>;

  const getVal = (prop) => users.find(item => item.property === prop);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center p-2">

      {/* 1. Active User Count */}
      <Card 
        title="Active User Count" 
        obj={getVal("active_user_count")}  
      />

      {/* 2. Ministry Count */}
      <Card 
        title="Ministry Count" 
        obj={getVal("ministry_count")} 
      />

      {/* 3. Organization Count */}
      <Card 
      title="organization count" 
      obj={getVal("organization_count")}
      />

      {/* 4. Meeting Attendees Count */}
      <Card 
      title=" Meeting Attendees Count" 
      obj={getVal("meeting_attendees_count")}
      />    

      {/* 5. Total Duration */}
      <Card 
      title="Total Duration" 
      obj={getVal("total_duration")}
      />    

      {/* 6. Total Meetings */}
      <Card 
      title="Total Meetings" 
      obj={getVal("total_meetings")}
      />        

    </div>
  );
};

export default Skeleton;