/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Input, DatePicker, Button, Checkbox, message } from "antd";
import StudentRegistrationFormStyles from "./RegistrationFormStyles.module.css";
import axios from 'axios';
import baseUrl from "../baseUrl/baseUrl.js";

const TextArea = Input.TextArea;

const RegistrationForm = () => {
   
  /*------------for input start-------------------------------*/
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [cambrige , setCambrige] = useState("")
  const [elocution , setElocution] = useState("")
  const [general , setGeneral] = useState("")


  /*------------for submit start-------------------------------*/
  const onFinish = async(values) => {
    // console.log("Success:", values);
    // console.log(cambrige,elocution,general);

    try {
      const response = await axios.post(`${baseUrl}/api/v1/create/create-student-details`, {values:values , cambrige: cambrige|| " not selected" , elocution:elocution || "not selected" , general:general || "not selected" });
      // console.log(response.data);

      message.success( response.data.message || 'Student details created successfully');

  } catch (error) {
      message.error('Error creating student details:', error.message);
  }



  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  /*------------for submit END-------------------------*/

const handleInputChange = (setFunction, event) => {
  let value = event.target.value;
  if (value === "") {
    setFunction(value);
  } else if (!value.startsWith("0")) {
    value = "0" + value;
  }
  if (/^0\d{0,9}$/.test(value)) {
    setFunction(value);
  }
};

  /*------------for input END-------------------------*/

  return (
    <div>
      <div className={StudentRegistrationFormStyles.PageTitle}>
        G.U. Language Centre
      </div>
      <div className={StudentRegistrationFormStyles.formContainer}>
        <div className={StudentRegistrationFormStyles.formTitle}>
          Student Registration Form
        </div>
        <Form
          className={StudentRegistrationFormStyles.StuForm}
          name="studentRegistrationForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onReset={() => {
            setMobileNumber("");
            setWhatsAppNumber("");
          }}
          layout="vertical"
        >
          <div className={StudentRegistrationFormStyles.formElement}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <div className={StudentRegistrationFormStyles.formItem}>
                <label
                  htmlFor="name"
                  className={StudentRegistrationFormStyles.formLabel}
                >
                  Name in full :
                </label>
                <Input
                  className={StudentRegistrationFormStyles.formInput}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  allowClear
                />
              </div>
            </Form.Item>
          </div>
          <div className={StudentRegistrationFormStyles.formElement}>
            <Form.Item
              name="nameWithInitials"
              rules={[
                {
                  required: true,
                  message: "Please input your name with initials!",
                },
              ]}
            >
              <div className={StudentRegistrationFormStyles.formItem}>
                <label
                  name="nameWithInitials"
                  className={StudentRegistrationFormStyles.formLabel}
                >
                  Name with Initials :
                </label>
                <Input
                  className={StudentRegistrationFormStyles.formInput}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  allowClear
                />
              </div>
            </Form.Item>
          </div>
          <div className={StudentRegistrationFormStyles.formElement}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <div className={StudentRegistrationFormStyles.formItem}>
                <label
                  name="address"
                  className={StudentRegistrationFormStyles.formLabel}
                >
                  Address :
                </label>
                <TextArea
                  className={`${StudentRegistrationFormStyles.formInput} ${StudentRegistrationFormStyles.SpecialAreaFix}`}
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  rows={4}
                  allowClear
                />
              </div>
            </Form.Item>
          </div>
          <div className={StudentRegistrationFormStyles.formElement}>
            <Form.Item
              name="mobileNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your mobile number",
                },
              ]}
            >
              <div className={StudentRegistrationFormStyles.formItem}>
                <label
                  name="mobileNumber"
                  className={StudentRegistrationFormStyles.formLabel}
                >
                  Telephone Number :
                </label>
                <Input
                  className={StudentRegistrationFormStyles.formInput}
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={(e) => handleInputChange(setMobileNumber, e)}
                />
              </div>
            </Form.Item>
          </div>
          <div className={StudentRegistrationFormStyles.formElement}>
            <Form.Item
              name="whatsAppNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your whatsapp number",
                },
              ]}
            >
              <div className={StudentRegistrationFormStyles.formItem}>
                <label
                  name="whatsAppNumber"
                  className={StudentRegistrationFormStyles.formLabel}
                >
                  WhatsApp Number :
                </label>
                <Input
                  className={StudentRegistrationFormStyles.formInput}
                  type="text"
                  name="whatsAppNumber"
                  id="whatsAppNumber"
                  placeholder="Enter your whatsapp number"
                  value={whatsAppNumber}
                  onChange={(e) => handleInputChange(setWhatsAppNumber, e)}
                />
              </div>
            </Form.Item>
          </div>
          <div className={StudentRegistrationFormStyles.formElement}>
            <Form.Item
              name="birthDay"
              rules={[
                {
                  required: true,
                  message: "Please input your date of birth",
                },
              ]}
            >
              <div className={StudentRegistrationFormStyles.formItem}>
                <label
                  name="birthDay"
                  className={StudentRegistrationFormStyles.formLabel}
                >
                  Date of Birth :
                </label>
                <DatePicker
                  className={StudentRegistrationFormStyles.Special}
                  style={{
                    border: "1px solid #73d13d",
                    outline: "none",
                  }}
                  name="birthDay"
                  id="birthDay"
                  placeholder="Enter your birthday"
                />
              </div>
            </Form.Item>
          </div>
          <div className={StudentRegistrationFormStyles.formElement}>
            <Form.Item
              name="school"
              rules={[
                {
                  required: true,
                  message: "Please input your school name",
                },
              ]}
            >
              <div className={StudentRegistrationFormStyles.formItem}>
                <label
                  name="school"
                  className={StudentRegistrationFormStyles.formLabel}
                >
                  School :
                </label>
                <Input
                  className={StudentRegistrationFormStyles.formInput}
                  type="text"
                  name="school"
                  id="school"
                  placeholder="Enter your school name"
                  allowClear
                />
              </div>
            </Form.Item>
          </div>
          <div className={StudentRegistrationFormStyles.formElement}>
            <Form.Item
              name="examination"
              rules={[
                {
                  required: true,
                  message: "Please select your examination",
                },
              ]}
            >
              <div className={StudentRegistrationFormStyles.formItem}>
                <label
                  name="examination"
                  className={StudentRegistrationFormStyles.formLabel}
                >
                  Select examination :
                </label>
                <Checkbox.Group
                  className={`${StudentRegistrationFormStyles.Special} ${StudentRegistrationFormStyles.SpecialAreaFix}`}
                  name="examination"
                  id="examination"
                >
                  <Checkbox className="myCheckbox" value="Cambridge Assessment" onChange={(e)=>setCambrige(e.target.value)}>
                    Cambridge Assessment
                  </Checkbox>
                  <Checkbox className="myCheckbox" value="Elocution Exams" onChange={(e)=>setElocution(e.target.value)}>
                    Elocution Exams
                  </Checkbox>
                  <Checkbox className="myCheckbox" value="General English" onChange={(e)=>setGeneral(e.target.value)}>
                    General English
                  </Checkbox>
                </Checkbox.Group>
              </div>
            </Form.Item>
          </div>
          <div className={StudentRegistrationFormStyles.ButtonGroup}>
            <Button
              className={StudentRegistrationFormStyles.formButton}
              type="primary"
              htmlType="submit"
              ghost
            >
              Submit
            </Button>
            <Button
              className={StudentRegistrationFormStyles.formButton}
              type="primary"
              htmlType="reset"
              ghost
            >
              Clear
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;
