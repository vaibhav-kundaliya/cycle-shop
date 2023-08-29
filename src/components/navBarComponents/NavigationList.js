import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeAuthUser } from "../../actions/authActions";

export default function NavigationList({ showModal }) {
   const dispatch = useDispatch();
   const isAuthenticated = useSelector((state) => {
      return state.authReducer;
   });
   const signOut = () => {
      dispatch(removeAuthUser());
   };

   return (
      <>
         <div>
            <Link to="/" style={{ textDecoration: "none", color: "White" }}>
               HOME
            </Link>
         </div>
         <div>
            <Link to="/store" style={{ textDecoration: "none", color: "White" }}>
               STORE
            </Link>
         </div>
         <div>
            <Link to="/contact" style={{ textDecoration: "none", color: "White" }}>
               CONTACT
            </Link>
         </div>
         <div>
            {isAuthenticated ? (
               <Link to="/" style={{ textDecoration: "none", color: "White" }} onClick={signOut}>
                  SIGN-OUT
               </Link>
            ) : (
               <Link style={{ textDecoration: "none", color: "White" }} onClick={showModal}>
                  SIGN-IN/SIGN-UP
               </Link>
            )}
         </div>
      </>
   );
}
