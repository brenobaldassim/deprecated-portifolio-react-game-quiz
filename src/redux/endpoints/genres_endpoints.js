import axios from "../../api/axios_api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllGenres = createAsyncThunk(
  "genres/fetch",
  async (page = 1) => {
    const { data } = await axios({
      method: "GET",
      url: `/genres`,
      params: {
        page: page,
      },
    });
    return data;
  },
);

export const getGenreById = createAsyncThunk(
  "genres/single/fetch",
  async (id = NaN) => {
    const { data } = await axios({
      method: "GET",
      url: `/genres/${id}`,
    });
    return data;
  },
);
