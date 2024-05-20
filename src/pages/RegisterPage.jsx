import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const validator = require("validator");

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const textBoxStyle = {
    width: "250px",
  };
  const [isValidEmail, setIsValidEmail] = useState(true);
  const buttonStyle = {
    height: "40px",
  };
  const navigate = useNavigate();
  const handleClick = () => {
    if (!isValidEmail || !isValidPassword) {
      alert("You fucking donkey, fill proper details");
      return;
    }
    axios
      .post("http://localhost:4000/users/register", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (!response.data) {
          alert("Something went wrong");
        } else if (response.data.status === "bad") {
          alert(response.data.message);
        } else {
          navigate("/", { state: response.data });
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
        style={textBoxStyle}
        onChange={(e) => {
          setEmail(e.target.value);
          setIsValidEmail(validator.isEmail(e.target.value));
        }}
        error={!isValidEmail}
        helperText={!isValidEmail && "Enter valid email"}
        type="email"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
          setIsValidPassword(e.target.value === confirmPassword);
        }}
        style={textBoxStyle}
      />
      <TextField
        id="outlined-password-input"
        label="Re-Enter Password"
        type="password"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setIsValidPassword(e.target.value === password);
        }}
        style={textBoxStyle}
        error={!isValidPassword}
        helperText={!isValidPassword && "Passwords don't match"}
      />
      <Button variant="outlined" onClick={handleClick} style={buttonStyle}>
        Register
      </Button>
      <Button variant="outlined" href="/login">Login into existing Account</Button>
    </form>
  );
};

export default RegisterPage;
