import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  AUTH_USER,
  ALLPRODUCT,
  ADDPRODUCT,
  GETPRODUCT,
  GETIMAGE,
  GETSEARCH,
} from "./types";
import { request } from "../../utils/axios";

export const register = (dataToSubmit) => {
  const data = request("post", "/auth/signup", dataToSubmit, {
    withCredentials: true,
  });
  return {
    type: REGISTER_USER,
    payload: data,
  };
};

export const login = (dataToSubmit) => {
  const data = request("post", "/auth/signin", dataToSubmit, {
    withCredentials: true,
  });
  return {
    type: LOGIN_USER,
    payload: data,
  };
};

export const addproduct = (dataToSubmit) => {
  const data = request("post", "/product", dataToSubmit, {
    withCredentials: true,
  });
  return {
    type: ADDPRODUCT,
    payload: data,
  };
};

export const logout = () => {
  const data = request("post", "/auth/logout", {
    withCredentials: true,
  });
  return {
    type: LOGOUT_USER,
    payload: data,
  };
};

export const getimage = (formData) => {
  const data = request("post", "/image", formData, {
    withCredentials: true,
  });
  return {
    type: GETIMAGE,
    payload: data,
  };
};

export const auth = () => {
  const data = request("get", "/auth/auth", {
    withCredentials: true,
  });
  return {
    type: AUTH_USER,
    payload: data,
  };
};

export const product = () => {
  const data = request("get", "/product/all", {
    withCredentials: true,
  });
  console.log(data);
  return {
    type: ALLPRODUCT,
    payload: data,
  };
};

export const getProductId = (id) => {
  const data = request("get", `/product/${id}`, {
    withCredentials: true,
  });
  return {
    type: GETPRODUCT,
    payload: data,
  };
};

export const getsearch = (value) => {
  const data = request("get", `/product/search/${value}`, {
    withCredentials: true,
  });
  console.log(value);
  return {
    type: GETSEARCH,
    payload: data,
  };
};
