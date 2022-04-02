/* eslint-disable import/no-anonymous-default-export */
import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  AUTH_USER,
  GETPRODUCT,
  GETIMAGE,
  GETSEARCH,
} from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
    case AUTH_USER:
      return { ...state, authSuccess: action.payload };
    case GETPRODUCT:
      return { ...state, getProduct: action.payload };
    case GETIMAGE:
      return { ...state, getimage: action.payload };
    case GETSEARCH:
      return { ...state, getsearch: action.payload };
    default:
      return state;
  }
}
