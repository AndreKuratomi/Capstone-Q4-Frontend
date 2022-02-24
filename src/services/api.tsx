import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzie-doc.herokuapp.com/",
});

export default api;
