import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function PrivateRoute () {
  return (
    <div>Private</div>
  )
}

export default withAuthenticationRequired(PrivateRoute, {onRedirecting: () => <div>Redirecting you to the login page...</div>})