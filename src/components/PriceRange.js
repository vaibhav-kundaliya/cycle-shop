import React from "react";
import { Button } from "antd";
import "./static_css/PriceRange.css";
export default function PriceRange({ setPrice, price_pair }) {
   if (!price_pair) return <div></div>;

   const iter = Object.keys(price_pair).map((element) => {
      return (
         <div key={element} style={{ display: "inline", marginRight: "5px" }}>
            <Button className="size" onClick={()=>setPrice(price_pair[element])}>
               {element}
            </Button>
         </div>
      );
   });
   return <div>{iter}</div>;
}
