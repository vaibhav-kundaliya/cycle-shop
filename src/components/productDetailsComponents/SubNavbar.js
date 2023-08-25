import React from "react";
import "./design/SubNavbar.css";
import StickyBox from "react-sticky-box";
import { Tabs, ConfigProvider } from "antd";
import ReviewForm from "./ReviewForm";
import OldReviews from "./OldReviews";

export default function SubNavbar({product}) {
   const list = [
      {
         name: "Description",
         content: product.productDetails
      },
      {
         name: "Additional information",
         content: (
            <table>
               <td>Size</td>
               <td>{product.size?.join(', ') || "NA"}</td>
            </table>
         ),
      },
      {
         name: "Reviews",
         content: (
            <>
               <OldReviews reviews={product?.reviews} />
               <ReviewForm />
            </>
         ),
      },
   ];

   const items = list.map((name, i) => {
      const id = String(i + 1);
      return {
         label: name.name,
         key: id,
         children: name.content,
      };
   });

   const renderTabBar = (props, DefaultTabBar) => (
      <StickyBox>
         <DefaultTabBar {...props} />
      </StickyBox>
   );
   return (
      <ConfigProvider>
         <Tabs tabPosition="bottom" defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />
      </ConfigProvider>
   );
}
