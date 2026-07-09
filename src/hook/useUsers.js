import { useQuery } from "../utils/reactQuery";
import { fetchUsers } from "../api/usersApi";

export const useUsers = () => {
  return useQuery(["users"], fetchUsers);
}; 