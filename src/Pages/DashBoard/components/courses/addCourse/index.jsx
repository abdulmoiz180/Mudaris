import React, { useState, useRef } from "react";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import "./addcourse.css";
import CustomField from "../../TextFieldComponent/index";
import { db } from "@utils/firebase";
import { collection, addDoc } from "firebase/firestore";
export const AddCourse = () => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        formErrors[field] = `${field} is required`;
      }
    });
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked...");

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setOpenSnackbar(true);
      setSnackbarMessage("Processing...");

      try {
        // Create a copy of formData, excluding courseImage and courseVideo
        const { courseImage, courseVideo, ...dataToStore } = formData;

        // Log the data to see what is being sent to Firestore
        console.log("Data to store:", dataToStore);

        // Store the data in Firestore
        await addDoc(collection(db, "courses"), dataToStore);
        console.log("Data successfully added to Firestore");

        // Update the success message
        setSnackbarMessage("Course added successfully to Firestore!");

        // Reset form data after successful submission
        setFormData(initialData);
      } catch (error) {
        console.error("Error adding course to Firestore:", error);
        setSnackbarMessage(
          "Error adding course to Firestore! Please try again."
        );
      }
    }
  };

  const handleCancel = () => {
    // Reset form data
    setFormData(initialData);

    // Clear file inputs
    if (imageInputRef.current) {
      imageInputRef.current.value = ""; // Clear image input
    }
    if (videoInputRef.current) {
      videoInputRef.current.value = ""; // Clear video input
    }

    setErrors({});
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <section className="AddCoursePage">
      <Box className="AddCoursePageParentContainer" sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom color="#fff" className="inter">
          Add New Course
        </Typography>
        <Box className="AddCoursePageFieldContainer">
          {fields.map((field) => (
            <Box
              className="AddCoursePageFieldIndividual"
              key={field.name}
              component="div"
              sx={{ mb: 2 }}
            >
              <CustomField
                fullWidth
                id={field.name}
                label={field.label}
                placeholder={field.label}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
                required={field.required}
                error={!!errors[field.name]}
                helperText={errors[field.name]}
                multiline={field.multiline}
                rows={field.rows}
                type={field.type}
              />
            </Box>
          ))}

          {/* Image Upload Input */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1">Upload Course Image:</Typography>
            <input
              type="file"
              className="addCourseaddButton"
              name="courseImage"
              accept="image/*"
              ref={imageInputRef} // Use ref for the image input
              onChange={(e) =>
                setFormData({ ...formData, courseImage: e.target.files[0] })
              }
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body1">Upload Course Video:</Typography>
            <input
              type="file"
              name="courseVideo"
              className="addCourseaddButton"
              ref={videoInputRef} // Use ref for the video input
              onChange={(e) =>
                setFormData({ ...formData, courseVideo: e.target.files[0] })
              }
            />
          </Box>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mr: 2 }}
              className="DashBoardAddCourseSubmitButton"
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              className="DashBoardAddCourseCancelButton"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Box>
        </form>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </section>
  );
};

const fields = [
  { name: "courseName", label: "Course Name", required: true },
  { name: "courseCode", label: "Course Code", required: true },
  {
    name: "courseDetails",
    label: "Course Details",
    required: true,
    multiline: true,
    rows: 4,
  },
  { name: "startDate", label: "Start From", type: "date", required: true },
  { name: "courseDuration", label: "Course Duration", required: true },
  { name: "courseFee", label: "Course Fee", required: true },
  { name: "professorName", label: "Professor Name", required: true },
  { name: "maximumStudents", label: "Maximum Students", required: false },
  {
    name: "contactNumber",
    label: "Contact Number",
    required: true,
    type: "tel",
  },
];

const initialData = {
  courseName: "",
  courseCode: "",
  courseDetails: "",
  startDate: "",
  courseFee: "",
  courseDuration: "",
  professorName: "",
  maximumStudents: "",
  contactNumber: "",
  courseImage: null,
  courseVideo: null,
};
