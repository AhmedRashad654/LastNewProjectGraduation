import axios from "axios";
export const request = axios.create({
  baseURL: "http://localhost:3000",
});

export const url = "http://localhost:3000";
export const urlLocal = "http://localhost:3000"