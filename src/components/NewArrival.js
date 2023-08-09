import React from "react";
import "./static_css/NewArrival.css";
import { Col, Row } from "antd";
import Card from "./Card";
import Header from "./Header";

export default function NewArrival({ product_list, width }) {
   const iterator = product_list.map((element) => {
      return (
         <div key={element.id}>
            <Card element={element} style={{ width: width, borderRadius: "0px"}} />
         </div>
      );
   });

   return (
      <div className="na_outermost">
         <div className="responsive_list" justify="space-evenly">
            {iterator}
         </div>
      </div>
   );
}
