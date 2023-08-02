import React from "react";
import { Button } from "antd";
import "./static_css/PriceRange.css";
export default function PriceRange({ setPrice, price_pair }) {
   if (!price_pair) return <div></div>;

   const onclickfun = (element) => {
      let size = element.target.innerHTML;
      setPrice(price_pair[size]);
   };

   const iter = Object.keys(price_pair).map((element) => {
      return (
         <div key={element} style={{ display: "inline", marginRight: "5px" }}>
            <Button className="size" onClick={onclickfun}>
               {element}
            </Button>
         </div>
      );
   });
   return <div>{iter}</div>;
}
