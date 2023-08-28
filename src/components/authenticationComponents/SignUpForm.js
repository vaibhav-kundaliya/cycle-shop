import { React } from "react";
import { Form, Input, Button, Select, message } from "antd";
import css from "./design/SignUpForm.module.css";
import postRequest from "../../API/postRequest";
import { getAllCountries, getAllStates, getAllCities } from "../../actions/fetchCountryActions";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


export default function SignUpForm({ setActiveTab }) {
   const phoneNumberRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
   const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
   const zipcodeRegex = /\d{5}/;
   const [messageApi, contextHolder] = message.useMessage();
   const [form] = Form.useForm();
   const dispatch = useDispatch()

   const countryList = useSelector((state)=>{
      return state.countryReducer.countries
   })

   const stateList = useSelector((state)=>{
      return state.countryReducer.states
   })

   const cityList = useSelector((state)=>{
      return state.countryReducer.cities
   })
   
   useEffect(()=>{
      dispatch(getAllCountries())
   }, [])

   const onClickCountry = (target) => {
      dispatch(getAllStates(target))
   }

   const onClickState = (target) => {
      dispatch(getAllCities(target))
   }

   const userSignUp = async (req_body) => {
      try {
         const responseData = await postRequest(process.env.REACT_APP_CONSUMER_URL + "signup", req_body);
         sessionStorage.setItem("user", responseData.data.data.email);
         messageApi.open({
            type: "success",
            content: `Welcome ${responseData.data.data.firstName}, Please Sign In :)`,
         });

         setActiveTab("1");
         form.resetFields();
      } catch (error) {
         if (error.message === "Network Error")
            messageApi.open({
               type: "error",
               content: "Server not respond, try after sometime :(",
            });
         else {
            messageApi.open({
               type: "error",
               content: error.data.message,
            });
            console.error(error);
         }
      }
   };

   const country = [], states = [], city = []
   
   const onFinish = (values) => {
      const req_body = {
         firstName: values.firstname,
         lastName: values.lastname,
         email: values.email,
         password: values.password,
         confirmPassword: values.password,
         phoneNumber: values.phonenumber,
         address: {
            address1: values.address,
            pincode: values.pincode,
            city: values.city,
            state: values.state,
            country: values.country,
         },
      };
      userSignUp(req_body);
   };
   

   const prefixSelector = (
      <Form.Item name="prefix" noStyle>
         <Select style={{ width: 70 }}>
            <Select.Option value="86">+86</Select.Option>
            <Select.Option value="87">+87</Select.Option>
         </Select>
      </Form.Item>
   );
   return (
      <div>
         {contextHolder}
         <Form form={form} name="signup" onFinish={onFinish} autoComplete="off">
            <div>
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
                        type: "email",
                        message: "Please Enter Email!",
                     },
                  ]}
               >
                  <Input placeholder="Email" />
               </Form.Item>
            </div>
            <Form.Item
               name="phone"
               rules={[
                  {
                     required: true,
                     message: "Please input your phone number!",
                  },
                  {
                     pattern: phoneNumberRegex,
                     message: "Input valid phone number !",
                  },
               ]}
            >
               <Input placeholder="Phone Number" addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
               rules={[
                  {
                     required: true,
                     message: "Please input your Address!",
                  },
               ]}
               name="address"
            >
               <Input placeholder="Address" />
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

            <div className={css.inline_fields + " " + css.three_inline_fields}>
               <Form.Item
                  name="country"
                  rules={[
                     {
                        required: true,
                        message: "Please select country",
                     },
                  ]}
                  onChange={onClickCountry}
               >
                  <Select options={[...countryList, { label: "None", value: "none" }]} placeholder="Select Country" />
               </Form.Item>
               <Form.Item
                  name="state"
                  rules={[
                     {
                        required: true,
                        message: "Please input your State",
                     },
                  ]}
                  onChange={onClickState}
               >
                  <Select options={[...stateList, { label: "None", value: "none" }]} placeholder="Select State" />
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
                  <Select options={[...cityList, { label: "None", value: "none" }]} placeholder="Select City" />
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
