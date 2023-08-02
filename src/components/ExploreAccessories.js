import React from "react";
import Card from "./Card";
import Header from "./Header";
import { Col, Row } from "antd";
import "./static_css/NewArrival.css"


export default function ExploreAccessories() {
   let accessory = [
      {
         id: 1,
         name: "Bicycle Gloves Blue",
         price: "$27.00-$35.00",
         pair: { L: "$27.00", M: "$30.00", XL: "$35.00" },
         img: require("./imgs/gloves-1.jpg"),
         rating: 4,
         description: "Product Description",
      },
      {
         id: 2,
         name: "Bicycle Gloves Gold",
         price: "$35.00-$50.00",
         pair: { L: "$35.00", M: "$40.00", XL: "$50.00" },
         img: require("./imgs/gloves-2.jpg"),
         rating: 1,
         description: "Product Description",
      },
      {
         id: 3,
         name: "Bicycle Gloves Pink",
         price: "$25.00-$32.00",
         pair: { L: "$25.00", M: "$28.00", XL: "$32.00" },
         img: require("./imgs/gloves-3.jpg"),
         rating: 5,
         description: "Product Description",
      },
      {
         id: 4,
         name: "Bicycle Gloves Red",
         price: "$45.00-$65.00",
         pair: { L: "$45.00", M: "$50.00", XL: "$60.00" },
         img: require("./imgs/gloves-4.jpg"),
         rating: 0,
         description: "Product Description",
      },
   ];

   const iterator = accessory.map((element) => {
      return (
         <div key={element.id}>
            <Col span={4}>
               <Card element={element} />
            </Col>
         </div>
      );
   });

   return (
      <div>
         <div className="na_outermost">
            <Header header="New Arrivales" />
            <Row className="responsive_list" justify="space-evenly">
               {iterator}
            </Row>
         </div>
      </div>
   );
}
