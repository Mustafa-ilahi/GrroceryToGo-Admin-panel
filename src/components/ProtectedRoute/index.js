import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ signedIn, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (signedIn != "") {
          return <Component />;
        } else {
          return <Navigate to="/" />;
        }
      }}
    />
  );
}
export default ProtectedRoute;
