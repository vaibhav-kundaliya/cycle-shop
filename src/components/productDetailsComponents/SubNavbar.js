import React from "react";
import "./design/SubNavbar.css";
import StickyBox from "react-sticky-box";
import { Tabs, ConfigProvider } from "antd";
import ReviewForm from "./ReviewForm";
import OldReviews from "./OldReviews";

const list = [
   {
      name:"Description",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   },
   {
      name:"Additional information",
      content:(
         <table>
            <td>Size</td>
            <td>L, XL, XXL</td>
         </table>
      )
   },
   {
      name:"Reviews",
      content:(
         <>
         <OldReviews />
         <ReviewForm />
         </>
      )
   }
]

const items = list.map((name, i) => {
   const id = String(i + 1);
   return {
      label: name.name,
      key: id,
      children: name.content,
   };
});
export default function SubNavbar() {

   const renderTabBar = (props, DefaultTabBar) => (
      <StickyBox
      >
         <DefaultTabBar {...props} />
      </StickyBox>
   );
   return (
      <ConfigProvider >
         <Tabs tabPosition="bottom" defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />
      </ConfigProvider>
   );
}
