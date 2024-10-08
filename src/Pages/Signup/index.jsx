import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Button,
  InputAdornment,
  TextField,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./form.css";
import signUpSchema from "../../Schema/signUpSchema";
import Google from "../../assets/Icons/google.svg";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { FacebookRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../features/auth/authThunk";

const Signup = ({ open, handleClose, toggle }) => {
  const dispatch = useDispatch(); // Get the dispatch function

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("Form Data", values);
      // Dispatch the signUpUser action with email and password
      dispatch(
        signUpUser({ email: values.email, password: values.password })
      ).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          navigate("/dashboard"); // Redirect after successful signup
        } else {
          console.log("Signup failed", result.payload); // Handle failure (optional)
        }
      });
    },
  });

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      className="dialog-form"
    >
      <form onSubmit={formik.handleSubmit} className="form">
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
          className="inter form-title"
        >
          Let’s join us
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogActions className="column g-10 ">
            <Button
              variant="contained"
              type="button"
              className="google-btn signup-btn-group dm-sans"
            >
              <img src={Google} alt="image" />
              Sign up with Google
            </Button>
            <Button
              variant="contained"
              type="button"
              className="facebook-btn dm-sans signup-btn-group"
            >
              <FacebookRounded color="white" />
              Sign up with Facebook
            </Button>
          </DialogActions>

          <Divider>
            <p className="clr-white divider">Or, Sign up with your email</p>
          </Divider>
          <div className="g-20 column flex-center">
            {fields.map((field, index) => (
              <div className="column flex-center g-10">
                <label
                  htmlFor={field.label}
                  key={index}
                  className="clr-white dm-sans signup-form-label"
                >
                  {field.label}
                </label>
                <TextField
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          {field.icon}
                        </InputAdornment>
                      ),
                    },
                  }}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched[field.name] &&
                    Boolean(formik.errors[field.name])
                  }
                  helperText={
                    formik.touched[field.name] && formik.errors[field.name]
                  }
                  sx={{
                    width: "400px",

                    "& .MuiOutlinedInput-root": {
                      borderRadius: "40px",
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    input: { color: "white" }, // Optional: change text color to white
                  }}
                />
              </div>
            ))}
          </div>

          <div className="column g-10 mt-20 ml-20">
            <p className="dm-sans fs-13 ">
              Minimum 8 characters, mix of letters, numbers, and symbols
            </p>
            <p className="dm-sans fs-12 ">
              By signing up, you agree to our Terms of Use and Privacy Policy.
            </p>
          </div>

          <DialogActions className="flex flex-center">
            <Button
              variant="contained"
              type="submit"
              className="signup-btn signup-btn-group dm-sans "
            >
              Sign Up
            </Button>
          </DialogActions>

          <p className="clr-white dm-sans center">
            Already have an account?{" "}
            <Button onClick={toggle} className="link-btn">
              Sign in now
            </Button>
          </p>
        </DialogContent>
      </form>
    </BootstrapDialog>
  );
};

export default Signup;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const fields = [
  {
    name: "username",
    type: "text",
    label: "Your Name",
    placeholder: "e.g John Smith",
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "yourname@mail.co",
    icon: <VisibilityOutlinedIcon />,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "enter your password",
    icon: <LockOutlinedIcon />,
  },
];
