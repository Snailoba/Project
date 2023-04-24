import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";

function Login() {
  const inputRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const submitPassword = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "2513022") {
      if (!setStep) {
        setErrorMessage(
          "hint : You entered the correct password, but it look like there's something wrong in your function please check the props"
        );
      } else {
        setStep(1);
      }
    } else {
      setErrorMessage("Incorrect password !, The password is 2513022");
    }
  };
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      gap={5}
      component="form"
      onSubmit={submitPassword}
    >
      <Typography variant="h2">Please, enter the password</Typography>

      <TextField
        inputRef={inputRef}
        size="medium"
        label="Password is 2513022"
        variant="outlined"
        error={!!errorMessage}
      />
      {errorMessage && <Typography color={"red"}>{errorMessage}</Typography>}
      <Button type="submit" variant="contained" size="large" color="primary">
        Submit password
      </Button>
    </Box>
  );
}

export default Login;
