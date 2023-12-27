import classes from "./InvestorPreferences.module.css";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";

function InvestorPreferences(props) {
  const formik = useFormik({
    initialValues: {
      tokenSymbol: props.data.tokenSymbol,
      noOfTokens: props.data.noOfTokens,
      preferredCurrency: props.data.preferredCurrency,
    },
    validationSchema: Yup.object({
      tokenSymbol: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(3, "Must be 3 characters only")
        .required("Required"),
      noOfTokens: Yup.number().required("Required"),
      preferredCurrency: Yup.string().max(25, "Must be 25 characters or less"),
    }),
    onSubmit: (values) => {
      console.log("Submitting");
      props.next(
        {
          ...props.data,
          tokenSymbol: values.tokenSymbol,
          noOfTokens: values.noOfTokens,
          preferredCurrency: values.preferredCurrency,
        },
        true
      );
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <div className={classes.personalDetails}>
        <div id="my-radio-group" className={classes.personalDetailsTitle}>
          2. Let’s us know about the financial details of your property
        </div>
        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>Token Symbol*</label>
          <input
            id="tokenSymbol"
            name="tokenSymbol"
            type="text"
            placeholder="Token Symbol..."
            onChange={formik.handleChange}
            value={formik.values.tokenSymbol}
            className={
              formik.touched.tokenSymbol && formik.errors.tokenSymbol
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
            style={{ pointerEvents: "none", opacity: "0.5" }}
            disabled
          />
          {formik.touched.tokenSymbol && formik.errors.tokenSymbol ? (
            <p className={classes.error}>{formik.errors.tokenSymbol}</p>
          ) : null}
        </div>
        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>No of Tokens*</label>
          <input
            id="noOfTokens"
            name="noOfTokens"
            type="number"
            placeholder="No Of Tokens...."
            onChange={formik.handleChange}
            value={formik.values.noOfTokens}
            className={
              formik.touched.noOfTokens && formik.errors.noOfTokens
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.noOfTokens && formik.errors.noOfTokens ? (
            <p className={classes.error}>{formik.errors.noOfTokens}</p>
          ) : null}
        </div>

        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>
            Preferred Currency*
          </label>
          <input
            id="preferredCurrency"
            name="preferredCurrency"
            type="text"
            placeholder="Preferred Currency..."
            onChange={formik.handleChange}
            value={formik.values.preferredCurrency}
            className={
              formik.touched.preferredCurrency &&
              formik.errors.preferredCurrency
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.preferredCurrency &&
          formik.errors.preferredCurrency ? (
            <p className={classes.error}>{formik.errors.preferredCurrency}</p>
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
}

export default InvestorPreferences;
