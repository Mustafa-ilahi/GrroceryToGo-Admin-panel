import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "../Header";
import "./venderDashboard.css";
export default function VenderDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center pt-3">
        <Button className="signInBtn" onClick={() => navigate("/addProduct")}>
          Add New Product
        </Button>
      </div>
    </div>
  );
}
