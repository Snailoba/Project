import React, { useState } from "react";
import Box from "@mui/material";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(0);
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {step === 0 && <Register setStep={setStep} />}
      {step === 1 && <Login setStep={setStep} />}
      {step === 2 && <Home />}
    </Box>
  );
};

export default App;
