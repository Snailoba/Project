import React, { useState } from "react";
import { Typography, Modal, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Stubborn.css";

const menuContainer = {
  background: "#32174D",
  position: "absolute",
  top: 0,
  left: 0,
  height: "95px",
  width: "100%",
  display: "flex",
  alignItems: "center",
};
const title = {
  fontFamily: "Girassol",
  fontSize: "55px",
  pl: "1%",
  color: "white",
  "@media screen and (max-width: 1100px)": {
    fontSize: "40px",
  },
};
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
const conCate = {
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
  width: "85vw",

  "@media screen and (max-width: 1100px)": {
    width: "90vw",
  },
};
const displayArea = {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(4, 1fr)",
  overflow: "hidden",

  "@media screen and (max-width: 1100px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
};
const imag = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "33vh",
  width: "100%",
  "@media screen and (max-width: 1100px)": {
    height: "32vh",
  },
};
const detailImages = {
  width: "80%",
  height: "80%",
  border: "3px solid #32174d",
  borderRadius: "10px",
  objectFit: "cover",
};

function Hats() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClickHome() {
    navigate("/");
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
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>Hats & Others</Typography>
          <Box sx={menuButton}>
            <img
              src="assets/hex.svg"
              alt="hexagon"
              onClick={handleOpen}
              style={{
                width: "80px",
                height: "80px",
              }}
            />
            <Box sx={buttonText}>Menu</Box>
          </Box>
        </Box>
        <Box sx={conCate}>
          <Box sx={displayArea}>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
            <Box sx={imag}>
              <img src="assets/sample.jpg" style={detailImages} />
            </Box>
          </Box>
        </Box>
      </Box>{" "}
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
    </>
  );
}

export default Hats;
