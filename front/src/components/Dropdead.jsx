import React, { useState } from "react";
import { Typography, Box } from "@mui/material";

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

function Dropdead() {
  const [dropOpen, setDropOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select category");

  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };
  return (
    <Box
      sx={categoryList}
      onClick={(e) => {
        setSelectedCategory(e.target.innerText);
      }}
    >
      <Box sx={dropdownButton} onClick={toggleDropdown}>
        {selectedCategory}
      </Box>
      <Box sx={dropdown} className={dropOpen ? "dropdown open" : "dropdown"}>
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
  );
}

export default Dropdead;
