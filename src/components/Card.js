import React, { useState } from "react";
import { Card } from "antd";
import StarRatings from "./StarRatings";
import PriceRange from "./PriceRange";
const { Meta } = Card;

function Cards({ element }) {
   const [price, setPrice] = useState(element.price);
   return (
      <>
         <Card
            hoverable
            style={{
               width: 270,
               backgroundColor: "rgba(188, 180, 118, 0.42)",
            }}
            cover={<img alt={element.name} src={element.img} />}
         >
            <Meta description="Bicycle" />
            <b>{element.name}</b>
            <StarRatings num={element.rating} />
            <Meta title={price} />
            <br />
            <PriceRange setPrice={setPrice} price_pair={element.pair} />
         </Card>
      </>
   );
}

export default Cards;
