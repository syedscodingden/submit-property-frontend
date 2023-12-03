import React, { useLayoutEffect } from "react";
import { useFormik } from "formik";
import classes from "./PropertyAddress.module.css";
import Button from "@mui/material/Button";
import * as Yup from "yup";

const PropertyAddress = (props) => {
  const formik = useFormik({
    initialValues: {
      fullAddress: props.data.fullAddress,
    },
    validationSchema: Yup.object({
      fullAddress: Yup.string()
        .max(100, "Must be 100 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      props.next({ ...props.data, fullAddress: values.fullAddress });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.propertyAddress}>
        <div id="my-radio-group" className={classes.propertyAddressTitle}>
          3. Tell us about the full address of the property that you would like
          to sell ?
        </div>
        <div className={classes.addressContainer}>
          <input
            id="fullAddress"
            name="fullAddress"
            type="text"
            placeholder="Full Address...."
            onChange={formik.handleChange}
            value={formik.values.fullAddress}
            className={
              formik.touched.fullAddress && formik.errors.fullAddress
                ? classes.errorInputAddress
                : classes.inputAddress
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.fullAddress && formik.errors.fullAddress ? (
            <p className={classes.error}>{formik.errors.fullAddress}</p>
          ) : null}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
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

export default PropertyAddress;
