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

export const getAllProducts_keyword = (keyword) =>{
   return async function (dispatch) {
      const response = await getRequest(`${process.env.REACT_APP_CONSUMER_URL}searchProduct/keyword?keyword=${keyword}`);
      dispatch(fetchAllProducts(response.data.data));
   };
}

export const getAllProducts = (range) => {
   return async function (dispatch) {
      const response = await getRequest(`${process.env.REACT_APP_CONSUMER_URL}productFilter?minPrice=${range[0]}&maxPrice=${range[1]}&category=`);
      dispatch(fetchAllProducts(response.data.data));
   };
};

export const getBicycles = (range) => {
   return async function (dispatch) {
      const response = await getRequest(`${process.env.REACT_APP_CONSUMER_URL}productFilter?minPrice=${range[0]}&maxPrice=${range[1]}&category=Bicycle`);
      dispatch(fetchBicycles(response.data.data));
   };
};

export const getAccessories = (range) => {
   return async function (dispatch) {
      const response = await getRequest(`${process.env.REACT_APP_CONSUMER_URL}productFilter?minPrice=${range[0]}&maxPrice=${range[1]}&category=Accessory`);
      dispatch(fetchAccessories(response.data.data));
   };
};
