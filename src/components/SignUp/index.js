import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./signup.css";
import { db, signup } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { storeData } from "../../store/action";

export default function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loader, setLoader] = useState(false);
  const [dropdownOpen, setOpen] = useState();
  const [role, setRole] = useState("Select Role");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const adminSignUp = async () => {
    setLoader(true);
    if (name && email && password) {
      let signedUp = await signup(email, password)
        .then(() => {
          let data = db
            .collection("Admin")
            .add({
              email,
              name,
              role,
            })
            .then(() => {
              toast.success("Sign Up successfully");
              dispatch(storeData(email, name, role));
              if (role == "Admin") {
                navigate("/dashboard");
              } else {
                navigate("/venderDashboard");
              }

              setLoader(false);
            });
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
    if (!name) {
      setLoader(false);
      return toast.error("Please Fill Username Field");
    }
    if (!email) {
      setLoader(false);
      return toast.error("Please Fill Email Field");
    }
    if (!password) {
      setLoader(false);
      return toast.error("Please Fill Password Field");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center main-login-div">
      <div className="login-div">
        <img
          src={logo}
          className="img-fluid groceryIcon"
          style={{ textAlign: "center" }}
        />
        <Form>
          <br />
          <FormGroup className="labelText">
            <Label for="exampleEmail" className="login-text">
              *Username
            </Label>
            <Input
              type="email"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
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
          <FormGroup>
            <Label for="examplePassword" className="login-text">
              *Role &nbsp; &nbsp;
            </Label>
            <ButtonDropdown
              toggle={() => {
                setOpen(!dropdownOpen);
              }}
              isOpen={dropdownOpen}
            >
              <DropdownToggle
                style={{
                  backgroundColor: "#ff5621",
                  color: "#fff",
                  fontFamily: "Poppins-Regular",
                }}
                caret
              >
                {role}
              </DropdownToggle>

              <DropdownMenu
                style={{ textAlign: "center", fontFamily: "Poppins-Regular" }}
              >
                <DropdownItem onClick={() => setRole("Vender")}>
                  Vender
                </DropdownItem>
                <DropdownItem onClick={() => setRole("Admin")}>
                  Admin
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </FormGroup>

          <Button color="info" className="login-btn" onClick={adminSignUp}>
            {loader ? (
              <Spinner animation="border" variant="light" size="sm" />
            ) : (
              "Create an account"
            )}
          </Button>
          <p className="mt-4">
            Already member <Link to="/signin"> Signin </Link> with your existing
            account?
          </p>
        </Form>
      </div>
    </div>
  );
}
