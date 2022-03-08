import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect, useReducer, useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import userReducer, { login } from "./redux/userSlice";
import { getStoredData } from "./utils/storage";
import { UserContext } from "./ccontext/userContext";
import "bootstrap/dist/css/bootstrap.min.css";
import EnsureLogin from "./components/Login/EnsureLogin";
import Articles from "./components/Article/Article";
import Header from "./components/Header/Header";
// import  from "./redux";

function App() {
  const [user, userDispatch] = useReducer(userReducer, {});

  useEffect(() => {
    const getUser = async () => {
      try {
        let result = await getStoredData();
        console.log("resss", result);
        userDispatch(login(result));
      } catch (err) {
        console.log("login", err);
      }
    };
    getUser();
  }, []);

  const userInfo = useMemo(() => {
    return {
      user,
      userDispatch,
    };
  }, [user]);

  // const time = new Date();
  // time.setSeconds(time.getSeconds() + 60);
  return (
    <React.Fragment>
      <UserContext.Provider value={userInfo}>
        <Router>
          <EnsureLogin>
            <Header />
          <Routes>
            {/* <Route
              path="/article"
              element={<Articles />} 
            /> */}
             <Route
              path={process.env.PUBLIC_URL + '/article'}
              element={<Articles />} 
            />
          </Routes>
          </EnsureLogin>
        </Router>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
