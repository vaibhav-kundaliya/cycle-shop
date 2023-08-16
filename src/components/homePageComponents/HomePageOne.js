import React from "react";
import css from "./design/HomePageOne.module.css";
import { CaretRightFilled } from "@ant-design/icons";
import CustomButton from "../buttonComponents/CustomButton";

function HomePageOne() {
   return (
      <>
         <div className={css.first_content}>
            <div className="group-6">Newly Launched</div>
            <div className={css.title + " group-1"}>Kryo X26 MTB</div>
            <div className={css.specification + " group-4"}>Specification:</div>
            <div className={css.spec_list}>
               <li>
                  <i className="fas fa-bullseye bullet_points"></i>&nbsp;&nbsp;
                  <span>Lightweight 18" Frame</span>
               </li>
               <li>
                  <i className="fas fa-bullseye bullet_points"></i>&nbsp;&nbsp;
                  <span>Steel Suspension Fork </span>
               </li>
               <li>
                  <i className="fas fa-bullseye bullet_points"></i>&nbsp;&nbsp;
                  <span>Steel Hardtail Frame</span>
               </li>
            </div>
            <br></br>
            <CustomButton href="/" text="BUY NOW"></CustomButton>
         </div>
      </>
   );
}

export default HomePageOne;