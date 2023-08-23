import React, { useState } from "react";
import { Card, Rate } from "antd";
import PriceRange from "../productDetailsComponents/PriceRange";
import { ShoppingFilled } from "@ant-design/icons";
import css from "./design/Card.module.css";
const img_storage_path = "D:\\Company Work\\ECommerceApp\\server\\admin\\"

const { Meta } = Card;


function Cards({ element, style, width }) {
   const [price, setPrice] = useState(element.price);
   const [visibility, setVisibility] = useState("none");
   
   const gotoProductDetails = () => {
      window.open("/product-details")
   }

   return (
      <>
         <Card
            onMouseOver={()=>setVisibility("block")}
            onMouseLeave={()=>setVisibility("none")}
            
            hoverable
            style={style}
            cover={<img alt={element.name} width={width} className={css.cardImage} onClick={gotoProductDetails} src={"http://localhost:8000/"+element.image} style={{borderRadius: "0px"}}/>}
         >
            <b>{element.name}</b>
            <div>
            <Rate disabled defaultValue={element.rating} style={{color:"gray"}} />

            </div>
            <Meta title={`${element.price}$`} />
            <br />
            <PriceRange setPrice={setPrice} price_pair={element.pair} />

            <div id="icon" className={css.addtocart_icon} style={{display: visibility}} >
               <ShoppingFilled  className="icon" style={{ fontSize: "20px" }} />
            </div>
         </Card>
      </>
   );
}

export default Cards;
