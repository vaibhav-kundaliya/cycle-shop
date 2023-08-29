import { fetchProductReducer } from "./fetchProductReducer";
import { cartReducer } from "./cartReducer";
import { fetchCountryReducer } from "./fetchCountryReducer";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({ productReducer: fetchProductReducer, cartReducer: cartReducer, countryReducer: fetchCountryReducer });
