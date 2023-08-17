const getResponse = (url, locality) => {
   return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();

      xhr.open("GET", url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader(
         "Authorization",
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ2YWliaGF2a3VuZGFsaXlhN0BnbWFpbC5jb20ifSwiZXhwIjoxNjkyMzM3MDI2fQ.0UrJpEh0miav9FW9SCiFd0BpcILwE_zjve3SzmU7q2w"
      );

      xhr.onload = function () {
         if (xhr.status >= 200 && xhr.status < 300) {
            const result = JSON.parse(xhr.responseText);
            const final_result = [];
            switch (locality) {
               case "COUNTRY":
                  result.map((element) => {
                     if (element.country_name) final_result.push({ value: element.country_name, label: element.country_name });
                  });
               case "STATE":
                  result.map((element) => {
                     if(element.state_name) final_result.push({ value: element.state_name, label: element.state_name });
                  });
               case "CITY":
                  result.map((element) => {
                     if(element.city_name) final_result.push({ value: element.city_name, label: element.city_name });
                  });
            }
            resolve(final_result);
         } else {
            console.error("Request failed with status:", xhr.status);
         }
      };

      xhr.onerror = function () {
         console.error("Request error occurred");
      };

      xhr.send();
   });
};

export default getResponse ;

// getResponse("https://www.universal-tutorial.com/api/getaccesstoken")
