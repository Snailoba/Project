import React, { useState, useEffect } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Menu from "../../components/Menu";
import EventCard from "../../components/EventCard";
import axios from "axios";
import Swal from "sweetalert2";
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
  width: "40%",
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
const createModal = {
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

  "@media screen and (max-width: 1100px)": {
    width: "75vw",
  },
};
const createButtons = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "10px",
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
const space = {
  height: "10px",
};

function Events() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(!openModal);

  const [openCreate, setOpenCreate] = useState(false);
  const handleOpenCreate = () => setOpenCreate(!openCreate);
  const handleStop = (e) => {
    e.stopPropagation();
  };

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [events, setEvents] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await instance.get("http://localhost:2000/check");
        const decodedId = response.data.decoded;
        setUserId(decodedId);
        console.log(decodedId);
        if (decodedId !== undefined && decodedId !== "undefined") {
          const response = await instance.get(
            `http://localhost:2000/eve?userId=${decodedId}`
          );
          console.log(response.data);
          console.log(response.data.message);
          const size = Object.keys(response.data.data.rows).length;
          const data = [];
          for (let i = 0; i < size; i++) {
            data.push(response.data.data.rows[i]);
          }
          setEvents(data);
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          Swal.fire("Error!", `Error Code: ${error.response.status}`, "error");
        }
      }
    };
    fetchUserId();
  }, []);

  function handleInputTitle(e) {
    setTitleInput(e.target.value);
  }
  function handleInputDescription(e) {
    setDescriptionInput(e.target.value);
  }

  const instance = axios.create({
    withCredentials: true,
  });

  const handleAdd = async () => {
    try {
      const newEvent = {
        title: titleInput,
        description: descriptionInput,
      };
      setEvents([...events, newEvent]);
      setTitleInput("");
      setDescriptionInput("");
      handleOpenCreate();
      console.log(`${titleInput}`);
      console.log(`${descriptionInput}`);
      console.log(`${userId}`);
      const response = await instance.post("http://localhost:2000/eve", {
        userId,
        titleInput,
        descriptionInput,
      });
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        Swal.fire("Error!", `Error Code: ${error.response.status}`, "error");
      }
    }
  };

  const handleEventEdit = (editedEvent) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event) => {
        if (event.id === editedEvent.id) {
          return editedEvent;
        }
        return event;
      });
      return updatedEvents;
    });
    console.log(editedEvent);
  };

  const handleEventDelete = (deletedEventId) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.filter(
        (event) => event.id !== deletedEventId
      );
      return updatedEvents;
    });
  };

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
            <Menu open={openModal} handleClose={handleOpen} />
          </Box>
        </Box>
        <Box sx={conCalen}>
          <Box sx={calen}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Box>
          <Box sx={eventSection}>
            <Button sx={eventButton} onClick={handleOpenCreate}>
              + Add New Events
            </Button>
            <Box sx={eventDisplay}>
              {events.map((event, index) => {
                return (
                  <EventCard
                    key={index}
                    title={event.title}
                    description={event.description}
                    id={event.id}
                    onEventUpdate={handleEventEdit}
                    onEventDelete={handleEventDelete}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>{" "}
      <Box sx={{ display: openCreate ? "flex" : "none" }}>
        <Box sx={modalBG} onClick={handleOpenCreate}>
          <Box sx={createModal} onClick={handleStop}>
            <TextField
              id="title"
              label="Date of event"
              variant="outlined"
              fullWidth
              value={titleInput}
              onChange={handleInputTitle}
            />
            <Box sx={space}></Box>
            <TextField
              id="description"
              label="Event details"
              variant="outlined"
              multiline
              fullWidth
              value={descriptionInput}
              onChange={handleInputDescription}
            />
            <Box sx={createButtons}>
              <Button
                variant="contained"
                sx={submitButton}
                onClick={handleOpenCreate}
              >
                Close
              </Button>
              <Button variant="contained" sx={submitButton} onClick={handleAdd}>
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Events;
