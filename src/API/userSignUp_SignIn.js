import axios from "axios";
const userSignUp_SignIn = async (url, body) => {
   axios
      .post(url, body, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
         console.log("adadasads");
         console.log(response.data);
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
