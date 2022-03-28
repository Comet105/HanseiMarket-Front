import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../store/actions/UserAction";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (Component, option) {
  const AuthCheck = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        if (!res.payload) {
          if (option) {
            navigate("/login");
          }
        } else {
          if (option === false) {
            navigate("/");
          }
        }
      });
    }, [dispatch, navigate]);

    return <Component />;
  };

  return AuthCheck;
}
