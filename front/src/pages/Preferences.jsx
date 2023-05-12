import React, { useState } from "react";
import { Typography, Modal, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
const inputTag = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "left",
  fontSize: "25px",
  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
  },
};
const conPref = {
  display: "flex",
  flexDirection: "row",
  marginTop: "100px",

  "@media screen and (max-width: 1100px)": {
    flexDirection: "column",
    width: "70vw",
  },
};
const squarePref = {
  width: "15em",
  height: "15em",
  backgroundColor: "#eed9c4",
  boxShadow: "inset 0 0 0 3px #eed9c4, inset 0 0 0 6px #32174d",
  borderRadius: "10px",
  marginRight: "20px",
  marginBottom: "20px",

  "@media screen and (max-width: 1100px)": {
    display: "inline-block",
    width: "13em",
    height: "13em",
  },
};
const buttonTextPref = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "Inika",
  color: "black",
  fontSize: "25px",
  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
  },
};
const blocPref = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  "@media screen and (max-width: 1100px)": {
    display: "block",
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  },
};
const space = {
  backgroundColor: "white",
  width: "2vw",
};

function Preferences() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  function handleClickDetails() {
    navigate("/details");
  }
  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>Preferences</Typography>
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
        <Box sx={conPref}>
          <Box>
            <Typography sx={inputTag}>Favorites</Typography>
            <Box sx={blocPref}>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/03/11</Box>
              </Box>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/04/17</Box>
              </Box>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/05/12</Box>
              </Box>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/06/21</Box>
              </Box>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/10/29</Box>
              </Box>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/11/01</Box>
              </Box>
            </Box>
          </Box>
          <Box sx={space}></Box>
          <Box>
            <Typography sx={inputTag}>Avoided</Typography>
            <Box sx={blocPref}>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/05/18</Box>
              </Box>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/05/25</Box>
              </Box>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/07/10</Box>
              </Box>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/08/04</Box>
              </Box>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/08/16</Box>
              </Box>
              <Box sx={squarePref} onClick={handleClickDetails}>
                <Box sx={buttonTextPref}>Outfit 2023/09/23</Box>
              </Box>
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

export default Preferences;
