import axios from "axios";

// Add a request interceptor which can handle request

axios.interceptors.request.use(
  (req) => {
    let headers = {
      ...req.headers,
      Authorization: `${localStorage.getItem("token")}`,
    };
    if (headers) {
      req.headers = headers;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of  cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range  cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axios;
