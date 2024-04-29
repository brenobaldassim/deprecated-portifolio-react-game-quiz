import axios from "axios";
import { RAWGIO_URL, RAWGIO_KEY } from "./api_constants";

export default axios.create({
  baseURL: RAWGIO_URL,
  params: {
    key: RAWGIO_KEY,
  },
});
