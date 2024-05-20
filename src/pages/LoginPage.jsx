import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const validator = require("validator");

const LoginPage = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const textBoxStyle = {
    width: "250px",
  };
  const buttonStyle = {
    height: "40px",
  };
  const navigate = useNavigate();
  const handleClick = () => {
    axios
      .post("http://localhost:4000/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (!response.data) {
          alert("Something went wrong");
        } else if (response.data.status === "bad") {
          alert("Incorrect credentials");
        } else {
          navigate("/", {email : email, password : password});
        }
      })
      .catch((e) => console.log("Not able to login due to ", e));
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px 20px",
        backgroundColor: "rgb(255, 255, 220)",
        borderRadius: "30px",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        style={textBoxStyle}
        onChange={(e) => {
          setEmail(e.target.value);
          setIsValidEmail(validator.isEmail(e.target.value));
        }}
        error={!isValidEmail}
        helperText={!isValidEmail && "Enter valid email"}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        style={textBoxStyle}
      />
      <Button variant="outlined" onClick={handleClick} style={buttonStyle}>
        Log In
      </Button>
      <Button variant="outlined" href="/register"> Create New Account</Button>
    </form>
  );
};

export default LoginPage;
