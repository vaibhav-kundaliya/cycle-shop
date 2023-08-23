import fetchProduct from "../API/fetchProduct";

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
      const response = await fetchProduct(url);
      // console.log(response);
      dispatch(fetchAllProducts(response));
   };
};

export const getBicycles = (url) => {
   return async function (dispatch) {
      const response = await fetchProduct(url);
      // console.log(response);
      dispatch(fetchBicycles(response));
   };
};

export const getAccessories = (url) => {
   return async function (dispatch) {
      const response = await fetchProduct(url);
      // console.log(response);
      dispatch(fetchAccessories(response));
   };
};
