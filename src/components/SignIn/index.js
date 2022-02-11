import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { Spinner } from "reactstrap";
import { toast } from "react-toastify";
import { db, getData, signin } from "../../config/firebase";
import { storeData } from "../../store/action";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const adminSignIn = async () => {
    setLoader(true);
    if (email && password) {
      let signedIn = await signin(email, password)
        .then(async () => {
          toast.success("Signed In successfully");
          setLoader(false);
          let role = "";
          let data = db
            .collection("Admin")
            .where("email", "==", email)
            .get()
            .then((snapshot) => {
              snapshot.forEach((item) => {
                dispatch(
                  storeData(
                    item.data().email,
                    item.data().userName,
                    item.data().role
                  )
                );
                role = item.data().role;
              });
              if (role == "Admin") {
                navigate("/dashboard");
              } else {
                navigate("/venderDashboard");
              }
            })
            .catch((err) => {
              return toast.error(err.message);
            });
        })
        .catch((err) => {
          setLoader(false);
          return toast.error(err.message);
        });
    }
    else if (!email) {
      setLoader(false);
      return toast.error("Please Fill Email Field");
    }
    else if (!password) {
      setLoader(false);
      return toast.error("Please Fill Password Field");
    }
  };
  return (
    <div className="d-flex justify-content-center text-center align-items-center main-login-div">
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
          <Button color="info" className="login-btn" onClick={adminSignIn}>
            {loader ? (
              <Spinner animation="border" variant="light" size="sm" />
            ) : (
              "Login"
            )}
          </Button>
          <p className="mt-2" color="">
            New member create an account? <Link to="/signup">Signup</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
