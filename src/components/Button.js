import React from "react";
import { Button } from "antd";

export default function button(props) {
   let button_css = {borderRadius: "0px"};
   button_css = {...button_css, ...props["style"]}
   return (
      <div>
         <Button href={props.href} danger={true} type="primary" size="large" style={button_css}>
            {props.text}
         </Button>
      </div>
   );
}
