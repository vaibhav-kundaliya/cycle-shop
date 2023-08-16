import { React, useContext, createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import getResponse from "./API/fetchCityStateCountry";
import userSignUp_SignIn from "./API/userSignUp_SignIn";

const addressAPI = "https://www.universal-tutorial.com/api/";
const singUpAPI = "http://localhost:8001/signup";
const logInAPI = "http://localhost:8001/login";

const initialState = {
   isLoading: false,
   states: [],
   country: [],
   city: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const fetchCountry = async () => {
      const country_list = await getResponse(addressAPI + "countries", "COUNTRY");
      country_list.push({ value: "others", label: "Others" });
      dispatch({ type: "SET_COUNTRIES", payload: { results: country_list } });
   };

   const fetchState = async (Country) => {
      const state_list = await getResponse(addressAPI + "states/" + Country, "STATE");
      state_list.push({ value: "others", label: "Others" });
      dispatch({ type: "SET_STATES", payload: { results: state_list } });
   };

   const fetchCity = async (State) => {
      const city_list = await getResponse(addressAPI + "cities/" + State, "CITY");
      city_list.push({ value: "others", label: "Others" });
      dispatch({ type: "SET_CITY", payload: { results: city_list } });
   };

   const userSignUp = async (req_body) => {
      dispatch({ type: "SET_LOADING" });
      try {
         const response = await userSignUp_SignIn(singUpAPI, req_body);
         if (response.status === "success") sessionStorage.setItem("loggedInUser", req_body.email);
      } catch {
         console.log(" in catchError");
      } finally {
         dispatch({ type: "SET_LOADING" });
      }
   };

   const userLogIn = async (req_body) => {
      console.log(JSON.stringify(req_body));
      dispatch({ type: "SET_LOADING" });
      const response = await userSignUp_SignIn(logInAPI, req_body);
      dispatch({ type: "SET_LOADING" });
      // if (response.status==="success") sessionStorage.setItem("loggedInUser", req_body.email);
   };

   useEffect(() => {
      fetchCountry();
   }, [1]);

   return <AppContext.Provider value={{ ...state, fetchState, fetchCity, userSignUp, userLogIn }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
   return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
