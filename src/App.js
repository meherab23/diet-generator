import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
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
import WeeklyList from "./layout/pages/weeklylist";

// Authentication Function
const getAuthStatus = () => {
  const userInfo = JSON.parse(localStorage.getItem("authenticated"));
  // console.log(userInfo);
  return userInfo ? true : false;
};

const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const PublicRoute = ({ isAuthenticated }) => {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/home" replace />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(getAuthStatus());
  

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(getAuthStatus()); // Update authentication state on login/logout
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  console.log(isAuthenticated);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Public Routes */}
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<RootLayouts />}>
            <Route path="/home" element={<Home />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<Edit />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/weeklylist" element={<WeeklyList />} />
          </Route>
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
