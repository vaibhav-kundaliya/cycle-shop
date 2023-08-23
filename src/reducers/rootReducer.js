import {fetchProductReducer} from "./fetchProductReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ productReducer: fetchProductReducer });
