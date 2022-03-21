import React from "react";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes/Routes";

function App() {
  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
