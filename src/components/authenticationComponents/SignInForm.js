import { React } from "react";
import { Button, Form, Input, message, Checkbox } from "antd";
import postRequest from "../../API/postRequest";
import css from "./design/SignInForm.module.css"
import { LockOutlined, MailOutlined } from '@ant-design/icons';

export default function SignInForm({ signInRef, setIsModalOpen }) {
   const [messageApi, contextHolder] = message.useMessage();

   const userLogIn = async (req_body) => {
      try {
         const responseData = await postRequest(process.env.REACT_APP_CONSUMER_URL + "login", req_body);
         sessionStorage.setItem("user", responseData.data.data.email);
         setIsModalOpen(false);
         messageApi.open({
            type: "success",
            content: `Welcome ${responseData.data.data.firstName}, :)`,
         });
      } catch (error) {
         if (error.message === "Network Error")
            messageApi.open({
               type: "error",
               content: "Server not respond, try after sometime :(",
            });
         else {
            if (error.status === 403) {
               messageApi.open({
                  type: "error",
                  content: error.data.message,
               });
            } else {
               messageApi.open({
                  type: "error",
                  content: "Some error occured :(",
               });
               console.error(error);
            }
         }
      }
   };

   const onFinish = (values) => {
      const req_body = {
         email: values.email,
         password: values.password,
      };
      userLogIn(req_body);
   };

   return (
      <div>
         {contextHolder}
         <Form ref={signInRef} name="signin" onFinish={onFinish}>
            <Form.Item name="email" rules={[{ required: true, message: "Please input your Username!" }]}>
               <Input prefix={<MailOutlined className={css.site_form_item_icon} />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
               <Input.Password prefix={<LockOutlined className={css.site_form_item_icon} />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
               <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
               </Form.Item>
               
               <span className={css.login_form_forgot}>
                  Forgot password
               </span>
            </Form.Item>

            <Form.Item>
               <Button type="primary" htmlType="submit" className={css.login_form_button}>
                  Log in
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
}
