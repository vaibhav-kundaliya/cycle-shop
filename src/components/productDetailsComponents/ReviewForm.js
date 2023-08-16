import React from "react";
import "./design/ReviewForm.css";
import { Form, Input, Rate, Checkbox } from "antd";
import CustomButton from "../buttonComponents/CustomButton";

export default function ReviewForm() {
   return (
      <div className="review_form">
         <Form>
            <div className="title">Be the first to review “Bicycle Gloves Blue”</div>
            <div className="subtitle">Your email address will not be published. Required fields are marked *</div>
            <div className="rating_field">
               <div>Your Rating*</div>
               <div>
                  <Rate style={{color:"gray"}} />
               </div>
            </div>
            <div className="review_field">
               <div>Your Review</div>
               <div>
                  <Input.TextArea style={{ borderRadius: "0px" }} />
               </div>
            </div>
            <div className="user_details_fields">
               <div className="name_field">
                  <div>Name*</div>
                  <div>
                     <Input style={{ borderRadius: "0px" }} />
                  </div>
               </div>
               <div className="email_field">
                  <div>Email*</div>
                  <div>
                     <Input style={{ borderRadius: "0px" }} />
                  </div>
               </div>
            </div>
            <div className="checkbox">
               <Checkbox /> <span>Save my name, email, and website in this browser for the next time I comment.</span>
            </div>
            <div className="submit_button">
               <CustomButton text="SUBMIT" />
            </div>
         </Form>
      </div>
   );
}
