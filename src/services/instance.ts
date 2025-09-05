import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL,
  headers: {
    // "x-cg-demo-api-key": "CG-CbRBeNSpdBAe5cVZ4rfRRsc",
  },
});

export default instance;
