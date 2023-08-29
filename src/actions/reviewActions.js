import postRequest from "../API/postRequest";

export const addReview = (items) => {
   return { type: "ADD_REVIEW", payload: items };
};


export const insertReview = (product) => {
   return async function (dispatch) {
      const response = await postRequest(process.env.REACT_APP_CONSUMER_URL+"addToCart", { productID: product.SKU, size: product.size });
      dispatch(addToCart(response));
   };
};

export const removeCart = (SKU) => {
   return async function (dispatch) {
      const response = await postRequest(process.env.REACT_APP_CONSUMER_URL+"deleteCartItem", { cartItemID: SKU });
      dispatch(removeFromCart(response));
   };
};
