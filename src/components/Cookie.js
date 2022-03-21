import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

// const jwtToken = await signIn(signInPayload);
// if (jwtToken) {
//   setCookie("myToken", token, {
//     path: "/",
//     secure: true,
//     sameSite: "none",
//   });
// }

// await axios({
//   method: "get",
//   url: "api.example.com/auth/currentUser",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${getCookie("myToken")}`,
//   },
// });
