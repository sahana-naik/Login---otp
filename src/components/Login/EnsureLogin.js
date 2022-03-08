import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserContext } from "../../ccontext/userContext";
import { isLoggedIn, loggedinUser,login } from "../../redux/userSlice";
import LoginPage from "./Login";

const EnsureLogin = (props) => {
  const dispatch = useDispatch();
  const isloggedUser = useSelector(isLoggedIn);
  const { user = {} } = useUserContext();
  // const isloggedUser = "ss";

  useEffect(() => {
    dispatch(login());
  }, [user]);

  console.log("userrr", user?.isLoggedIn)
  console.log("issss", isloggedUser)

  const logged =  user?.isLoggedIn;

  return  (
      // isloggedUser ? <React.Fragment>{props.children}</React.Fragment> : <LoginPage />
      logged == true ? <React.Fragment>{props.children}</React.Fragment> : <LoginPage />
  )
      
};

export default EnsureLogin;
