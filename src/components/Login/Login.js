import axios from "axios";
import React, { useState } from "react";
import { optGetHandler } from "../../server/api";
import OtpPage from "./OtpPage";

const LoginPage = () => {
  const [phonenumber, setPhoneNumber] = useState();
 const [optpage,setOtpPage]  = useState(false)
 const[enterphoneNumber,setEnteredPhoneNumber] = useState('')

  const loginSubmit = (e) => {
    console.log("sssss");
    e.preventDefault();
    axios
      .post(
        `https://stage-services.truemeds.in/CustomerService/sendOtp?mobileNo=${phonenumber}`,
        {
          phonenumber: phonenumber,
        },
        {
          headers: {
            transactionId: "react_interview",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setOtpPage(true)
        setEnteredPhoneNumber(phonenumber)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
    <React.Fragment>
      <div className="wrapper">
       
       {!optpage ?
       (<><h1 className="main-heading">Sign in</h1>
        <p className="sub-text">Sign in using your mobile number.</p>

        <div className="form-wrapper">
          <form id="loginForm" onSubmit={loginSubmit}>
            <div className="input-field">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                pattern="[6789][0-9]{9}"
                autoComplete="false"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                title="Phone number with 6-9 and remaing 9 digit with 0-9"
              />
            </div>
            <button className="main-button" type="submit" id="sign-in-button">
              Sign in
            </button>
          </form>
        </div> </> ) : <OtpPage phonenumber={phonenumber} /> }
        {/* <OtpPage /> */}
        {/* {optpage && <OtpPage phonenumber={phonenumber} />} */}
        {/* {!viewOtpForm ? (
          <div className="form-wrapper">
            <form id="loginForm" onSubmit={loginSubmit}>
              <div className="input-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  pattern="[6789][0-9]{9}"
                  autoComplete="false"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  title="Phone number with 6-9 and remaing 9 digit with 0-9"
                />
              </div>
              <button className="main-button" type="submit" id="sign-in-button">
                Sign in
              </button>
            </form>
          </div>
        ) : 
        (
          <div className="form-wrapper" >
            <form id="otpForm">
              <div className="input-field">
                <label>Enter OTP</label>
                <input
                  type="text"
                  pattern="[0-9]+"
                  placeholder="One time password"
                  name="otp_value"
                  maxLength="4"
                  minLength="4"
                  autoComplete="false"
                  title="please enter only 4 digits"
                />
              </div>
              <button className="main-button" type="submit">
                Verify OTP
              </button>
            </form>
          </div>
        )
        } */}
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
