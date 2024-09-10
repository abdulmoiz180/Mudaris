import * as React from "react";
import Box from "@mui/material/Box";
import "../../global.css";
import "./getstarted.css";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { useLanguage } from "../../globalContext/GlobalProvider";

function GetStart() {
  const { data,language } = useLanguage();

  return (
    <Container className="get-start-container">
      {/* Displaying the title */}
      <h1 className="clr-white inter get-start-heading">
        {data[6].title1}
        <span>{data[6].span}</span>
        {data[6].title2}
      </h1>
   
      {/* Input field with placeholder */}
      <Box className="get-email-field">
        <TextField
          type="email"
          placeholder={data[6].inputfield}
          variant="outlined"
          className="custom-input"
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

        {/* Button with text */}
        <button className={`get-start-button inter button-text ${language==="english" ? `m-right`:` ` }`}>
          {data[6].buttontext}
        </button>
      </Box>

      {/* Credit card information */}
      <p className="get-start-credit inter input-text">
        {data[6].creditcard}
      </p>
    </Container>
  );
}

export default GetStart;
