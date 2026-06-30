
import sampleResponse from "./sample_response";

export const fetchUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return sampleResponse;
};