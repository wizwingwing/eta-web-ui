import { useEffect } from "react"
import Login from "./Component/Page/Login"
import Register from "./Component/Page/Register"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import Home from "./Component/Page/home";

function App() {

  const [isLogin, setLogin] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
