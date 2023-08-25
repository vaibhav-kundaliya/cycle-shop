import userSignUp_SignIn from "../API/userSignUp_SignIn";

export const addReview = (items) => {
   return { type: "ADD_REVIEW", payload: items };
};


export const insertReview = (product) => {
   return async function (dispatch) {
      const response = await userSignUp_SignIn("http://localhost:8001/addToCart", { productID: product.SKU, size: product.size });
      dispatch(addToCart(response));
   };
};

export const removeCart = (SKU) => {
   return async function (dispatch) {
      const response = await userSignUp_SignIn("http://localhost:8001/deleteCartItem", { cartItemID: SKU });
      dispatch(removeFromCart(response));
   };
};
