import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Menu from "../../components/Menu";
import "./Calendar.css";

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
const conCalen = {
  display: "flex",
  flexDirection: "row",
  marginTop: "100px",
  justifyContent: "space-between",

  "@media screen and (max-width: 1100px)": {
    flexDirection: "column",
    width: "90vw",
    justifyContent: "center",
    alignItems: "center",
  },
};
const eventButton = {
  backgroundColor: "#E25822",
  fontFamily: "Inika",
  fontSize: "20px",
  height: "10%",
  width: "35%",
  color: "black",

  ":hover": {
    backgroundColor: "#702963",
    color: "white",
  },
  ":focus": {
    outline: "none",
  },
  "@media screen and (max-width: 1100px)": {
    width: "50%",
    margin: "15px",
    fontSize: "15px",
  },
};
const calen = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media screen and (max-width: 1100px)": {
    width: "100%",
    marginBottom: "15px",
  },
};
const eventSection = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50vw",
  "@media screen and (max-width: 1100px)": {
    width: "100%",
  },
};
const eventDisplay = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  justifyContent: "center",
  alignItems: "center",
};
const eventCard = {
  backgroundColor: "#eed9c4",
  border: "5px solid #32174d",
  borderRadius: "5px",
  margin: "10px",
  width: "20vw",
  height: "25vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media screen and (max-width: 1100px)": {
    width: "38vw",
    height: "25vh",
  },
};

function Events() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>Calendar</Typography>
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
        <Box sx={conCalen}>
          <Box sx={calen}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Box>
          <Box sx={eventSection}>
            <Button variant="text" sx={eventButton}>
              Add event +
            </Button>
            <Box sx={eventDisplay}>
              <Box sx={eventCard}>
                <Typography sx={inputTag}>Event 26/05/23</Typography>
              </Box>
              <Box sx={eventCard}>
                <Typography sx={inputTag}>Event 26/05/23</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
}

export default Events;
