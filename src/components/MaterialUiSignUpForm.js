import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  firstname: Yup.string().required('Enter First Name'),
  lastname: Yup.string().required('Enter Last Name'),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Enter at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password match failed")
    .required("Confirm Password Required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number required!"),
});

const MaterialUiSignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phone: "",
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
              src="https://www.iconpacks.net/icons/2/free-user-signup-icon-3058-thumb.png"
              alt="signup-image"
            />
          </div>
          <div className="input">
            <h2>SignUp Form</h2>
          </div>
          <div className="name-input">
            <TextField
              required
              // fullWidth
              className="first-name"
              variant="outlined"
              name="firstname"
              label="First Name"
              value={formik.values.firstname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.firstname && Boolean(formik.errors.firstname)}
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
            <TextField
              required
              // fullWidth
              className="last-name"
              variant="outlined"
              name="lastname"
              label="Last Name"
              value={formik.values.lastname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
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
            <TextField
              required
              fullWidth
              variant="outlined"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </div>
          <div className="input">
            <TextField
              required
              fullWidth
              multiline
              rows={1}
              rowsMax={4}
              // inputProps={{ maxLength: 150 }}
              variant="outlined"
              name="address"
              label="Address"
              value={formik.values.address}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </div>
          <div className="input">
            <TextField
              required
              fullWidth
              variant="outlined"
              name="phone"
              label="Phone number"
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </div>
          <div className="input">
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </div>
          <div className="input">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Log In
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default MaterialUiSignUpForm;
