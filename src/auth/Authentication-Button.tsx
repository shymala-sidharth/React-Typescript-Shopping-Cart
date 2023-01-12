import React from "react";
import LoginButton from "./Login-button";
import LogoutButton from "./Logout-button";

import { useAuth0 } from "@auth0/auth0-react";

function AuthenticationButton() {
  const { isAuthenticated } = useAuth0();
 
  {/* 
// @ts-ignore */}

  return isAuthenticated ?  <LogoutButton/> : <LoginButton />;
}

export default AuthenticationButton;