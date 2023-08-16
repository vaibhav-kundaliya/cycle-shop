import { React, useState, useRef } from "react";
import { Modal, Tabs } from "antd";
import SignInForm from "../components/authenticationComponents/SignInForm";
import SignUpForm from "../components/authenticationComponents/SignUpForm";


export default function Authentication({ isModalOpen, setIsModalOpen }) {

   const items = [
      {
         key: "1",
         label: `Sign In`,
         children: <SignInForm />,
      },
      {
         key: "2",
         label: `Sign Up`,
         children: <SignUpForm />,
      },
   ];

   const [okButtonText, setOkButtonText] = useState("Sign In");

   const onChange = (key) => {
      setOkButtonText(items[key - 1].label);
   };

   const handleOk = () => {
      // setIsModalOpen(false);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
   };

   return (
      <>
         <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} cancelText="RESET" okText={okButtonText.toUpperCase()}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
         </Modal>
      </>
   );
}
