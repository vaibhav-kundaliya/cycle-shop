import { React } from "react";
import { Button, Form, Input, message } from "antd";
import css from "./design/SignUpForm.module.css";
import { useGlobalContext } from "../../context";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
const singInAPI = "http://localhost:8001/login";

export default function SignInForm({ signInRef, setIsModalOpen }) {
   const [messageApi, contextHolder] = message.useMessage();

   const userLogIn = async (req_body) => {
      axios
         .post(singInAPI, req_body, { headers: { "Content-Type": "application/json" }, timeout: 5000, responseType: 'json', withCredentials: true })
         .then((response) => {
            sessionStorage.setItem("user", response.data.data.email);
            messageApi.open({
               content: `Hello ${response.data.data.firstName}, Welcome back to our store`,
               type: "success",
            });
            setIsModalOpen(false)
            window.location.reload();
         })
         .catch((error) => {
            if (error.response) {
               messageApi.open({
                  content: error.response.data.message,
                  type: "error"
               })
            } else {
               messageApi.open({
                  content: error.message,
                  type: "error",
               });
            }
         });
   };

   const onFinish = (values) => {
      const req_body = JSON.stringify({
         email: values.email,
         password: values.password,
      });
      userLogIn(req_body);
   };
   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };

   return (
      <div>
         {contextHolder}
         <Form
            ref={signInRef}
            style={{
               height: "fit-content",
            }}
            name="signin"
            initialValues={{
               remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
         >
            <Form.Item
               name="email"
               rules={[
                  {
                     required: true,
                     message: "Please input your email!",
                  },
               ]}
            >
               <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
               name="password"
               rules={[
                  {
                     required: true,
                     message: "Please input your password!",
                  },
               ]}
            >
               <Input.Password placeholder="Password" />
            </Form.Item>
            <div className={css.buttons}>
               <Button type="primary" htmlType="submit">
                  Sign In
               </Button>
               <Button htmlType="button">Reset</Button>
            </div>
         </Form>
      </div>
   );
}
