import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "8854edabc26a6de3b458ee743aaed15b",
    language: "ko-KR"
  }
});

export default instance;