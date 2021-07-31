import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Enter at least 6 characters")
    .required("Password is required"),
});

const MaterialUiLoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="form-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="img-input">
            <img
              src="https://www.iconpacks.net/icons/2/free-user-login-icon-3057-thumb.png"
              alt="login-image"
            />
          </div>
          <div className="input">
            <h2>Login Form</h2>
          </div>
          <div className="input">
            <TextField
              required
              fullWidth
              variant="outlined"
              name="email"
              label="Email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="input">
            <TextField
              required
              fullWidth
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
          <div className="input">
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </div>
          <div className="input">
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default MaterialUiLoginForm;
