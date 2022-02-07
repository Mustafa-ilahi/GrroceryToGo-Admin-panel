import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "./signin.css";
import { Spinner } from "reactstrap"

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const adminSignIn = ()=>{
    console.log("working");
  }
  return (
    <div className="d-flex justify-content-center align-items-center main-login-div">
      <div className="login-div">
        <img src={logo} className="img-fluid groceryIcon" />
        <Form>
          <br />
          <FormGroup className="labelText">
            <Label for="exampleEmail" className="login-text">
              *Email
            </Label>
            <Input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="labelText">
            <Label for="examplePassword" className="login-text">
              *Password
            </Label>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button
            color="info"
            className="login-btn"
             onClick={adminSignIn}
          >
            Login
            {/* <Spinner animation="border" variant="light" /> */}
          </Button>
          <p className="mt-2" color="">
            New member create an account? <Link to="/signup">Signup</Link>
          </p>
          
        </Form>
      </div>
    </div>
  );
}
