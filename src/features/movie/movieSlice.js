import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  trending: null,
  newDisney: null,
  original: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.trending = action.payload.trending;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommended = (state) => state.movies.recommended;
export const selectRrending = (state) => state.movies.trending;
export const selectOriginal = (state) => state.movies.original;
export const selectNewDisney = (state) => state.movies.newDisney;

export default movieSlice.reducer;
