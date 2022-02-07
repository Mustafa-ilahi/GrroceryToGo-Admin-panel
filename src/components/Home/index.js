import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import logo from "../../assets/logo2.png";
import "./Home.css";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "10%" }}>
      <div className="imgDiv">
        <img src={logo} />
      </div>
      <div className="row">
        <div className="col-12">
          <div className="buttonDiv">
            <Button className="signUpBtn" onClick={() => navigate("/signup")}>
              Create an account
            </Button>
            <Button className="signInBtn" onClick={() => navigate("/signin")}>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}