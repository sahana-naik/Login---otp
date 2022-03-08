import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
import { getStoredData, get_auth_key, storeData } from "../../utils/storage";

const OtpPage = ({ phonenumber }) => {
  const [optval, setOpt] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    const loggeddetails = getStoredData(get_auth_key())
    if(loggeddetails) {
      setIsLogin(true)
    }
    dispatch(login())
  },[])

  useEffect(() => {
    if(isLogin) {
      console.log("loggeddd")
      window.location.reload()
      // navigate('/article')
    }
  },[isLogin])

  console.log("sssslogin", isLogin)

  const optSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://stage-services.truemeds.in/CustomerService/verifyOtp?mobileNo=${phonenumber}&otp=${optval}&de
        viceKey=abcd&isIos=false&source=react_interview`,
        {
          otp: optval,
          mobileNo: phonenumber,
          deviceKey: "abcd",
          isIos: false,
          source: "react_interview",
        },
        {
          headers: {
            transactionId: "react_interview",
          },
        }
      )
      .then((res) => {
        console.log(res);
        storeData(get_auth_key(),JSON.stringify({
            data: res?.data.Response
          }))
          setIsLogin(true);
          navigate(process.env.PUBLIC_URL + '/article')
          // navigate('/article')
      })
      .catch((err) => {
        console.log(err);
      });
  };


//   console.log("ss",getStoredData(get_auth_key()))
  return (
    <React.Fragment>
      <div className="form-wrapper">
        <form id="otpForm" onSubmit={optSubmitHandler}>
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
              value={optval}
              onChange={(e) => setOpt(e.target.value)}
              title="please enter only 4 digits"
            />
          </div>
          <button className="main-button" type="submit">
            Verify OTP
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default OtpPage;
