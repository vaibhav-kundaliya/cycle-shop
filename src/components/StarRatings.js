import React from "react";
import { StarOutlined } from "@ant-design/icons";

export default function StarRatings(props) {
   let list = [];
   for (let i = 1; i <= props.num; i++) list.push(i);

   if (props.num === 0)
      return (
         <div style={{ visibility: "hidden" }}>
            <StarOutlined />
         </div>
      );

   const iterator = list.map((element) => {
      return (
         <div key={element} style={{ display: "inline" }}>
            <StarOutlined />
         </div>
      );
   });
   return <div>{iterator}</div>;
}
