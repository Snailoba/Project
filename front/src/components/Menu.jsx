import React from "react";
import { Typography, Modal, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const menuButton = {
  position: "absolute",
  margin: "8px",
  top: 0,
  right: 0,
};
const buttonText = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "Inika",
  color: "black",
  fontSize: "25px",
};
const modalStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: "auto",
  margin: "auto",
  width: "25%",
  height: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,

  "@media screen and (max-width: 1100px)": {
    width: "70%",
  },
};
const butto = {
  width: "100%",
  height: "14vh",
};
const menuBar = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex-column",
  backgroundColor: "white",
};
const menuText = {
  position: "absolute",
  margin: "8px",
  paddingLeft: "13px",
  left: 0,
  top: "45%",
  transform: "translateY(-50%)",
  color: "black",
  fontFamily: "Inika",
};
const menuImage = {
  position: "absolute",
  margin: "8px",
  paddingRight: "13px",
  right: 0,
};

function Menu({ open = false, handleClose = () => {} }) {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/home");
  }
  function handleClickCalendar() {
    navigate("/calendar");
  }
  function handleClickWeather() {
    navigate("/weather");
  }
  function handleClickCombos() {
    navigate("/combinations");
  }
  function handleClickInventory() {
    navigate("/inventory");
  }
  function handleClickPreference() {
    navigate("/preference");
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box>
          <Box sx={menuButton}>
            <img
              src="assets/hex.svg"
              alt="hexagon"
              onClick={handleClose}
              style={{
                width: "80px",
                height: "80px",
              }}
            />
            <Box sx={buttonText}>Menu</Box>
          </Box>
        </Box>
        <Box sx={menuBar}>
          <Button variant="text" sx={butto} onClick={handleClickHome}>
            <Typography sx={menuText}>Home</Typography>
            <Box sx={menuImage}>
              <img
                src="assets/home.svg"
                style={{
                  width: "70%",
                  height: "auto",
                  maxWidth: "400px",
                }}
              />
            </Box>
          </Button>
          <Button variant="text" sx={butto} onClick={handleClickCalendar}>
            <Typography sx={menuText}>Calendar</Typography>
            <Box sx={menuImage}>
              <img
                src="assets/calendar.svg"
                style={{
                  width: "70%",
                  height: "auto",
                  maxWidth: "400px",
                }}
              />
            </Box>
          </Button>
          <Button variant="text" sx={butto} onClick={handleClickWeather}>
            <Typography sx={menuText}>Weather</Typography>
            <Box sx={menuImage}>
              <img
                src="assets/partly.svg"
                style={{
                  width: "70%",
                  height: "auto",
                  maxWidth: "400px",
                }}
              />
            </Box>
          </Button>
          <Button variant="text" sx={butto} onClick={handleClickCombos}>
            <Typography sx={menuText}>Combinations</Typography>
            <Box sx={menuImage}>
              <img
                src="assets/styler.svg"
                style={{
                  width: "70%",
                  height: "auto",
                  maxWidth: "400px",
                }}
              />
            </Box>
          </Button>
          <Button variant="text" sx={butto} onClick={handleClickInventory}>
            <Typography sx={menuText}>Inventory</Typography>
            <Box sx={menuImage}>
              <img
                src="assets/inventory.svg"
                style={{
                  width: "70%",
                  height: "auto",
                  maxWidth: "400px",
                }}
              />
            </Box>
          </Button>
          <Button variant="text" sx={butto} onClick={handleClickPreference}>
            <Typography sx={menuText}>Preferences</Typography>
            <Box sx={menuImage}>
              <img
                src="assets/settings.svg"
                style={{
                  width: "70%",
                  height: "auto",
                  maxWidth: "400px",
                }}
              />
            </Box>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default Menu;
