import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import classes from "./SelectCity.module.css";
import Button from "@mui/material/Button";

export default function SelectCity(props) {
  const radioOptions = [
    { key: "Option 1", value: "Dubai" },
    { key: "Option 2", value: "Sharjah" },
    { key: "Option 3", value: "Abu Dhabi" },
    { key: "Option 4", value: "Ajman" },
    { key: "Option 5", value: "Ras Al Khaimah" },
    { key: "Option 6", value: "Fujairah" },
    { key: "Option 7", value: "Umm Al Quwain" },
    { key: "Option 8", value: "Madinat Zayed" },
    { key: "Option 9", value: "Al Ain" },
    { key: "Option 10", value: "Ruwais" },
    { key: "Option 11", value: "Jebel Ali" },
    { key: "Option 12", value: "Hatta" },
    { key: "Option 13", value: "Ar-Rams" },
    { key: "Option 14", value: "Kalba" },
  ];

  const [error, setError] = useState(false);

  const handleSubmit = (values) => {
    if (values.picked === "") {
      setError(true);
      return;
    }
    let selectedCity = values.picked;
    props.next({ ...props.data, city: selectedCity });
  };

  const handleOptionChange = (option) => {
    setError(false);
    props.backgroundImageChange(option);
  };

  return (
    <Formik
      initialValues={{ ...props.data, picked: props.data.city }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className={classes.selectCity}>
          <div id="my-radio-group" className={classes.radioTitle}>
            1. Select the city your property is located in
          </div>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className={classes.radioGroup}
          >
            {radioOptions.map((roption) => {
              return (
                <label
                  key={roption.key}
                  className={classes.radioButton}
                  onChange={(e) => {
                    handleOptionChange(e.target.value);
                  }}
                >
                  <Field type="radio" name="picked" value={roption.value} />
                  {roption.value}
                </label>
              );
            })}
            {/* <div>Picked: {values.picked}</div> */}
          </div>
          {error && (
            <p className={classes.error}>Please select no of bedrooms</p>
          )}
          <div className={classes.buttonContainer}>
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
        </Form>
      )}
    </Formik>
  );
}
