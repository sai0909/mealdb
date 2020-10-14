import axios from "axios";
import router from "@/router";

const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
  timeout: 10000, // indicates 10000ms
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

// request interceptor
api.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    let path = "/error";
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          //do something
          break;
        case 401:
          alert("session expired");
          break;
        case 404:
          alert("page not exist");
          router.push(path);
          break;
      }
      return Promise.reject(error.response);
    }
  }
);

export default api;
