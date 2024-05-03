import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import genreReducer from "./genreSlice";
import quizReducer from "./quizSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    genre: genreReducer,
    quiz: quizReducer,
  },
});

export default store;
