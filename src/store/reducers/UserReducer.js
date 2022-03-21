import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actions/types";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
    default:
      return state;
  }
}