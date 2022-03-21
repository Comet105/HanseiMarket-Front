// import Cookies from "universal-cookie";
import cookie from "react-cookies";

// const Cookie = () => {
//   const cookies = new Cookies();

//   cookies.set("cookie", "dmddo", {
//     path: "/",
//     expires: Math.floor(Date.now() / 1000) + 60 * 60,
//   });
// };

// export default Cookie;

const Cookie = () => {
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 60);
  cookie.save("accessToken", "value", {
    path: "/",
    expires,
    secure: true,
    httpOnly: true,
  });
  setTimeout(function () {
    alert(cookie.load("accessToken"));
  }, 1000);
};

export default Cookie;
