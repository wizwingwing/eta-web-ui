import Login from "./Component/Page/Login"
import Register from "./Component/Page/Register"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Component/Page/Dashboard/Dashboard";
import Navbar from "./Component/Fragement/Navbar";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
