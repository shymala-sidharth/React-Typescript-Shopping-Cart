import React from "react";
import { MainNav } from "./MainNav";
import {AuthNav} from "./AuthNav";

export default function Navbar() {
  return (
    <div>
      <MainNav />
      <AuthNav />
    </div>
  );
}