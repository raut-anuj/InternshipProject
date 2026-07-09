import sampleResponse from "./sample_response";

export const fetchWebsiteStats  = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return sampleResponse.data;
};