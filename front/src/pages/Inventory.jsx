import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
const inputTag = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "left",
  fontSize: "25px",

  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
  },
};
const conInven = {
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
  width: "65vw",

  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};
const topSection = {
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
const squareInven = {
  width: "100%",
  height: "66vh",
  backgroundColor: "#eed9c4",
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
const categoryImages = {
  width: "75%",
  height: "75%",
  border: "3px solid #32174d",
  borderRadius: "10px",
  objectFit: "cover",
};
const submitButton = {
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
    fontSize: "15px",
  },
};
const categoryTagOne = {
  position: "absolute",
  width: "8%",
  height: "10%",
  backgroundColor: "black",
  border: "5px solid white",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",

  "@media screen and (max-width: 1100px)": {
    width: "12%",
    height: "10%",
  },
};
const categoryTagTwo = {
  position: "absolute",
  width: "10%",
  height: "10%",
  backgroundColor: "black",
  border: "5px solid white",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",

  "@media screen and (max-width: 1100px)": {
    width: "15%",
    height: "10%",
  },
};
const categoryTagTri = {
  position: "absolute",
  width: "12%",
  height: "10%",
  backgroundColor: "black",
  border: "5px solid white",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",

  "@media screen and (max-width: 1100px)": {
    width: "20%",
    height: "8%",
  },
};
const categoryText = {
  fontFamily: "Inika",
  color: "white",
  fontSize: "20px",

  "@media screen and (max-width: 1100px)": {
    fontSize: "12px",
  },
};

function Inventory() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  function handleClickUpper() {
    navigate("/upper");
  }
  function handleClickLower() {
    navigate("/lower");
  }
  function handleClickOuter() {
    navigate("/Outer");
  }
  function handleClickShoes() {
    navigate("/shoes");
  }
  function handleClickHats() {
    navigate("/hats");
  }
  function handleClickAccessories() {
    navigate("/accessories");
  }
  function handleClickSubmit() {
    navigate("/submit");
  }
  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>Inventory</Typography>
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
        <Box sx={conInven}>
          <Box sx={topSection}>
            <Typography sx={inputTag}>Categories</Typography>
            <Button
              variant="text"
              sx={submitButton}
              onClick={handleClickSubmit}
            >
              Submit
            </Button>
          </Box>
          <Box sx={squareInven}>
            <Box sx={imag}>
              <img
                src="assets/sample.jpg"
                style={categoryImages}
                onClick={handleClickUpper}
              />
              <Box sx={categoryTagOne} onClick={handleClickUpper}>
                <Typography sx={categoryText}>Upper Body</Typography>
              </Box>
            </Box>
            <Box sx={imag}>
              <img
                src="assets/sample.jpg"
                style={categoryImages}
                onClick={handleClickLower}
              />
              <Box sx={categoryTagOne} onClick={handleClickLower}>
                <Typography sx={categoryText}>Lower Body</Typography>
              </Box>
            </Box>
            <Box sx={imag}>
              <img
                src="assets/sample.jpg"
                style={categoryImages}
                onClick={handleClickOuter}
              />
              <Box sx={categoryTagOne} onClick={handleClickOuter}>
                <Typography sx={categoryText}>Outer Layer</Typography>
              </Box>
            </Box>
            <Box sx={imag}>
              <img
                src="assets/sample.jpg"
                style={categoryImages}
                onClick={handleClickShoes}
              />
              <Box sx={categoryTagTwo} onClick={handleClickShoes}>
                <Typography sx={categoryText}>Shoes & Socks</Typography>
              </Box>
            </Box>
            <Box sx={imag}>
              <img
                src="assets/sample.jpg"
                style={categoryImages}
                onClick={handleClickHats}
              />
              <Box sx={categoryTagTwo} onClick={handleClickHats}>
                <Typography sx={categoryText}>Hats & Others</Typography>
              </Box>
            </Box>
            <Box sx={imag}>
              <img
                src="assets/sample.jpg"
                style={categoryImages}
                onClick={handleClickAccessories}
              />
              <Box sx={categoryTagTri} onClick={handleClickAccessories}>
                <Typography sx={categoryText}>Accessories</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
}

export default Inventory;
