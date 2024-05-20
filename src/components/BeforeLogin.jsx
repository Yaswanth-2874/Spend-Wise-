import React from "react";
import { Button } from "@mui/material";
const BeforeLogin = () => {
  return (
    <div className="basicDesign">
      Login or Sign up before starting !
      <Button variant="contained" color="success" href="/login">
        Login
      </Button>
      <Button variant="contained" href="/register">
        Sign Up
      </Button>
    </div>
  );
};

export default BeforeLogin;
