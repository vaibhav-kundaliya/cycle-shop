import userSignUp_SignIn from "../API/userSignUp_SignIn";
import fetchProduct from "../API/fetchProduct";

export const addToCart = (items) => {
   return { type: "ADD_TO_CART", payload: items };
};
export const removeFromCart = (SKU) => {
   return { type: "REMOVE_FROM_CART", payload: SKU };
};
export const displayCart = (items) => {
   return { type: "DISPLAY_CART", payload: items };
};

export const displayCartItems = () => {
   return async function (dispatch) {
      const response = await fetchProduct("http://localhost:8001/getCartItems");
      dispatch(displayCart(response));
   };
};

export const insertCart = (product) => {
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
