// export const fetchUsers = async () => {
//   const response = await fetch("/api/vmeet/test_external.json");

//   // Error check hamesha json() read karne se pehle karo
//   if (!response.ok) {
//     throw new Error("Failed to load");
//   }

//   const result = await response.json();
  
//   // Ab sirf result ko return karo
//   return result; 
// };


import sampleResponse from "./sample_response";

export const fetchUsers = async () => {
  // Skeleton dekhne ke liye 1.5 second ka delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return sampleResponse;
};