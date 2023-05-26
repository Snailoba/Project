import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import Menu from "../../components/Menu";
import Dropdead from "../../components/Dropdead";

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
const conSubmit = {
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
  width: "45vw",

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

function Submit() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(!openModal);

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
            <Menu open={openModal} handleClose={handleOpen} />
          </Box>
        </Box>
        <Box sx={conSubmit}>
          <Dropdead />
          <Box sx={squareSubmit}>
            <Typography sx={uploadText}>Upload file +</Typography>
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
}

export default Submit;
