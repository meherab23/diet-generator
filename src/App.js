import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from "./layout/pages/landing";
import Home from "./layout/pages/home";
import RootLayouts from "./layout/pages/RootLayout";
import Profile from "./layout/pages/profile";
import Edit from "./layout/pages/editprofile";
import Login from "./layout/pages/login";
import Diet from "./layout/pages/dietplan";
import Dashboard from "./layout/pages/dashboard";
import Register from "./layout/pages/register";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      
      <Route path="/" element={<Landing />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route path="/" element={<RootLayouts />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/diet" element={<Diet />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/editprofile" element={<Edit />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("authenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
