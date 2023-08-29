export const fetchCountry = (countries) => {
   return { type: "SET_COUNTRY", payload: countries };
};

export const fetchState = (states) => {
   return { type: "SET_STATE", payload: states };
};

export const fetchCity = (cities) => {
   return { type: "SET_CITY", payload: cities };
};

const fetchData = async () => {
   try {
      const response = await fetch("../assets/json/worldcities.json");
      const data = await response.json();
      return data;
   } catch (error) {
      console.error("Error loading JSON:", error);
      return [];
   }
};


export const getAllCountries = () => {
   return async function (dispatch) {
      const data = await fetchData();
      const uniqueCountryNames = [...new Set(data.map(item => item.country))];
      const countryList = uniqueCountryNames.map(element => ({ label: element, value: element }));
      dispatch(fetchCountry(countryList));
   };
};

export const getAllStates = (country) => {
   return async function (dispatch) {
      const data = await fetchData();
      const uniqueStateNames = new Set();

      data.forEach((item) => {
         if (item.country === country) {
            uniqueStateNames.add(item.admin_name);
         }
      });

      const stateList = Array.from(uniqueStateNames).map((element) => ({
         label: element,
         value: element,
      }));

      dispatch(fetchState(stateList));
   };
};

export const getAllCities = (state) => {
   return async function (dispatch) {
      const data = await fetchData();
      const cityList = data
         .filter(item => item.admin_name === state)
         .map(item => ({ label: item.city_ascii, value: item.city_ascii }));
      dispatch(fetchCity(cityList));
   };
};
