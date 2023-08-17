import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
});

export default store;
