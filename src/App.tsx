import { useState } from "react";
import Login from "./Component/Page/Login";
import Register from "./Component/Page/Register";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout style
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Component/Layout/Navbar";
import Sidebar from "./Component/Layout/Sidebar";

// main page
import Dashboard from "./Component/Page/Dashboard/Dashboard";
import History from "./Component/Page/History/History";
import ManageBot from "./Component/Page/ManageBot/ManageBot";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const [isLogin, setLogin] = useState<boolean>(true);

  return (
    <BrowserRouter>
      {!isLogin ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar />
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              <Route path="/bot" element={<ManageBot />} />
            </Routes>
          </Box>
        </Box>
      )}
    </BrowserRouter>
  );
}

export default App;
