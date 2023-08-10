import React from "react";
import "./design/CardList.css";
import { Col, Row } from "antd";
import Card from "./Card";

export default function CardList({ product_list, width }) {
   const iterator = product_list.map((element) => {
      return (
         <div key={element.id}>
            <Card element={element} style={{ width: width, borderRadius: "0px"}} />
         </div>
      );
   });

   return (
      <div className="na_outermost">
         <div className="responsive_list">
            {iterator}
         </div>
      </div>
   );
}
