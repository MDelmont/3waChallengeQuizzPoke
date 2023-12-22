import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Users",
  initialState: [
    {
      name: "Name",
      token: "Token",
    },
  ],
  reducers: {
    auth: {
      reducer: (state, action) => {
        state.value += action.payload;
      },
      prepare: (newValue) => ({ payload: newValue }),
    },
    register: {
      reducer: (state, action) => {
        state.value -= action.payload;
      },
      prepare: (newValue) => ({ payload: newValue }),
    },
  },
});

export const { auth, register } = counterSlice.actions;
export default counterSlice.reducer;
