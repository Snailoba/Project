import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import Cookies from "js-cookie";
import EventCard from "../components/EventCard";
import axios from "axios";
import "./Trio/Calendar.css";
import Swal from "sweetalert2";

const submitButton = {
  backgroundColor: "#E25822",
  fontFamily: "Inika",
  fontSize: "20px",
  width: "400px",
  color: "black",
  ":hover": {
    backgroundColor: "#702963",
    color: "white",
  },
  ":focus": {
    outline: "none",
  },
};

function Testing() {
  const instance = axios.create({
    withCredentials: true,
  });
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await instance.get("http://localhost:2000/check");
        const decodedId = response.data.decoded;
        setUserId(decodedId);
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

  const handleShow = async () => {
    console.log(userId);
  };

  return (
    <>
      <Box>
        <Button sx={submitButton} onClick={handleShow}>
          Check user
        </Button>
      </Box>
    </>
  );
}

export default Testing;
