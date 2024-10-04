import React, { useState, useRef } from "react";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import "./addcourse.css";
import CustomField from "../../TextFieldComponent/index";
import { db, storage } from "@utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setOpenSnackbar(true);
    setSnackbarMessage("Uploading course...");

    try {
      // Upload image and video to Firebase Storage
      const courseImageFile = formData.courseImage;
      const courseVideoFile = formData.courseVideo;

      let courseImageUrl = "";
      let courseVideoUrl = "";

      // Upload Course Image
      if (courseImageFile) {
        const imageStorageRef = ref(
          storage,
          `courseImages/${courseImageFile.name}`
        );
        const imageSnapshot = await uploadBytes(
          imageStorageRef,
          courseImageFile
        );
        courseImageUrl = await getDownloadURL(imageSnapshot.ref); // Get the image download URL
      }

      // Upload Course Video
      if (courseVideoFile) {
        const videoStorageRef = ref(
          storage,
          `courseVideos/${courseVideoFile.name}`
        );
        const videoSnapshot = await uploadBytes(
          videoStorageRef,
          courseVideoFile
        );
        courseVideoUrl = await getDownloadURL(videoSnapshot.ref); // Get the video download URL
      }

      // Now store the form data along with the image and video URLs in Firestore
      const courseDataToStore = {
        ...formData,
        courseImage: courseImageUrl, // Store the image URL
        courseVideo: courseVideoUrl, // Store the video URL
      };

      await addDoc(collection(db, "courses"), courseDataToStore);

      // Show success message
      setSnackbarMessage("Course added to Firestore successfully!");
      setFormData(initialData); // Reset form data
    } catch (error) {
      console.error("Error adding course -> ", error);
      setSnackbarMessage("Error adding course!");
    }
  };

  const handleCancel = () => {
    setFormData(initialData);
    if (imageInputRef.current) imageInputRef.current.value = ""; // Clear image input
    if (videoInputRef.current) videoInputRef.current.value = ""; // Clear video input
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
          {/* Render input fields */}
          {fields.map((field) => (
            <Box key={field.name} component="div" sx={{ mb: 2 }}>
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
              accept="image/*"
              ref={imageInputRef}
              onChange={(e) =>
                setFormData({ ...formData, courseImage: e.target.files[0] })
              }
            />
          </Box>

          {/* Video Upload Input */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1">Upload Course Video:</Typography>
            <input
              type="file"
              accept="video/*"
              ref={videoInputRef}
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
            >
              Submit
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
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
  courseFee: 0,
  courseDuration: "",
  professorName: "",
  maximumStudents: 0,
  contactNumber: "",
  courseImage: null,
  courseVideo: null,
};
