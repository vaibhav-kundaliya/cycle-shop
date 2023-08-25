import React from "react";
import "./design/CardList.css";
import { List } from "antd";
import Card from "./Card";

export default function CardList({ product_list }) {
   
   return (
      <>
         <List
            grid={{
               gutter: 16,
               xs: 1,
               sm: 2,
               md: 4,
               lg: 4,
               xl: 5,
               xxl: 5,
            }}
            dataSource={product_list?product_list:[]}
            renderItem={(element) => (
               <List.Item>
                  <Card element={element} />
               </List.Item>
            )}
         />
      </>
   );
}
