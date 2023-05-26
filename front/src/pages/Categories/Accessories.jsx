import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import Menu from "../../components/Menu";

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

function Accessories() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(!openModal);

  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>Accessories</Typography>
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
            <Menu open={openModal} handleClose={handleOpen} />
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
    </>
  );
}

export default Accessories;
