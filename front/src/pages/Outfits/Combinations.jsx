import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
const inputTag = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "left",
  fontSize: "25px",
  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
    color: "white",
  },
};
const conCombos = {
  display: "flex",
  flexDirection: "row",
  marginTop: "100px",
  width: "85vw",

  "@media screen and (max-width: 1100px)": {
    flexDirection: "column",
    width: "90vw",
  },
};
const columns = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "65vw",

  "@media screen and (max-width: 1100px)": {
    width: "100%",
  },
};
const comboHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginBottom: "10px",

  "@media screen and (max-width: 1100px)": {
    width: "70vw",
    position: "absolute",
  },
};
const squareCombos = {
  width: "90%",
  height: "75vh",
  backgroundColor: "#702963",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  marginBottom: "10px",

  "@media screen and (max-width: 1100px)": {
    height: "25vh",
    boxShadow: "inset 0 0 0 3px  #702963, inset 0 0 0 6px #eed9c4",
  },
};
const imag = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: "100%",
  overflow: "hidden",
  "@media screen and (max-width: 1100px)": {
    display: "none",
  },
};
const comboImages = {
  width: "75%",
  height: "75%",
  border: "3px solid #eed9c4",
  borderRadius: "10px",
  objectFit: "cover",
};

function Combinations() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(!openModal);

  function handleClickDetails() {
    navigate("/details");
  }
  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>Combinations</Typography>
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
        <Box sx={conCombos}>
          <Box sx={columns}>
            <Box sx={comboHeader}>
              <Typography sx={inputTag}>Today's outfit</Typography>
            </Box>
            <Box sx={squareCombos} onClick={handleClickDetails}>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
            </Box>
          </Box>
          <Box sx={columns}>
            <Box sx={comboHeader}>
              <Typography sx={inputTag}>Today's alternate</Typography>
            </Box>
            <Box sx={squareCombos} onClick={handleClickDetails}>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
            </Box>
          </Box>
          <Box sx={columns}>
            <Box sx={comboHeader}>
              <Typography sx={inputTag}>Tomorrow's outfit</Typography>
            </Box>
            <Box sx={squareCombos} onClick={handleClickDetails}>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={comboImages} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
}

export default Combinations;
