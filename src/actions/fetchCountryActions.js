import getRequest from "../API/getRequest";

const HEADER = {
   "Authorization": `Bearer ${process.env.REACT_APP_FETCH_COUNTRY_KEY}`,
   "Accept": "application/json"
};
const API_COUNTRY = process.env.REACT_APP_FETCH_COUNTRY + "countries/";
const API_STATE = process.env.REACT_APP_FETCH_COUNTRY + "states/";
const API_CITY = process.env.REACT_APP_FETCH_COUNTRY + "cities/";

export const fetchCountry = (countries) => {
   return { type: "SET_COUNTRY", payload: countries };
};

export const fetchState = (states) => {
   return { type: "SET_STATE", payload: states };
};

export const fetchCity = (cities) => {
   return { type: "SET_CITY", payload: cities };
};

export const getAllCountries = () => {
   return async function (dispatch) {
      const response = await getRequest(API_COUNTRY, HEADER);
      dispatch(fetchCountry(response));
   };
};

export const getAllStates = (country) => {
   return async function (dispatch) {
      const response = await getRequest(API_STATE + country, HEADER);
      dispatch(fetchState(response));
   };
};

export const getAllCities = (state) => {
   return async function (dispatch) {
      const response = await getRequest(API_CITY + state, HEADER);
      dispatch(fetchCity(response));
   };
};
