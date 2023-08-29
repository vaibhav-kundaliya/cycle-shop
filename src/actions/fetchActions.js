import getRequest from "../API/getRequest";

export const fetchAllProducts = (products) => {
   return { type: "FETCH_ALL_PRODUCTS", payload: products };
};
export const fetchBicycles = (products) => {
   return { type: "FETCH_BICYCLES", payload: products };
};
export const fetchAccessories = (products) => {
   return { type: "FETCH_ACCESSORIES", payload: products };
};

export const getAllProducts = (url) => {
   return async function (dispatch) {
      const response = await getRequest(url);
      dispatch(fetchAllProducts(response.data.data));
   };
};

export const getBicycles = (url) => {
   return async function (dispatch) {
      const response = await getRequest(url);
      dispatch(fetchBicycles(response.data.data));
   };
};

export const getAccessories = (url) => {
   return async function (dispatch) {
      const response = await getRequest(url);
      dispatch(fetchAccessories(response.data.data));
   };
};
