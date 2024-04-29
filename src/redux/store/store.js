import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import genreReducer from "./genreSlice";
import pointReducer from "./pointSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    genre: genreReducer,
    point: pointReducer,
  },
});

export default store;
