import React from "react";
import { Button, ConfigProvider } from "antd";

export default function CustomButton(props) {
   let button_css = { borderRadius: "0px" };
   button_css = { ...button_css, ...props["style"] };
   if (props.disabled)
      return (
         <div>
            <ConfigProvider
               theme={{
                  components: {
                     Button: {
                        colorPrimary: "green",
                     },
                  },
               }}
            >
               <Button href={props.href} danger={true} disabled size="large" style={button_css}>
                  {props.text}
               </Button>
            </ConfigProvider>
         </div>
      );
   return (
      <div>
         <ConfigProvider
            
         >
            <Button type="primary">{props.text}</Button>
         </ConfigProvider>
      </div>
   );
}
