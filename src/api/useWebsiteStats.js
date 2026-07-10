import { useQuery } from "../Archive/utils/reactQuery";
import { fetchWebsiteStats } from "./usersApi";

const useWebsiteStats = () => {
  return useQuery(["websiteStats"], fetchWebsiteStats);
};

export default useWebsiteStats;