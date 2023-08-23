import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
export default function NavigationList({ showModal }) {
   const isAuthenticated = sessionStorage.getItem("user")
   const signOut = () => {
      sessionStorage.removeItem('user');
   }


   const auth_option = () => {
      if (isAuthenticated)
         return (
            <Link to="/" style={{ textDecoration: "none", color: "White" }} onClick={signOut}>
               SIGN-OUT
            </Link>
         );
      else
         return (
            <Link style={{ textDecoration: "none", color: "White" }} onClick={showModal}>
               SIGN-IN/SIGN-UP
            </Link>
         );
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
         <div>{auth_option()}</div>
      </>
   );
}
