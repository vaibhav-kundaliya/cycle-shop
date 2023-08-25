import React from "react";
import { Button, ConfigProvider } from "antd";

export default function CustomButton(props) {
   if (props.disabled)
      return (
         <div>
               <Button href={props.href} danger={true} disabled size="large">
                  {props.text}
               </Button>
         </div>
      );
   return (
      <>
            <Button type="primary">{props.text}</Button>
      </>
   );
}
