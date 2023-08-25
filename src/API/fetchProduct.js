import axios from "axios";

const fetchProduct = async (url) => {
   try {
      const response = await axios.get(url, { headers: { "Content-Type": "application/json" }, withCredentials: true });
      return response.data.data;
   } catch (error) {
      if (error.response) {
         console.error(error.response);
      } else {
         throw new Error("Network error: " + error.message);
      }
   }
};

export default fetchProduct;
