import { React, useState, useEffect } from "react";
import { Form, Input, Button, InputNumber, Select } from "antd";
import css from "./design/SignUpForm.module.css";
import { LoadingOutlined } from "@ant-design/icons";
import { useGlobalContext } from "../../context";
export default function SignUpForm() {
   const [form] = Form.useForm();
   const { states, country, city, fetchState, fetchCity, userSignUp, isLoading } = useGlobalContext();

   const onLoading = () => {
      return (
         <Button type="primary" disabled htmlType="submit">
            <LoadingOutlined />
         </Button>
      );
   };

   const onStatic = () => {
      return (
         <Button type="primary" htmlType="submit">
            SIGN UP
         </Button>
      );
   };
   const setStates = (element) => {
      fetchState(element);
   };

   const setCity = (element) => {
      fetchCity(element);
   };

   const phoneNumberRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
   const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
   const onFinish = (values) => {
      const req_body = {
         firstName: values.firstname,
         lastName: values.lastname,
         email: values.email,
         password: values.password,
         confirmPassword: values.password,
         phoneNumber: values.phonenumber,
         address: {
            address1: values.address1,
            address2: values.address2,
            pincode: values.pincode,
            city: values.city,
            state: values.state,
            country: values.country,
         },
      };
      userSignUp(req_body);
   };
   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };
   return (
      <div>
         <Form
            form={form}
            style={{
               height: "fit-content",
            }}
            name="signup"
            initialValues={{
               remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
         >
            <div className={css.two_inline_fields + " " + css.inline_fields}>
               <Form.Item
                  name="firstname"
                  rules={[
                     {
                        required: true,
                        message: "Please input your First Name!",
                     },
                  ]}
               >
                  <Input placeholder="First Name" />
               </Form.Item>

               <Form.Item
                  name="lastname"
                  rules={[
                     {
                        required: true,
                        message: "Please input your Last Name!",
                     },
                  ]}
               >
                  <Input placeholder="Last Name" />
               </Form.Item>
            </div>

            <div className={css.inline_fields + " " + css.three_inline_fields}>
               <Form.Item
                  name="age"
                  rules={[
                     {
                        required: true,
                        message: "Please input your Age!",
                     },
                  ]}
               >
                  <InputNumber placeholder="Age" min={5} max={100} />
               </Form.Item>
               <Form.Item
                  name="email"
                  rules={[
                     {
                        required: true,
                        message: "Please input your Email!",
                     },
                     {
                        type: "email",
                     },
                  ]}
               >
                  <Input placeholder="Email" />
               </Form.Item>
               <Form.Item
                  name="phonenumber"
                  rules={[
                     {
                        required: true,
                        message: "Please input your Phone Number!",
                     },
                     {
                        pattern: phoneNumberRegex,
                        message: "Please enter a valid email address!",
                     },
                  ]}
               >
                  <Input placeholder="Phone Number" />
               </Form.Item>
            </div>

            <Form.Item
               name="zipcode"
               rules={[
                  {
                     required: true,
                     message: "Please input your Zip Code",
                  },
               ]}
            >
               <Input placeholder="Zip Code" />
            </Form.Item>

            <Form.Item
               rules={[
                  {
                     required: true,
                     message: "Please input your Address!",
                  },
               ]}
               name="address1"
            >
               <Input placeholder="Address Line 1" />
            </Form.Item>

            <Form.Item name="address2">
               <Input placeholder="Address Line 2" />
            </Form.Item>
            <div className={css.inline_fields + " " + css.three_inline_fields}>
               <Form.Item
                  name="country"
                  rules={[
                     {
                        required: true,
                        message: "Please input your Country",
                     },
                  ]}
               >
                  <Select
                     style={{
                        width: 150,
                     }}
                     options={country}
                     onChange={setStates}
                     placeholder="Select Country"
                  />
               </Form.Item>
               <Form.Item
                  name="state"
                  rules={[
                     {
                        required: true,
                        message: "Please input your State",
                     },
                  ]}
               >
                  <Select
                     style={{
                        width: 150,
                     }}
                     options={states}
                     onChange={setCity}
                     placeholder="Select State"
                  />
               </Form.Item>
               <Form.Item
                  name="city"
                  rules={[
                     {
                        required: true,
                        message: "Please input your City",
                     },
                  ]}
               >
                  <Select
                     style={{
                        width: 150,
                     }}
                     options={city}
                     placeholder="Select City"
                  />
               </Form.Item>
            </div>
            <Form.Item
               name="password"
               rules={[
                  {
                     required: true,
                     message: "Please input your password!",
                  },
                  {
                     pattern: passwordRegex,
                     message: "Enter Password as per instruction",
                  },
               ]}
               help="Your Password must contains 8 latters having at-least one capital latter, one special character and one digit !"
            >
               <Input.Password placeholder="Password" />
            </Form.Item>
            <div className={css.buttons}>
               {isLoading ? onLoading() : onStatic()}
               <Button htmlType="reset" onClick={onStatic}>Reset</Button>
            </div>
         </Form>
      </div>
   );
}
