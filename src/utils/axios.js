import axios from "axios";

const DOMAIN = "https://istpdeveloper.com";

export const request = (method, url, data) => {
  axios.defaults.withCredentials = true;
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
