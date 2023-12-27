import classes from "./FinancialDetails.module.css";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import ReactFlagsSelect from "react-flags-select";

function FinancialDetails(props) {
  const formik = useFormik({
    initialValues: {
      pricePerSqFt: props.data.pricePerSqFt,
      annualizedReturn: props.data.annualizedReturn,
      annualizedAppreciation: props.data.annualizedAppreciation,
      projectGrossYield: props.data.projectGrossYield,
      projectNetYield: props.data.projectNetYield,
      tokens: props.data.tokens,
      tokenSymbol: props.data.tokenSymbol,
      preferredCurrency: props.data.preferredCurrency,
      typeOfFinancialReturn: props.data.typeOfFinancialReturn,
    },
    validationSchema: Yup.object({
      pricePerSqFt: Yup.number().required("Required"),
      annualizedReturn: Yup.number().required("Required"),
      annualizedAppreciation: Yup.number().required("Required"),
      projectGrossYield: Yup.number().required("Required"),
      projectNetYield: Yup.number().required("Required"),
      tokens: Yup.number().required("Required"),
      tokenSymbol: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(3, "Must be 3 characters only")
        .required("Required"),
      preferredCurrency: Yup.string().max(25, "Must be 25 characters or less"),
    }),
    onSubmit: (values) => {
      console.log("Submitting");
      props.next(
        {
          ...props.data,
          pricePerSqFt: values.pricePerSqFt,
          annualizedReturn: values.annualizedReturn,
          annualizedAppreciation: values.annualizedAppreciation,
          projectGrossYield: values.projectGrossYield,
          projectNetYield: values.projectNetYield,
          tokens: values.tokens,
          tokenSymbol: values.tokenSymbol,
          preferredCurrency: values.preferredCurrency,
          typeOfFinancialReturn: values.typeOfFinancialReturn,
        },
        true
      );
    },
  });

  const handleRadioButtons = (e) =>
    (formik.values.typeOfFinancialReturn = e.target.value);

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <div className={classes.personalDetails}>
        <div id="my-radio-group" className={classes.personalDetailsTitle}>
          6. Let’s us know about the financial details of your property
        </div>
        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>Price Per SqFt*</label>
          <input
            id="pricePerSqFt"
            name="pricePerSqFt"
            type="number"
            placeholder="Price per sqft...."
            onChange={formik.handleChange}
            value={formik.values.pricePerSqFt}
            className={
              formik.touched.pricePerSqFt && formik.errors.pricePerSqFt
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.pricePerSqFt && formik.errors.pricePerSqFt ? (
            <p className={classes.error}>{formik.errors.pricePerSqFt}</p>
          ) : null}
        </div>

        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>
            Annualized Return*
          </label>
          <input
            id="annualizedReturn"
            name="annualizedReturn"
            type="number"
            placeholder="Annualized Return...."
            onChange={formik.handleChange}
            value={formik.values.annualizedReturn}
            className={
              formik.touched.annualizedReturn && formik.errors.annualizedReturn
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.annualizedReturn && formik.errors.annualizedReturn ? (
            <p className={classes.error}>{formik.errors.annualizedReturn}</p>
          ) : null}
        </div>

        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>
            Annualized Appreciation*
          </label>
          <input
            id="annualizedAppreciation"
            name="annualizedAppreciation"
            type="number"
            placeholder="Annualized Appreciation...."
            onChange={formik.handleChange}
            value={formik.values.annualizedAppreciation}
            className={
              formik.touched.annualizedAppreciation &&
              formik.errors.annualizedAppreciation
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.annualizedAppreciation &&
          formik.errors.annualizedAppreciation ? (
            <p className={classes.error}>
              {formik.errors.annualizedAppreciation}
            </p>
          ) : null}
        </div>

        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>
            Asset Gross Yield*
          </label>
          <input
            id="projectGrossYield"
            name="projectGrossYield"
            type="number"
            placeholder="Project Gross Yield...."
            onChange={formik.handleChange}
            value={formik.values.projectGrossYield}
            className={
              formik.touched.projectGrossYield &&
              formik.errors.projectGrossYield
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.projectGrossYield &&
          formik.errors.projectGrossYield ? (
            <p className={classes.error}>{formik.errors.projectGrossYield}</p>
          ) : null}
        </div>

        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>Asset Net Yield*</label>
          <input
            id="projectNetYield"
            name="projectNetYield"
            type="number"
            placeholder="Project Net Yield...."
            onChange={formik.handleChange}
            value={formik.values.projectNetYield}
            className={
              formik.touched.projectNetYield && formik.errors.projectNetYield
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.projectNetYield && formik.errors.projectNetYield ? (
            <p className={classes.error}>{formik.errors.projectNetYield}</p>
          ) : null}
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
          />
          {formik.touched.tokenSymbol && formik.errors.tokenSymbol ? (
            <p className={classes.error}>{formik.errors.tokenSymbol}</p>
          ) : null}
        </div>
        <div className={classes.personalDetailsContainer}>
          <label className={classes.personalInfolabel}>Tokens*</label>
          <input
            id="tokens"
            name="tokens"
            type="number"
            placeholder="No Of Tokens...."
            onChange={formik.handleChange}
            value={formik.values.tokens}
            className={
              formik.touched.tokens && formik.errors.tokens
                ? classes.errorInputPersonalDetails
                : classes.inputPersonalDetails
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.tokens && formik.errors.tokens ? (
            <p className={classes.error}>{formik.errors.tokens}</p>
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

        <div className={classes.radioButtonsContainer}>
          <div>
            <label className={classes.personalInfolabel}>
              Type Of Financial Return*
            </label>
          </div>
          <input
            type="radio"
            id="mi"
            name="group"
            value="mi"
            onChange={(e) => handleRadioButtons(e)}
            required
          />
          <label htmlFor="mi" style={{ color: "#002244" }}>
            Monthly Income
          </label>
          <br />

          <input
            type="radio"
            id="cg"
            name="group"
            value="cg"
            onChange={(e) => handleRadioButtons(e)}
          />
          <label htmlFor="cg" style={{ color: "#002244" }}>
            Capital Gain
          </label>
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

export default FinancialDetails;
