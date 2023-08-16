import { React, useRef } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import css from "./design/SignUpForm.module.css";
import { useGlobalContext } from "../../context";
import { LoadingOutlined } from "@ant-design/icons";
export default function SignInForm({ signInRef }) {
   const { userLogIn, isLoading } = useGlobalContext();
   const onFinish = (values) => {
      const req_body = {
         email: values.email,
         password: values.password,
      };
      userLogIn(req_body);
   };
   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };

   const onloading = () => {
      return <LoadingOutlined />;
   };
   return (
      <div>
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
                  {isLoading?onloading():"Sign In"}
               </Button>
               <Button htmlType="button">Reset</Button>
            </div>
         </Form>
      </div>
   );
}
