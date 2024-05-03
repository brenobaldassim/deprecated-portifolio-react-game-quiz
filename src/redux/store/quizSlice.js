import { createSlice } from "@reduxjs/toolkit";
import { pointStatus } from "../constants/constants";

const initialState = {
  points: 0,
  status: pointStatus.idle,
  loader: {
    progress: 0,
    isRunning: false,
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    INCREMENT_POINTS: (state) => {
      state.points += 1;
      state.status = pointStatus.pointed;
    },
    STATUS_WAITING: (state) => {
      state.status = pointStatus.waiting;
    },
    INCREMENT_LOADER: (state) => {
      state.loader.progress += 1;
    },
    RUN_LOADER: (state) => {
      state.loader.isRunning = true;
    },
    STOP_LOADER: (state) => {
      state.loader.isRunning = false;
      state.loader.progress = 0;
    },
  },
});

export const {
  INCREMENT_POINTS,
  STATUS_WAITING,
  INCREMENT_LOADER,
  RUN_LOADER,
  STOP_LOADER,
} = quizSlice.actions;

export default quizSlice.reducer;
