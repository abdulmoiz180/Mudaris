import React from "react";
import { TextField,Box } from "@mui/material";
import "./textfield.css";

const CustomTextField = ({
  label,
  name,
  placeholder, // Keep this for optional placeholder usage
  value,
  onChange,
  error,
  helperText,
  required = false,
  type = "text",
  multiline = false,
  rows = 1,
}) => {
  return (
    <>
    <Box className="DashboardaddCourseInputFieldIndividualDiv">
      <label className="dm-sans DashboardaddCourseLabel">{label}</label>
      <TextField
        className="AddCoursePageFieldIndividualField"
        placeholder={placeholder} // Optional: Use for additional guidance if needed
        name={name}
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={helperText}
        fullWidth
        required={required}
        type={type}
        multiline={multiline}
        rows={rows}
      />
      </Box>
    </>
  );
};

export default CustomTextField;
