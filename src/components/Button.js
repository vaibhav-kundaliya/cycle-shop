import React from "react";
import { Button } from "antd";
export default function button(props) {
   const button_css = { borderRadius: "0px", marginTop: "3%"};

   return (
      <div>
         <Button href={props.href} danger={true} type="primary" size="large" style={button_css}>
            {props.text}
         </Button>
      </div>
   );
}
