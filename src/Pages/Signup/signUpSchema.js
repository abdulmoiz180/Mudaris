import * as Yup from "yup";
const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  username: Yup.string().required("Username is required"),
});

export default signUpSchema;
