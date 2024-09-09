import * as React from "react";
import Box from "@mui/material/Box";
import "../../global.css"
import "./getstarted.css"
import { Container } from "@mui/material";
import { TextField } from '@mui/material';
import "../../Seed.js"

function GetStart() {
  return (
    <Container className = "container">
   <h1 className="clr-white inter main-heading">Get Started with a <span>Free</span> Trial</h1>
   <Box className = "field">
   <TextField
  type="email"
  placeholder="Your email"
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

   <button className="button inter button-text">Join waitlist</button>
   </Box>
   <p className="credit inter input-text">No Credit card required. 7-days free trial</p>
 </Container>

  );
}

export default GetStart;
 

