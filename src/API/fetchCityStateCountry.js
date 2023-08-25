const getResponse = (url, locality) => {
   return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();

      xhr.open("GET", url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader(
         "Authorization",
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ2YWliaGF2a3VuZGFsaXlhN0BnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ5TnZWaGlpaS1oNFp2Tk4zUi1QMjItcm9XblBRSmNjMG5BTXFrU0RaZEZoa25iM0MyaE1OZlhaaXN6TW4wc1lURnBBIn0sImV4cCI6MTY5MzAyMjA1MH0.aUSBR17aGIzFeNRmOiyGaNeJXckTaYSoXf-EIgn35S8"
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
