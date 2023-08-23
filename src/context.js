import { React, useContext, createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import getResponse from "./API/fetchCityStateCountry";

const addressAPI = "https://www.universal-tutorial.com/api/";

const initialState_for_address = {
   states: [],
   country: [],
   city: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
   const [state_address, dispatch_address] = useReducer(reducer, initialState_for_address);

   const fetchCountry = async () => {
      const country_list = await getResponse(addressAPI + "countries", "COUNTRY");
      dispatch_address({ type: "SET_COUNTRIES", payload: { results: country_list } });
   };

   const fetchState = async (Country) => {
      const state_list = await getResponse(addressAPI + "states/" + Country, "STATE");
      dispatch_address({ type: "SET_STATES", payload: { results: state_list } });
   };

   const fetchCity = async (State) => {
      const city_list = await getResponse(addressAPI + "cities/" + State, "CITY");
      dispatch_address({ type: "SET_CITY", payload: { results: city_list } });
   };

   
   useEffect(() => {
      fetchCountry();
   }, []);

   return <AppContext.Provider value={{ ...state_address, fetchState, fetchCity }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
   return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
