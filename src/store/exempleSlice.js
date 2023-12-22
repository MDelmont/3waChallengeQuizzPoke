import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (nb) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return nb;
  }
);
export const decrementAsync = createAsyncThunk(
  "counter/decrementAsync",
  async (nb) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return nb;
  }
);
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    loading: false,
  },
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
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.value += action.payload;
    });
    builder.addCase(incrementAsync.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(decrementAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(decrementAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.value -= action.payload;
    });
    builder.addCase(decrementAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
