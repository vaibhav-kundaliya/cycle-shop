import { React, useState } from "react";
import { Form, Input, Button, InputNumber, Select, message } from "antd";
import css from "./design/SignUpForm.module.css";
import { LoadingOutlined } from "@ant-design/icons";
import { useGlobalContext } from "../../context";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import userSignUp_SignIn from "../../API/userSignUp_SignIn";
const singUpAPI = "http://localhost:8001/signup";
const singInAPI = "http://localhost:8001/login";

export default function SignUpForm({ setIsModalOpen, setActiveTab }) {
   const [form] = Form.useForm();
   const { states, country, city, fetchState, fetchCity } = useGlobalContext();
   const [messageApi, contextHolder] = message.useMessage();
   const [isLoading, setLoading] = useState();
   const location = useLocation();

   const userSignUp = async (req_body) => {
      setLoading(true);
      axios
         .post(singUpAPI, req_body, { headers: { "Content-Type": "application/json" }, withCredentials: true })
         .then((response) => {
            messageApi.open({
               content: `Hello ${response.data.data.firstName}, Please Sign In`,
               type: "success",
            });
            console.log("Tab stuck")
            setActiveTab("1")
         })
         .catch((error) => {
            if (error.response) {
               console.error("adada", error.response);
               messageApi.open({
                  content: error.response.data.message,
                  type: "error",
               });
            } else {
               messageApi.open({
                  content: error.message,
                  type: "error",
               });
            }
         });
      setLoading(false);
   };

   const onLoading = () => {
      return (
         <Button type="primary" disabled htmlType="submit">
            <LoadingOutlined />
         </Button>
      );
   };

   const setStates = (element) => {
      if (element !== "none") fetchState(element);
   };

   const setCity = (element) => {
      if (element !== "none") fetchCity(element);
   };

   const phoneNumberRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
   const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
   const zipcodeRegex = /\d{5}/;
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
         {contextHolder}
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
                        message: "Please enter First Name!",
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
                        message: "Please enter Last Name!",
                     },
                  ]}
               >
                  <Input placeholder="Last Name" />
               </Form.Item>
            </div>

            <div>
               <Form.Item
                  name="email"
                  rules={[
                     {
                        required: true,
                        message: "Please Enter Email!",
                     },
                     {
                        type: "email",
                     },
                  ]}
               >
                  <Input placeholder="Email" />
               </Form.Item>
            </div>
               <Form.Item
                  name="phonenumber"
                  rules={[
                     {
                        required: true,
                        message: "Please enter Phone Number!",
                     },
                     {
                        pattern: phoneNumberRegex,
                        message: "Please enter a valid phone number!",
                     },
                  ]}
               >
                  <Input placeholder="Phone Number" />
               </Form.Item>

            <Form.Item
               name="zipcode"
               rules={[
                  {
                     required: true,
                     message: "Please input your Zip Code",
                  },
                  {
                     pattern: zipcodeRegex,
                     message: "Please enter a valid Zip Code!",
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
                        message: "Please select country",
                     },
                  ]}
               >
                  <Select
                     style={{
                        width: 150,
                     }}
                     options={[...country, { label: "None", value: "none" }]}
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
                     options={[...states, { label: "None", value: "none" }]}
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
                     options={[...city, { label: "None", value: "none" }]}
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
               <Button type="primary" htmlType="submit">
                  SIGN UP
               </Button>
               <Button htmlType="reset">Reset</Button>
            </div>
         </Form>
      </div>
   );
}
