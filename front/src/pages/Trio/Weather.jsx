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
const inputTag = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "left",
  fontSize: "20px",
  "@media screen and (max-width: 1100px)": {
    fontSize: "15px",
  },
};
const inputTagDay = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "left",
  fontSize: "25px",
  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
  },
};
const conWeath = {
  display: "flex",
  flexDirection: "row",
  marginTop: "100px",
  justifyContent: "center",
  alignItems: "center",
  width: "90vw",

  "@media screen and (max-width: 1100px)": {
    flexDirection: "column",
    width: "85vw",
  },
};
const weathColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "14vw",

  "@media screen and (max-width: 1100px)": {
    flexDirection: "column",
    width: "100%",
  },
};
const weathDay = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
};
const weathDetail = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "15px",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#eed9c4",
  height: "70vh",
  width: "55%",
  border: "4px solid #32174D",

  "@media screen and (max-width: 1100px)": {
    flexDirection: "row",
    width: "100%",
    height: "10vh",
  },
};
const filler = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};
const dayDiamond = {
  width: "10px",
  height: "10px",
  margin: "10px",
  borderRadius: "3px",
  border: "3px solid black",
};

function Weather() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(!openModal);

  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>Weather</Typography>
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
        <Box sx={conWeath}>
          <Box sx={weathColumn}>
            <Box sx={weathDay}>
              <Typography sx={inputTagDay}>Sun</Typography>
              <Box sx={dayDiamond} backgroundColor="#fc5e63" />
            </Box>
            <Box sx={weathDetail}>
              <Box sx={filler}>
                <Typography sx={inputTag}>Icon</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Temp</Typography>
                <Typography sx={inputTag}>27°c</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Humid</Typography>
                <Typography sx={inputTag}>50%</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Wind</Typography>
                <Typography sx={inputTag}>5 km/h</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Rain</Typography>
                <Typography sx={inputTag}>20%</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={weathColumn}>
            <Box sx={weathDay}>
              <Typography sx={inputTagDay}>Mon</Typography>
              <Box sx={dayDiamond} backgroundColor="#fcf75e" />
            </Box>
            <Box sx={weathDetail}>
              <Box sx={filler}>
                <Typography sx={inputTag}>Icon</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Temp</Typography>
                <Typography sx={inputTag}>27°c</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Humid</Typography>
                <Typography sx={inputTag}>50%</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Wind</Typography>
                <Typography sx={inputTag}>5 km/h</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Rain</Typography>
                <Typography sx={inputTag}>20%</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={weathColumn}>
            <Box sx={weathDay}>
              <Typography sx={inputTagDay}>Tue</Typography>
              <Box sx={dayDiamond} backgroundColor="#fc5eb2" />
            </Box>
            <Box sx={weathDetail}>
              <Box sx={filler}>
                <Typography sx={inputTag}>Icon</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Temp</Typography>
                <Typography sx={inputTag}>27°c</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Humid</Typography>
                <Typography sx={inputTag}>50%</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Wind</Typography>
                <Typography sx={inputTag}>5 km/h</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Rain</Typography>
                <Typography sx={inputTag}>20%</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={weathColumn}>
            <Box sx={weathDay}>
              <Typography sx={inputTagDay}>Wed</Typography>
              <Box sx={dayDiamond} backgroundColor="#5efca8" />
            </Box>
            <Box sx={weathDetail}>
              <Box sx={filler}>
                <Typography sx={inputTag}>Icon</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Temp</Typography>
                <Typography sx={inputTag}>27°c</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Humid</Typography>
                <Typography sx={inputTag}>50%</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Wind</Typography>
                <Typography sx={inputTag}>5 km/h</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Rain</Typography>
                <Typography sx={inputTag}>20%</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={weathColumn}>
            <Box sx={weathDay}>
              <Typography sx={inputTagDay}>Thu</Typography>
              <Box sx={dayDiamond} backgroundColor="#fca85e" />
            </Box>
            <Box sx={weathDetail}>
              <Box sx={filler}>
                <Typography sx={inputTag}>Icon</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Temp</Typography>
                <Typography sx={inputTag}>27°c</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Humid</Typography>
                <Typography sx={inputTag}>50%</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Wind</Typography>
                <Typography sx={inputTag}>5 km/h</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Rain</Typography>
                <Typography sx={inputTag}>20%</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={weathColumn}>
            <Box sx={weathDay}>
              <Typography sx={inputTagDay}>Fri</Typography>
              <Box sx={dayDiamond} backgroundColor="#5efcf7" />
            </Box>
            <Box sx={weathDetail}>
              <Box sx={filler}>
                <Typography sx={inputTag}>Icon</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Temp</Typography>
                <Typography sx={inputTag}>27°c</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Humid</Typography>
                <Typography sx={inputTag}>50%</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Wind</Typography>
                <Typography sx={inputTag}>5 km/h</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Rain</Typography>
                <Typography sx={inputTag}>20%</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={weathColumn}>
            <Box sx={weathDay}>
              <Typography sx={inputTagDay}>Sat</Typography>
              <Box sx={dayDiamond} backgroundColor="#a85efc" />
            </Box>
            <Box sx={weathDetail}>
              <Box sx={filler}>
                <Typography sx={inputTag}>Icon</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Temp</Typography>
                <Typography sx={inputTag}>27°c</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Humid</Typography>
                <Typography sx={inputTag}>50%</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Wind</Typography>
                <Typography sx={inputTag}>5 km/h</Typography>
              </Box>
              <Box sx={filler}>
                <Typography sx={inputTag}>Rain</Typography>
                <Typography sx={inputTag}>20%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
}

export default Weather;
