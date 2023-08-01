import React from "react";
import { Button } from "antd";

export default function button(props) {
   return (
      <div>
         <Button href={props.href} danger={true} type="primary" size="large" style={{ borderRadius: "0px", marginTop: "45px", padding:"15px"}}>
            {props.text}
         </Button>
      </div>
   );
}
