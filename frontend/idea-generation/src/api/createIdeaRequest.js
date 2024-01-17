import axios from "axios";

const createIdeaRequest = async ({ targetAudience, interest }) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/createIdeaGeneration",
      {
        targetAudience,
        interest,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in createIdeaRequest:", error);
    throw error; // Rethrow the error so you can handle it in the calling function
  }
};

export default createIdeaRequest;
