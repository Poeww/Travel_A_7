import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
<<<<<<< HEAD
import Login from "./pages/login";
import Register from "./pages/Register";
=======
import Register from "./pages/register.jsx";
>>>>>>> f7fbd116a4c698787bc06ef63fe81988b5a69a96

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path="/home" element={<Login />} />
=======
>>>>>>> f7fbd116a4c698787bc06ef63fe81988b5a69a96
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);