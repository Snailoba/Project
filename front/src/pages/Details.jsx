import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import Menu from "../components/Menu";
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
const conDetails = {
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
  width: "65vw",

  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};
const favavo = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "10px",

  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};
const squareDetails = {
  width: "100%",
  height: "66vh",
  backgroundColor: "#702963",
  borderRadius: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  overflow: "hidden",

  "@media screen and (max-width: 1100px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    height: "95vh",
  },
};
const imag = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "33vh",
  "@media screen and (max-width: 1100px)": {
    height: "32vh",
  },
};
const detailImages = {
  width: "75%",
  height: "75%",
  border: "3px solid #eed9c4",
  borderRadius: "10px",
  objectFit: "cover",
};
const favavoButtons = {
  backgroundColor: "#E25822",
  fontFamily: "Inika",
  fontSize: "20px",
  height: "10%",
  width: "18%",
  color: "black",

  ":hover": {
    backgroundColor: "#702963",
    color: "white",
  },
  ":focus": {
    outline: "none",
  },
  "@media screen and (max-width: 1100px)": {
    fontSize: "12px",
  },
};

function Details() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>Details</Typography>
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
            <Menu open={openModal} handleClose={handleClose} />
          </Box>
        </Box>
        <Box sx={conDetails}>
          <Box sx={favavo}>
            <Button variant="text" sx={favavoButtons}>
              Favorite
            </Button>
            <Button variant="text" sx={favavoButtons}>
              Avoid
            </Button>
          </Box>
          <Box sx={squareDetails}>
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
    </>
  );
}

export default Details;
