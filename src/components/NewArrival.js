import React from "react";
import "./static_css/NewArrival.css";
import { Col, Row } from "antd";
import Card from "./Card";
import Header from "./Header";

export default function NewArrival({title, product_list}) {

   const iterator = product_list.map((element) => {
      return (<div key={element.id}>
         <Col span={4}>
            <Card element={element} />
         </Col>
      </div>);

   });

   return (
      <div className="na_outermost">
         <Header header={title}/>
         <Row className="responsive_list" justify="space-evenly">
            {iterator}
         </Row>
      </div>
   );
}
