import React, { useState } from "react";
import { Card, Rate } from "antd";
import {useNavigate} from "react-router-dom";
import PriceRange from "../productDetailsComponents/PriceRange";
import { ShoppingFilled } from "@ant-design/icons";
import css from "./design/Card.module.css";

const { Meta } = Card;

function Cards({ element, width }) {
   const [price, setPrice] = useState(element.price);
   const [visibility, setVisibility] = useState("none");
   
   const navigate = useNavigate();
   const gotoProductDetails = () => {
      navigate('/product-details/'+element.SKU);
   }

   return (
      <>
         <Card
            onMouseOver={()=>setVisibility("block")}
            onMouseLeave={()=>setVisibility("none")}
            hoverable
            style={{borderRadius:0}}
            cover={<img alt={element.name} onClick={gotoProductDetails} src={"http://localhost:8000/"+element.image} style={{borderRadius: "0px"}}/>}
         >
            <div>
            {/* <Rate disabled defaultValue={element.rating} style={{color:"gray"}} /> */}
            </div>
            <Meta title={element.name} description={`${element.price}$`} />
            <br />
            {/* <PriceRange setPrice={setPrice} price_pair={element.pair} /> */}
            <div id="icon" className={css.addtocart_icon} style={{display: visibility}} >
               <ShoppingFilled  className="icon" style={{ fontSize: "20px" }} />
            </div>
         </Card>
      </>
   );
}

export default Cards;
