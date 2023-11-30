import React from "react";
import { Formik, Form, Field } from "formik";
import classes from "./SelectCity.module.css";
import Button from "@mui/material/Button";

export default function SelectCity() {
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

  return (
    <Formik
      initialValues={{
        picked: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
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
            {radioOptions.map((roption) => (
              <label key={roption.key} className={classes.radioButton}>
                <Field type="radio" name="picked" value={roption.value} />
                {roption.value}
              </label>
            ))}
            <div>Picked: {values.picked}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "#0A2351" }}
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
