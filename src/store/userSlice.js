import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoggedIn: false,
  userData: {},

};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userData["authenticationCode"] = action.payload;
    },

  
    register: (state, action) => {
      state.userData["userName"] = action.payload;
    },

  
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },


  },
});


export const { loginSuccess, logout } = userSlice.actions;


export default userSlice.reducer;
