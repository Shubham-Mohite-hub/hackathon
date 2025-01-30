import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
// import PageNotFound from "./components/PageNotFound";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Authentication/User/Login.jsx";
import Signup from "./components/Authentication/User/Signup.jsx";
import AdminSignup from "./components/Authentication/Admin/AdminSignup.jsx";
import AdminLogin from "./components/Authentication/Admin/AdminLogin.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
