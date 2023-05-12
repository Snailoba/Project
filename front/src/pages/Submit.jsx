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
const conSubmit = {
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
  width: "45vw",

  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};
const categoryList = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "5vh",
  marginBottom: "10px",

  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};
const squareSubmit = {
  width: "100%",
  height: "66vh",
  backgroundColor: "#702963",
  boxShadow: "inset 0 0 0 3px  #702963, inset 0 0 0 6px #eed9c4",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media screen and (max-width: 1100px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    height: "70vh",
  },
};
const uploadText = {
  fontFamily: "Inika",
  color: "white",
  textAlign: "center",
  fontSize: "25px",
  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
  },
};
const dropdownButton = {
  backgroundColor: "#eed9c4",
  fontFamily: "Inika",
  fontSize: "20px",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  display: "flex",
  textAlign: "left",
  alignItems: "center",
  paddingLeft: "5px",
  zIndex: 2,

  ":hover": {
    backgroundColor: "#E25822",
    color: "white",
  },
  "@media screen and (max-width: 1100px)": {
    fontSize: "15px",
  },
};
const dropdown = {
  position: "absolute",
  backgroundColor: "#eed9c4",
  width: "45vw",
  height: "27vh",
  borderTopLeftRadius: "0",
  borderTopRightRadius: "0",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  display: "none",

  "&.open": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    transform: "translateY(50%)",
    zIndex: 1,
  },

  "@media screen and (max-width: 1100px)": {
    width: "70vw",
    height: "27vh",
  },
};
const dropdownContent = {
  bottom: 0,
  width: "100%",
  borderRadius: "10px",
  ":hover": {
    backgroundColor: "#E25822",
    color: "white",
  },
  "@media screen and (max-width: 1100px)": {
    marginTop: "5px",
  },
};
const dropdownText = {
  textAlign: "left",
  fontFamily: "Inika",
  fontSize: "20px",
  paddingLeft: "5px",

  "@media screen and (max-width: 1100px)": {
    fontSize: "15px",
  },
};

function Submit() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select category");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };

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
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>Submit</Typography>
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
        <Box sx={conSubmit}>
          <Box
            sx={categoryList}
            onClick={(e) => {
              setSelectedCategory(e.target.innerText);
            }}
          >
            <Box sx={dropdownButton} onClick={toggleDropdown}>
              {selectedCategory}
            </Box>
            <Box
              sx={dropdown}
              className={dropOpen ? "dropdown open" : "dropdown"}
            >
              <Box sx={dropdownContent} onClick={toggleDropdown}>
                <Typography sx={dropdownText}>Upper Body</Typography>
              </Box>
              <Box sx={dropdownContent} onClick={toggleDropdown}>
                <Typography sx={dropdownText}>Lower Body</Typography>
              </Box>
              <Box sx={dropdownContent} onClick={toggleDropdown}>
                <Typography sx={dropdownText}>Outer Layer</Typography>
              </Box>
              <Box sx={dropdownContent} onClick={toggleDropdown}>
                <Typography sx={dropdownText}>Shoes & Socks</Typography>
              </Box>
              <Box sx={dropdownContent} onClick={toggleDropdown}>
                <Typography sx={dropdownText}>Hats & Others</Typography>
              </Box>
              <Box sx={dropdownContent} onClick={toggleDropdown}>
                <Typography sx={dropdownText}>Accessories</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={squareSubmit}>
            <Typography sx={uploadText}>Upload file +</Typography>
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

export default Submit;
