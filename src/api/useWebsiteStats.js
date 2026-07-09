import { useQuery } from "../MyLocal/utils/reactQuery";
import { fetchWebsiteStats } from "./usersApi";

const useWebsiteStats = () => {
  return useQuery(["websiteStats"], fetchWebsiteStats);
};

export default useWebsiteStats;