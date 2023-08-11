import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
});

export default store;
