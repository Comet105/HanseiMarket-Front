import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import RodingPage from "../pages/RodingPage/RodingPage";
import MainPage from "../pages/MainPage/MainPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import Auth from "../hoc/Auth";
import AddDetailPage from "../pages/DetailPage/AddDetailPage/AddDetailPage";

const AppRouter = () => {
  const AuthMainPage = Auth(MainPage, null);
  const AuthRodingPage = Auth(RodingPage, null);
  const AuthLoginPage = Auth(LoginPage, true);
  const AuthRegisterPage = Auth(RegisterPage, true);
  const AuthDetailPage = Auth(DetailPage, true);
  const AuthAddDetailPage = Auth(AddDetailPage, true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthMainPage />} />
        <Route path="/list" element={<AuthRodingPage />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
        <Route path="/detail" element={<AuthDetailPage />} />
        <Route path="/addDetail" element={<AuthAddDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
