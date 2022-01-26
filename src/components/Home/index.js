import React from "react";
import { Button } from "reactstrap";
import logo from "../../assets/logo2.png";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <div>
        <img src={logo} />
      </div>
      <Button color="primary">Sign Up</Button>
      <Button>Sign In</Button>
    </div>
  );
}
