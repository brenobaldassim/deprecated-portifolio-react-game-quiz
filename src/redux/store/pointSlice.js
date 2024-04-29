import { createSlice } from "@reduxjs/toolkit";
import { pointStatus } from "../constants/constants";

const initialState = {
  points: 0,
  status: pointStatus.idle,
};

const pointSlice = createSlice({
  name: "point",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
      state.status = pointStatus.pointed;
    },
    STATUS_WAITING: (state) => {
      state.status = pointStatus.waiting;
    },
  },
});

export const { increment, STATUS_WAITING } = pointSlice.actions;

export default pointSlice.reducer;
