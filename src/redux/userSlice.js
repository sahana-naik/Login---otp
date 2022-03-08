import { createSlice } from "@reduxjs/toolkit";
import { getStoredData, get_auth_key } from "../utils/storage";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      let storedData = getStoredData(get_auth_key());
      storedData = storedData && JSON.parse(storedData);
      // storedData = storedData && storedData;
      if (storedData) {
        state.isLoggedIn = true;
        state.user = {
          ...storedData,
        };
        // if(storedData) {
        //     state.isLoggedIn = true;
        //     state.user = {
        //         ...storedData
        //     };
        // }
        // else {
        //     state.isLoggedIn = false;
        //  state.user = null;
        // }
      } else {
        state.isLoggedIn = false;
        state.user = null;
      }
    },
  },
});

export const { login } = userSlice.actions;

export const isLoggedIn = (state) => state.isLoggedIn;

export const loggedinUser = (state) => state.user;

export default userSlice.reducer;
