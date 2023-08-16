import React from "react";
import "./design/CardList.css";
import { Col, Row, List } from "antd";
import Card from "./Card";

export default function CardList({ product_list, width, grid }) {
   
   return (
      <>
         <List
            grid={{
               gutter: 16,
               xs: 1,
               sm: 2,
               md: 4,
               lg: 4,
               xl: 6,
               xxl: 6,
            }}
            dataSource={product_list}
            renderItem={(element) => (
               <List.Item>
                  <Card element={element} width={25} style={{ borderRadius: "0px" }} />
               </List.Item>
            )}
         />
      </>
   );
}
