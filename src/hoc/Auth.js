import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../store/actions/UserAction";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (Component, option, adminRoute = null) {
  const AuthCheck = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log(res);
        // if (!res.payload.authSuccess) {
        //   if (option) {
        //     navigate("/login");
        //   }
        // } else {
        //   navigate("/");
        // }
        // console.log("HOC 테스트");
      });
    }, []);

    return <Component />;
  };

  return AuthCheck;
}
