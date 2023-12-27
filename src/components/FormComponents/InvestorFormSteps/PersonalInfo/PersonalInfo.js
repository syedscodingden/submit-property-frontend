import React, { useState } from "react";
import { useFormik } from "formik";
import classes from "./PersonalInfo.module.css";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import ReactFlagsSelect from "react-flags-select";

const PersonalInfo = (props) => {
  const [country, setCountry] = useState(props.data.countryCode);
  const [countryCodeError, setCountryCodeError] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: props.data.firstName,
      lastName: props.data.lastName,
      phoneNumber: props.data.phoneNumber,
      email: props.data.email,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Required"),
      phoneNumber: Yup.string()
        .max(10, "Must be less than 10 digits")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      if (country === "") {
        setCountryCodeError(true);
        return;
      }
      props.next({
        ...props.data,
        firstName: values.firstName,
        lastName: values.lastName,
        countryCode: country,
        phoneNumber: values.phoneNumber,
        email: values.email,
      });
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <div className={classes.personalDetails}>
        <div id="my-radio-group" className={classes.personalDetailsTitle}>
          1. Let’s get to know each other
        </div>
        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>First Name*</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name..."
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className={
              formik.touched.firstName && formik.errors.firstName
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className={classes.error}>{formik.errors.firstName}</p>
          ) : null}
        </div>
        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name..."
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className={
              formik.touched.lastName && formik.errors.lastName
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className={classes.error}>{formik.errors.lastName}</p>
          ) : null}
        </div>
        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>Phone Number*</label>
          <div className={classes.phoneNumberContainer}>
            <div>
              <ReactFlagsSelect
                className={classes.selectCountryCode}
                selected={country}
                onSelect={(code) => {
                  setCountryCodeError(false);
                  setCountry(code);
                }}
                fullWidth={false}
                showSelectedLabel={false}
                optionsSize={16}
                selectedSize={20}
                searchable
              />
            </div>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Phone Number..."
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              className={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? classes.errorPhoneNumber
                  : classes.phoneNumber
              }
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <p className={classes.error}>{formik.errors.phoneNumber}</p>
          ) : null}
          {countryCodeError && country === "" ? (
            <p className={classes.error}>Select a Country</p>
          ) : null}
        </div>
        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>Email*</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email..."
            onChange={formik.handleChange}
            value={formik.values.email}
            className={
              formik.touched.email && formik.errors.email
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={classes.error}>{formik.errors.email}</p>
          ) : null}
        </div>
        <div className={classes.buttonsContainer}>
          <Button
            variant="contained"
            type="button"
            sx={{
              backgroundColor: "#0A2351",
              marginRight: "20px",
              textTransform: "capitalize",
              ":hover": { backgroundColor: "#5D76A9" },
            }}
            onClick={() => props.prev()}
          >
            Back
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#0A2351",
              textTransform: "capitalize",
              ":hover": { backgroundColor: "#5D76A9" },
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
