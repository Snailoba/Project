import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
const welcomeMat = {
  display: "flex",
  flexDirection: "column",
  width: "55vh",
};
const welcomeText = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "center",
  fontSize: "25px",
};
const startButton = {
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
const space = {
  backgroundColor: "white",
  height: "2vh",
};

function Genesis() {
  const navigate = useNavigate();

  function handleClickRegister() {
    navigate("/register");
  }
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
        <Box sx={space} />
        <Box sx={welcomeMat}>
          <Typography sx={welcomeText}>Welcome to Luco</Typography>
        </Box>
        <Box sx={space} />
        <Button variant="text" sx={startButton} onClick={handleClickRegister}>
          Register
        </Button>
        <Box sx={space} />
        <Button variant="text" sx={startButton} onClick={handleClickLogin}>
          Log in
        </Button>
      </Box>
    </Box>
  );
}

export default Genesis;
