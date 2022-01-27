import React from "react";
import logo from "../../assets/logo2.png";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "./signin.css";
export default function SignIn() {
  return (
    <div className="d-flex justify-content-center align-items-center main-login-div">
      <div className="login-div">
        <img src={logo} className="img-fluid groceryIcon" />
        <Form>
          {/* <h3 className="text-center">Sign in</h3> */}
          <br />
          <FormGroup>
            <Label for="exampleEmail" className="login-text">
              Email
            </Label>
            <Input
              type="email"
              placeholder="Enter Email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" className="login-text">
              Password
            </Label>
            <Input
              type="password"
              placeholder="Enter password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button
            color="info"
            className="login-btn"
            //  onClick={userSignIn}
          >
            Login
          </Button>
          <p className="mt-2" color="">
            New member create an account? <Link to="/signup">Signup</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
