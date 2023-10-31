import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Update from "./components/Update.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/updateUser/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
