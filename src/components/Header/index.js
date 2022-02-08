import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import { signout } from "../../config/firebase";
import "./header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const role = useSelector((state) => state.role);
  console.log(role);
  const adminSignOut = async () => {
    const signOut = await signout()
      .then(() => {
        toast.success("Signed Out successfully");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };
  return (
    <div>
      <div className="d-flex justify-content-between p-3 header">
        <h3 className="dashboardText">{role} Dashboard</h3>
        <Button className="signOutBtn" onClick={adminSignOut}>
          Sign out
        </Button>
      </div>
    </div>
  );
}
