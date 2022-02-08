import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ProtectedRoute from "../components/ProtectedRoute";
import { useSelector } from "react-redux";
import VenderDashboard from "../components/VenderDashboard";
import AddProduct from "../components/AddProduct";

export default function App() {
  const role = useSelector((state) => state.role);
  // console.log(role);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/venderDashboard" element={<VenderDashboard />} />
        <Route path="/addProduct" element={<AddProduct />} />
        {/* <ProtectedRoute path="/dashboard" component={Dashboard} signedIn={signedIn} /> */}
      </Routes>
    </Router>
  );
}
