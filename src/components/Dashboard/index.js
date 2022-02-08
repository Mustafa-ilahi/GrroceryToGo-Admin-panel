import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import "./dashboard.css";
import Header from "../Header";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="productRecord pt-3">
        <h3>No product available!</h3>
      </div>
      {/* <div className="d-flex justify-content-center pt-3">
        <Button className="signInBtn">Add New Product</Button>
      </div> */}
    </div>
  );
}
