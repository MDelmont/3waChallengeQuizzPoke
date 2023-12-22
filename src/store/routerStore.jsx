import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
  
  },
});

export const GetProviderStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
