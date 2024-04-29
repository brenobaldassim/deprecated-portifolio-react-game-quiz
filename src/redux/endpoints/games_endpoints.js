import axios from "../../api/axios_api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllGames = createAsyncThunk("games/fetch", async (page = 1) => {
  const { data } = await axios({
    method: "GET",
    url: `/games`,
    params: {
      page: page,
    },
  });
  return data;
});
