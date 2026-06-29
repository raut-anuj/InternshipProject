export const fetchUsers = async () => {
  const response = await fetch("/api/vmeet/test_external.json");

  // Error check hamesha json() read karne se pehle karo
  if (!response.ok) {
    throw new Error("Failed to load");
  }

  const result = await response.json();
  
  // Ab sirf result ko return karo
  return result; 
};