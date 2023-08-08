import React, { useState } from "react";
import { Card } from "antd";
import StarRatings from "./StarRatings";
import PriceRange from "./PriceRange";
import Button from "./Button";
import { ShoppingFilled } from "@ant-design/icons";
import "./static_css/Card.css";

const { Meta } = Card;


function Cards({ element, style }) {
   const [price, setPrice] = useState(element.price);
   const [visibility, setVisibility] = useState("none");
   
   return (
      <>
         <Card
            onMouseOver={()=>setVisibility("block")}
            onMouseLeave={()=>setVisibility("none")}
            hoverable
            style={style}
            cover={<img alt={element.name} src={element.img} style={{borderRadius: "0px"}}/>}
         >
            <Meta description="Bicycle" />
            <b>{element.name}</b>
            <StarRatings num={element.rating} />
            <Meta title={price} />
            <br />
            <PriceRange setPrice={setPrice} price_pair={element.pair} />

            <div id="icon" className="addtocart-icon" style={{display: visibility}} >
               <ShoppingFilled  className="icon" style={{ fontSize: "20px" }} />
            </div>
         </Card>
      </>
   );
}

export default Cards;
