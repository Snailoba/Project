import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Stubborn.css";
import Swal from "sweetalert2";

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
const loginButton = {
  backgroundColor: "#702963",
  fontFamily: "Inika",
  fontSize: "9px",
  height: "5%",
  width: "40%",
  color: "white",
  ":hover": {
    backgroundColor: "#32174d",
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

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const instance = axios.create({
    withCredentials: true,
  });

  const validatePassword = () => {
    return password === confirmPassword;
  };

  const handleSubmit = async () => {
    if (!validatePassword()) return;
    try {
      const response = await instance.post("http://localhost:2000/reg", {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        Swal.fire("Error!", `Error Code: ${error.response.status}`, "error");
      }
    }
  };

  const navigate = useNavigate();
  function handleClickLogin() {
    navigate("/login");
  }
  return (
    <Box>
      <Box sx={container}>
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
          <input
            type="text"
            className="texfil"
            style={type}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Box sx={space} />
          <label htmlFor="texfil" style={inputTag}>
            Password
          </label>
          <input
            type="text"
            className="texfil"
            style={type}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Box sx={space} />
          <label htmlFor="texfil" style={inputTag}>
            Confirm Password
          </label>
          <input
            type="text"
            className="texfil"
            style={type}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Box>
        <Box sx={space} />
        <Button variant="text" sx={submitButton} onClick={handleSubmit}>
          Register
        </Button>
        <Button variant="text" sx={loginButton} onClick={handleClickLogin}>
          Already made an account?
        </Button>
      </Box>
    </Box>
  );
}

export default Register;
