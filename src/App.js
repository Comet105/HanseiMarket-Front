import React from "react";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes/Routes";

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
