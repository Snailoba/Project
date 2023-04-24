import React from "react";
import { AppBar, Typography, Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Calendar from "./Calendar";

const boundaries = {
  margin: "50px",
};
const containerNav = {
  background: "#32174D",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
const title = {
  fontFamily: "Courier New",
  fontSize: "25px",
  pl: 15,
};
const triplet = { display: { xs: "none", md: "flex" } };
const butto = {
  backgroundColor: "#20232a",
  color: "white",
  fontFamily: "Courier New",
  fontSize: "15px",
};
const menu = { mr: 2, display: { sm: "block", md: "none" }, color: "white" };

function Home() {
  return (
    <>
      <Box sx={boundaries}>
        <AppBar sx={containerNav}>
          <Typography sx={title}>My Movie</Typography>
          <Box sx={triplet}>
            <Button sx={butto}>Home</Button>
            <Button sx={butto}>About</Button>
            <Button sx={butto}>Contact</Button>
          </Box>
          <IconButton edge="start" sx={menu}>
            <MenuIcon />
          </IconButton>
        </AppBar>
      </Box>{" "}
    </>
  );
}

export default Home;
