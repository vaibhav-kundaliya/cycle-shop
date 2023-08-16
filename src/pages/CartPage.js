import React from "react";
import CartTable from "../components/cartTableComponents/CartTable";
import css from "./design/CartPage.module.css";
import { Button } from "antd";

export default function CartPage() {
   return (
      <div className={css.outer}>
         <div className={css.inner}>
            <div className="group-5" style={{width:"100%"}}>Cart</div>
            <CartTable />
            <div className={css.cartCard}>
               <div className={css.cardTitle + " group-4"}>Cart Totals</div>
               <div className={css.cardinner}>
                  <div className={css.amount}>
                     <table>
                        <tbody>
                           <tr>
                              <td>Sub Total:</td>
                              <td>100</td>
                           </tr>
                           <tr>
                              <td>Total:</td>
                              <td>100</td>
                           </tr>
                        </tbody>
                     </table>
                     <div className={css.buttonRow}>
                        <Button type="primary" block>
                           CHECKOUT
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
