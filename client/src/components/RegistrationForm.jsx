/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Form,
  Input,
  DatePicker,
  Button,
  Checkbox,
  message,
  Table,
} from "antd";
import StudentRegistrationFormStyles from "./RegistrationFormStyles.module.css";
import axios from "axios";
import baseUrl from "../baseUrl/baseUrl.js";
import "bootstrap/dist/css/bootstrap.min.css";
const TextArea = Input.TextArea;

const RegistrationForm = () => {
  const [form] = Form.useForm();
  /*------------for input start-------------------------------*/
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [cambrige, setCambrige] = useState("");
  const [elocution, setElocution] = useState("");
  const [general, setGeneral] = useState("");
  const [mothersMobileNumber, setMothersMobileNumber] = useState("");
  const [fathersMobileNumber, setFathersMobileNumber] = useState("");
  const [grade, setGrade] = useState("");
  const [fartherName, setFartherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fartherOccupation, setFartherOccupation] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [fartherEmail, setFartherEmail] = useState("");
  const [motherEmail, setMotherEmail] = useState("");
  const [address, setAddress] = useState("");

  /*------------for submit start-------------------------------*/
  const onFinish = async (values) => {
    console.log("Success:", values);
    console.log(
      grade,
      fartherName,
      motherName,
      fartherOccupation,
      motherOccupation,
      fartherEmail,
      motherEmail
    );

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/create/create-student-details`,
        {
          values: values,
          address: address || "not selected",
          cambrige: cambrige || " not selected",
          elocution: elocution || "not selected",
          general: general || "not selected",
          fathersMobileNumber: fathersMobileNumber || "not selected",
          mothersMobileNumber: mothersMobileNumber || "not selected",
          grade: grade,
          fartherName: fartherName || "not selected",
          motherName:motherName || "not selected",
          fartherOccupation: fartherOccupation || "not selected",
          motherOccupation: motherOccupation || "not selected",
          fartherEmail: fartherEmail || "not selected",
          motherEmail: motherEmail || "not selected",
          
        }
      );

      console.log(response.data);

    if(response.data.success){
       message.success(response.data.message)
      //  window.location.reload();
    }

    } catch (error) {
      message.error("Error creating student details:", error.message);
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

  const dataSource = [
    { key: "1", title: "Name" },
    { key: "2", title: "Occupation" },
    { key: "3", title: "Contact Number" },
    { key: "4", title: "Email" },
  ];

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
          form={form}
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
                  onChange={(e) => setAddress(e.target.value)}
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
                  form={form}
                />
              </div>
            </Form.Item>
          </div>
          <div className={StudentRegistrationFormStyles.DatePick}>
            <label className={StudentRegistrationFormStyles.SpecialDatePickerLabel}>
              Date of Birth :
            </label>
            <Form.Item
              noStyle
              name="birthDay"
              rules={[
                {
                  required: true,
                  message: "Please input your date of birth",
                },
              ]}
            >
              <DatePicker
                className={StudentRegistrationFormStyles.SpecialDatePicker}
                style={{
                  border: "1px solid #73d13d",
                  outline: "none",
                }}
                placeholder="Enter your birthday"
              />
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
            <Form.Item name="grade">
              <div className={StudentRegistrationFormStyles.formItem}>
                <label
                  name="grade"
                  className={StudentRegistrationFormStyles.formLabel}
                >
                  Grade :
                </label>
                <Input
                  className={StudentRegistrationFormStyles.formInput}
                  type="text"
                  name="grade"
                  id="grade"
                  placeholder="Enter your grade"
                  allowClear
                  onChange={(e) => setGrade(e.target.value) || "not selected"}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    let num = parseInt(e.target.value, 10);
                    if (num < 1) {
                      e.target.value = 1;
                    } else if (num > 13) {
                      e.target.value = 13;
                    }
                  }}
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
                  <Checkbox
                    className="myCheckbox"
                    value="Cambridge Assessment"
                    onChange={(e) => setCambrige(e.target.value)}
                  >
                    Cambridge Assessment
                  </Checkbox>
                  <Checkbox
                    className="myCheckbox"
                    value="Elocution Exams"
                    onChange={(e) => setElocution(e.target.value)}
                  >
                    Elocution Exams
                  </Checkbox>
                  <Checkbox
                    className="myCheckbox"
                    value="General English"
                    onChange={(e) => setGeneral(e.target.value)}
                  >
                    General English
                  </Checkbox>
                </Checkbox.Group>
              </div>
            </Form.Item>
          </div>
          <div
            className={`${StudentRegistrationFormStyles.formElement} ${StudentRegistrationFormStyles.ParentDetails}`}
          >
            <label
              name="parentDetails"
              className={StudentRegistrationFormStyles.formLabel}
              style={{ marginBottom: "10px" }}
            >
              Enter Parent Details:
            </label>
            <table
              style={{
                boxShadow: "0 0 6px rgba(0,0,0,0.2)",
                width: "100%",
                height: "300px",
                border: "1px solid rgba(115, 209, 61, 0.2)",
              }}
              className="table"
            >
              <thead>
                <tr>
                  <th
                    className={StudentRegistrationFormStyles.tableHeader}
                    scope="col"
                    style={{ width: "20%" }}
                  ></th>
                  <th
                    className={StudentRegistrationFormStyles.tableHeader}
                    scope="col"
                    style={{ width: "40%" }}
                  >
                    Father
                  </th>
                  <th
                    className={StudentRegistrationFormStyles.tableHeader}
                    scope="col"
                    style={{ width: "40%" }}
                  >
                    Mother
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    className={StudentRegistrationFormStyles.titles}
                    scope="row"
                  >
                    Name
                  </th>
                  <td className={StudentRegistrationFormStyles.tableCell}>
                    <Form.Item>
                      <Input
                        name="FathersName"
                        className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                        placeholder="Enter father's name"
                        allowClear
                        onChange={(e)=>setFartherName(e.target.value)}
                        
                      />
                    </Form.Item>
                  </td>
                  <td className={StudentRegistrationFormStyles.tableCell}>
                    <Form.Item>
                      <Input
                        name="MothersName"
                        placeholder="Enter mother's name"
                        className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                        allowClear
                        onChange={(e)=>setMotherName(e.target.value)}
                        
                      />
                    </Form.Item>
                  </td>
                </tr>
                <tr>
                  <th
                    className={StudentRegistrationFormStyles.titles}
                    scope="row"
                  >
                    Occupation
                  </th>
                  <td className={StudentRegistrationFormStyles.tableCell}>
                    <Form.Item>
                      <Input
                        name="FathersOccupation"
                        placeholder="Enter father's occupation"
                        className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                        allowClear
                        onChange={(e)=>setFartherOccupation(e.target.value)}
                        
                      />
                    </Form.Item>
                  </td>
                  <td className={StudentRegistrationFormStyles.tableCell}>
                    <Form.Item>
                      <Input
                        name="MothersOccupation"
                        placeholder="Enter mother's occupation"
                        className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                        allowClear
                        onChange={(e)=>setMotherOccupation(e.target.value)}
                      />
                    </Form.Item>
                  </td>
                </tr>
                <tr className={StudentRegistrationFormStyles.tableROw}>
                  <th
                    className={StudentRegistrationFormStyles.titles}
                    scope="row"
                  >
                    Contact Number
                  </th>
                  <td className={StudentRegistrationFormStyles.tableCell}>
                    <Form.Item>
                      <Input
                        name="FathersContactNumber"
                        placeholder="Enter father's contact number"
                        className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                        allowClear
                        value={fathersMobileNumber}
                        onChange={(e) =>
                          handleInputChange(setFathersMobileNumber, e)
                        }
                      />
                    </Form.Item>
                  </td>
                  <td className={StudentRegistrationFormStyles.tableCell}>
                    <Form.Item>
                      <Input
                        name="MothersContactNumber"
                        placeholder="Enter mother's contact number"
                        className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                        allowClear
                        value={mothersMobileNumber}
                        onChange={(e) =>
                          handleInputChange(setMothersMobileNumber, e)
                        }
                      />
                    </Form.Item>
                  </td>
                </tr>
                <tr>
                  <th
                    className={StudentRegistrationFormStyles.titles}
                    scope="row"
                  >
                    Email
                  </th>
                  <td className={StudentRegistrationFormStyles.tableCell}>
                    <Form.Item>
                      <Input
                        type="email"
                        name="FathersEmail"
                        placeholder="Enter father's email"
                        className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                        allowClear
                        onChange={(e)=>setFartherEmail(e.target.value)}
                      />
                    </Form.Item>
                  </td>
                  <td className={StudentRegistrationFormStyles.tableCell}>
                    <Form.Item>
                      <Input
                        type="email"
                        name="MothersEmail"
                        placeholder="Enter mother's email"
                        className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                        allowClear
                        onChange={(e)=>setMotherEmail(e.target.value)}
                      />
                    </Form.Item>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={StudentRegistrationFormStyles.MobileParentDetails}>
            <lable
              className={StudentRegistrationFormStyles.MobileParentDetailsTitle}
            >
              Enter Parent Details
            </lable>
            <br />
            <label
              className={
                StudentRegistrationFormStyles.MobileParentDetailsParentType
              }
            >
              Details of Father
            </label>
            <div className={StudentRegistrationFormStyles.formElement}>
              <lable className={StudentRegistrationFormStyles.formLabel}>
                Name
              </lable>
              <Form.Item>
                <Input
                  name="FathersName"
                  placeholder="Enter father's name"
                  className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                  allowClear
                  onChange={(e)=>setFartherName(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className={StudentRegistrationFormStyles.formElement}>
              <lable className={StudentRegistrationFormStyles.formLabel}>
                Occupation
              </lable>
              <Form.Item>
                <Input
                  name="FathersOccupation"
                  placeholder="Enter father's occupation"
                  className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                  allowClear
                  onChange={(e)=>setMotherOccupation(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className={StudentRegistrationFormStyles.formElement}>
              <lable className={StudentRegistrationFormStyles.formLabel}>
                Contact Number
              </lable>
              <Form.Item>
                <Input
                  name="FathersContactNumber"
                  placeholder="Enter father's contact number"
                  className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                  allowClear
                  value={fathersMobileNumber}
                  onChange={(e) => handleInputChange(setFathersMobileNumber, e)}
                />
              </Form.Item>
            </div>
            <div className={StudentRegistrationFormStyles.formElement}>
              <lable className={StudentRegistrationFormStyles.formLabel}>
                Email
              </lable>
              <Form.Item>
                <Input
                  type="email"
                  name="FathersEmail"
                  placeholder="Enter father's email"
                  className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                  allowClear
                  onChange={(e)=>setFartherEmail(e.target.value)}
                />
              </Form.Item>
            </div>
            <label
              className={
                StudentRegistrationFormStyles.MobileParentDetailsParentType
              }
            >
              Details of Mother
            </label>
            <div className={StudentRegistrationFormStyles.formElement}>
              <lable className={StudentRegistrationFormStyles.formLabel}>
                Name
              </lable>
              <Form.Item>
                <Input
                  name="MothersName"
                  placeholder="Enter mother's name"
                  className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                  allowClear
                  onChange={(e)=>setMotherName(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className={StudentRegistrationFormStyles.formElement}>
              <lable className={StudentRegistrationFormStyles.formLabel}>
                Occupation
              </lable>
              <Form.Item>
                <Input
                  name="MothersOccupation"
                  placeholder="Enter mother's occupation"
                  className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                  allowClear
                  onChange={(e)=>setMotherOccupation(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className={StudentRegistrationFormStyles.formElement}>
              <lable className={StudentRegistrationFormStyles.formLabel}>
                Contact Number
              </lable>
              <Form.Item>
                <Input
                  name="MothersContactNumber"
                  placeholder="Enter mother's contact number"
                  className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                  allowClear
                  value={mothersMobileNumber}
                  onChange={(e) => handleInputChange(setMothersMobileNumber, e)}
                />
              </Form.Item>
            </div>
            <div className={StudentRegistrationFormStyles.formElement}>
              <lable className={StudentRegistrationFormStyles.formLabel}>
                Email
              </lable>
              <Form.Item>
                <Input
                  type="email"
                  name="MothersEmail"
                  placeholder="Enter mother's email"
                  className={`${StudentRegistrationFormStyles.formInputTable} ${StudentRegistrationFormStyles.inputSpecial}`}
                  allowClear
                  onChange={(e)=>setMotherEmail(e.target.value)}
                />
              </Form.Item>
            </div>
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
