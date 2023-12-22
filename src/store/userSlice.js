import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Users",
  initialState: {},
  reducers: {
    increment: {
      reducer: (state, action) => {
        state.value += action.payload;
      },
      prepare: (newValue) => ({ payload: newValue }),
    },
    decrement: {
      reducer: (state, action) => {
        state.value -= action.payload;
      },
      prepare: (newValue) => ({ payload: newValue }),
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
