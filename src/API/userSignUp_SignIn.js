import axios from "axios"
const userSignUp_SignIn = async (url, body) => {
   // return new Promise((resolve, reject) => {
   //    var xhr = new XMLHttpRequest();

   //    xhr.open("POST", url, true);
   //    xhr.setRequestHeader("Content-Type", "application/json");
   //    xhr.setRequestHeader("Accept", "application/json");

   //    xhr.onload = function () {
   //       if (xhr.status >= 200 && xhr.status < 300) {
   //          const response = JSON.parse(xhr.responseText);
   //          console.log("Response:", response);
   //          resolve(response);
   //       } else {
   //          reject(new Error("Request failed with status:"), xhr.status);
   //       }
   //    };

   //    xhr.onerror = function () {
   //       reject(new Error("Request error occurred"));
   //    };
   //    xhr.send(JSON.stringify(body));
   // });

   try {
      const response = await axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
};

export default userSignUp_SignIn;
