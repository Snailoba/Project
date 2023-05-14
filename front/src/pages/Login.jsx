import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Stubborn.css";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
};
const logo = {
  position: "relative",
};
const logoText = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "Girassol",
  color: "white",
  fontSize: "85px",
};
const submitButton = {
  backgroundColor: "#E25822",
  fontFamily: "Inika",
  fontSize: "20px",
  height: "10%",
  width: "40%",
  color: "black",
  ":hover": {
    backgroundColor: "#702963",
    color: "white",
  },
  ":focus": {
    outline: "none",
  },
};
const type = {
  backgroundColor: "#EED9C4",
  fontFamily: "Inika",
  color: "black",
  borderRadius: 6,
  border: "none",
  outline: "none",
  padding: "10px 10px",
  fontSize: "20px",
};
const inputTag = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "left",
  fontSize: "25px",
};
const inputContainer = {
  display: "flex",
  flexDirection: "column",
  width: "55vh",
};
const space = {
  backgroundColor: "white",
  height: "2vh",
};

function Login() {
  const submitPassword = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
  function handleClickHome() {
    navigate("/home");
  }
  return (
    <Box>
      <Box sx={container} onSubmit={submitPassword}>
        <Box>
          <Box sx={logo}>
            <img
              src="assets/logo.svg"
              alt="hexagon"
              style={{
                width: "200px",
                height: "200px",
              }}
            />
            <Box sx={logoText}>Luco</Box>
          </Box>
        </Box>
        <Box sx={inputContainer}>
          <label htmlFor="texfil" style={inputTag}>
            Username
          </label>
          <input type="text" className="texfil" style={type} required />
          <Box sx={space} />
          <label htmlFor="texfil" style={inputTag}>
            Password
          </label>
          <input type="text" className="texfil" style={type} required />
        </Box>
        <Box sx={space} />
        <Button
          type="submit"
          variant="contained"
          sx={submitButton}
          onClick={handleClickHome}
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
