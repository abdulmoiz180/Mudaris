import * as React from "react";
import Box from "@mui/material/Box";
import "./getstarted.css";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";

function GetStart() {
  const { data, language } = useLanguage();

  if (!data) return <h2>data not loading</h2>;

  const fontClass = language === "persian" ? "rubik" : "inter";

  return (
    <Container className="get-start-container">
      {/* Displaying the title */}
      <h1 className={`clr-white get-start-heading ${fontClass}`}>
        {data.GetStarted.title1}
        <span>{data.GetStarted.span}</span>
        {data.GetStarted.title2}
      </h1>

      {/* Input field with placeholder */}
      <Box className="get-email-field">
        <TextField
          type="email"
          placeholder={data.GetStarted.inputfield}
          variant="outlined"
          className={`custom-input ${fontClass}`}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#FFFFFF26", // Outline color
              },
              "&:hover fieldset": {
                borderColor: "#FFFFFF26", // Outline color on hover
              },
              "& .MuiInputBase-input": {
                color: "#FFF", // Text color
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FFFFFF26", // Outline color when focused
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#fff", // Placeholder color
            },
          }}
        />

        <button
          className={` button-text ${fontClass} ${language === "persian" ? "my-with" : "get-start-button"}`}
        >
          {data.GetStarted.buttontext}
        </button>
      </Box>

      {/* Credit card information */}
      <p className={`get-start-credit input-text ${fontClass}`}>
        {data.GetStarted.creditcard}
      </p>
    </Container>
  );
}

export default GetStart;
