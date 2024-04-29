import { createSlice } from "@reduxjs/toolkit";
import { getAllGenres, getGenreById } from "../endpoints/genres_endpoints";
import { convertObjectToArray } from "../../utils/utils";
import { promiseStatus } from "../constants/constants";

const initialState = {
  genreItems: [],
  status: promiseStatus.idle,
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllGenres.pending, (state) => {
      state.status = promiseStatus.loading;
    });

    builder.addCase(getAllGenres.fulfilled, (state, action) => {
      let genreObject = action.payload;
      state.genreItems = convertObjectToArray(genreObject.results);
      state.status = promiseStatus.fulfilled;
    });

    builder.addCase(getAllGenres.rejected, (state) => {
      state.status = promiseStatus.rejected;
    });

    builder.addCase(getGenreById.pending, (state) => {
      state.status = promiseStatus.loading;
    });

    builder.addCase(getGenreById.fulfilled, (state, action) => {
      let genreObject = action.payload;
      state.genreItems = convertObjectToArray(genreObject.results);
      state.status = promiseStatus.fulfilled;
    });

    builder.addCase(getGenreById.rejected, (state) => {
      state.status = promiseStatus.rejected;
    });
  },
  reducers: {},
});

export default genreSlice.reducer;
