import { useUsers } from "../hook/useUsers";
import SkeletonCard from "./SkeletonCard";
import Card from "./Card";

const Skeleton = () => {
  const { data, isLoading, isError } = useUsers();
  
  // API ka data
  const users = data?.data || [];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)}
      </div>
    );
  }

  if (isError) return <p>Error loading data!</p>;

  // Helper function to find specific data
  const getVal = (prop) => users.find(item => item.property === prop);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {/* 1. User Count (Total length) */}
      <Card 
        title="Active User Count" 
        obj={getVal("active_user_count")}  
      />

      {/* 2. Ministry Count */}
      <Card 
        title="Ministry Count" 
        obj={getVal("total_duration")} 
      />

      {/* 3. Organization Count
      <Card title="Organization Count" value={getVal("organization_count")?.value || 0} unit="" /> */}

      {/* 4. Total Meetings
      <Card 
      title="Total Meetings" 
      value={getVal("total_meetings")?.value || 0} 
      suffix={getVal("total_meetings")?.suffix || ""} 
      />    
       */}
    </div>
  );
};

export default Skeleton;