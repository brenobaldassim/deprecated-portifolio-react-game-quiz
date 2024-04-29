import { createSlice } from "@reduxjs/toolkit";
import { getAllGames } from "../endpoints/games_endpoints";
import { convertObjectToArray } from "../../utils/utils";
import { promiseStatus } from "../constants/constants";

const initialState = {
  gameItems: [],
  status: promiseStatus.idle,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllGames.pending, (state) => {
      state.status = promiseStatus.loading;
    });

    builder.addCase(getAllGames.fulfilled, (state, action) => {
      let gameObject = action.payload;
      state.gameItems = convertObjectToArray(gameObject.results);
      state.status = promiseStatus.fulfilled;
    });

    builder.addCase(getAllGames.rejected, (state) => {
      state.status = promiseStatus.rejected;
    });
  },
  reducers: {},
});

export default gameSlice.reducer;
