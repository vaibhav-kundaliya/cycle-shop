import axios from "axios";
const userSignUp_SignIn = async (url, body) => {
   axios
      .post(url, body, { headers: { "Content-Type": "application/json" },timeout: 5000, responseType: 'json', withCredentials: true })
      .then((response) => {
         return response.data;
      })
      .catch((error) => {
        if (error.response) {
           console.error("adada", error.response);
            return error.response
         } else {
            throw new Error("Network error: " + error.message);
         }
      });
};

export default userSignUp_SignIn;
