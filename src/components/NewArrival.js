import React from "react";
import "./static_css/NewArrival.css";
import { Col, Row } from "antd";
import Card from "./Card";
import Header from "./Header";

export default function NewArrival({ title, product_list }) {
   const iterator = product_list.map((element) => {
      return (
         <div key={element.id}>
            <Row>
               <Col>
                  <Card element={element} style={{ width: 200, backgroundColor: "rgba(188, 180, 118, 0.42)", borderRadius: "0px" }} />
               </Col>
            </Row>
         </div>
      );
   });

   return (
      <div className="na_outermost">
         <div>
            <div className="group-3">
               <h3>{title}</h3>
            </div>
         </div>
         <Row className="responsive_list" justify="space-evenly">
            {iterator}
         </Row>
      </div>
   );
}
