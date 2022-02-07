import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signout } from "../../config/firebase";

export default function Dashboard() {
  const navigate = useNavigate();

  const adminSignOut = async () => {
    const signOut = await signout()
      .then(() => {
        toast.success("Admin Signed Out successfully");
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
      <h3>Dashboard here</h3>
      <button onClick={adminSignOut}>Sign out</button>
    </div>
  );
}
