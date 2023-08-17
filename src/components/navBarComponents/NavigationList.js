import React from "react";
import { Link } from "react-router-dom";
export default function NavigationList({ showModal }) {
   return (
      <>
         <div>
            <Link to="/" style={{ textDecoration: "none", color: "White" }}>
               HOME
            </Link>
         </div>
         <div>
            <Link to="/bicycle" style={{ textDecoration: "none", color: "White" }}>
               BICYCLES
            </Link>
         </div>
         <div>
            <Link to="/contact" style={{ textDecoration: "none", color: "White" }}>
               CONTACT
            </Link>
         </div>
         <div>
            <Link style={{ textDecoration: "none", color: "White" }} onClick={showModal}>
               SIGN-IN/SIGN-UP
            </Link>
         </div>
      </>
   );
}
