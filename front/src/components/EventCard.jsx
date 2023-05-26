import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const eventCard = {
  backgroundColor: "#eed9c4",
  border: "5px solid #32174d",
  borderRadius: "5px",
  margin: "10px",
  width: "20vw",
  height: "25vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  wordWrap: "break-word",
  "@media screen and (max-width: 1100px)": {
    width: "38vw",
    height: "25vh",
  },
};
const titleTag = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "left",
  fontSize: "25px",
  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
  },
};
const descTag = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "left",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "15px",
};
const titleBox = {
  margin: "5px",
};
const descBox = {
  margin: "5px",
};
const line = {
  width: "100%",
  height: "2px",
  backgroundColor: "black",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};
const lineSuper = {
  width: "100%",
  height: "2px",
  backgroundColor: "black",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};
const space = {
  height: "10px",
};
const detailModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35vw",
  height: "auto",
  backgroundColor: "#eed9c4",
  border: "5px solid #32174d",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
  wordWrap: "break-word",
  "@media screen and (max-width: 1100px)": {
    width: "75vw",
  },
};
const detailButtons = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "10px",

  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};
const submitButton = {
  backgroundColor: "#E25822",
  fontFamily: "Inika",
  fontSize: "20px",

  width: "20%",
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
const editModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35vw",
  height: "auto",
  backgroundColor: "#eed9c4",
  border: "5px solid #32174d",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
  wordWrap: "break-word",
  "@media screen and (max-width: 1100px)": {
    width: "75vw",
  },
};
const editButtons = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "10px",

  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};
const modalBG = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function EventCard({ title, description }) {
  const [openDetail, setOpenDetail] = useState(false);
  const handleOpenDetail = () => setOpenDetail(!openDetail);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(!openEdit);

  const handleClose = () => {
    handleOpenEdit();
    handleOpenDetail();
  };
  const handleStop = (e) => {
    e.stopPropagation();
  };

  const [titleEdit, setTitleEdit] = useState("");

  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [events, setEvents] = useState([]);

  function handleEditTitle(e) {
    setTitleEdit(e.target.value);
  }
  function handleEditDescription(e) {
    setDescriptionEdit(e.target.value);
  }

  function handleEdit() {
    const newEvent = { title: titleEdit, description: descriptionEdit };
    setEvents([...events, newEvent]);
    setTitleEdit("");
    setDescriptionEdit("");
    handleOpenEdit();
  }

  return (
    <>
      <Box sx={eventCard} onClick={handleOpenDetail}>
        <Box sx={titleBox}>
          <Typography sx={titleTag}>{title}</Typography>
        </Box>
        <Box sx={line} />
        <Box sx={descBox}>
          <Typography sx={descTag}>{description}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: openDetail ? "flex" : "none" }}>
        <Box sx={modalBG} onClick={handleOpenDetail}>
          <Box sx={detailModal} onClick={handleStop}>
            <Box sx={titleBox}>
              <Typography sx={titleTag}>{title}</Typography>
            </Box>
            <Box sx={lineSuper} />
            <Box sx={descBox}>
              <Typography sx={descTag}>{description}</Typography>
            </Box>
            <Box sx={lineSuper} />
            <Box sx={detailButtons}>
              <Button
                variant="contained"
                sx={submitButton}
                onClick={handleOpenEdit}
              >
                Edit
              </Button>
              <Button variant="contained" sx={submitButton}>
                Delete
              </Button>
            </Box>
          </Box>{" "}
        </Box>
      </Box>
      <Box sx={{ display: openEdit ? "flex" : "none" }}>
        <Box sx={modalBG} onClick={handleClose}>
          <Box sx={editModal} onClick={handleStop}>
            <TextField
              id="title"
              label="Date of event"
              variant="outlined"
              fullWidth
              onChange={handleEditTitle}
            />
            <Box sx={space}></Box>
            <TextField
              id="description"
              label="Event details"
              variant="outlined"
              multiline
              fullWidth
              onChange={handleEditDescription}
            />
            <Box sx={editButtons}>
              <Button
                variant="contained"
                sx={submitButton}
                onClick={handleClose}
              >
                Close
              </Button>
              <Button variant="contained" sx={submitButton}>
                Edit
              </Button>
            </Box>
          </Box>{" "}
        </Box>
      </Box>
    </>
  );
}

export default EventCard;
