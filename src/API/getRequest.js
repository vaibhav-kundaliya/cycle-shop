import axios from "axios";
const getRequest = async (url, headers = {}) => {
   try {
      console.log({ "Content-Type": "application/json", ...headers }, url)
      const response = await axios.get(url, {
         withCredentials: true,
         headers: { "Content-Type": "application/json", ...headers },
         timeout: 5000,
         responseType: "json",
      });
      return response;
   } catch (error) {
      if (error.response) {
         console.error("Error response:", error.response);
         throw error.response;
      } else {
         throw new Error(error.message);
      }
   }
};

export default getRequest;
