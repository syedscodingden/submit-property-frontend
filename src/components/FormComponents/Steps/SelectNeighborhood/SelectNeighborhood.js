import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import classes from "./SelectNeighborhood.module.css";
import Button from "@mui/material/Button";

const SelectNeighborhood = (props) => {
  const options = [
    { key: "Option 1", value: "Dubai Design District" },
    { key: "Option 2", value: "Palm Jumeirah" },
    { key: "Option 3", value: "Dubai Marina" },
    { key: "Option 4", value: "Jumeirah Beach Residences" },
    { key: "Option 5", value: "Jumeirah Lake Towers" },
    { key: "Option 6", value: "Dubai Media City" },
    { key: "Option 7", value: "Downtown Dubai" },
    { key: "Option 8", value: "Dubai Creek" },
    { key: "Option 9", value: "Business Bay" },
    { key: "Option 10", value: "Dubai Water Canal" },
  ]; // make it dynamic for each city
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(
    props.data.area
  );

  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (selectedNeighborhood === "") {
      setError(true);
      return;
    }
    props.next({ ...props.data, area: selectedNeighborhood });
  };

  const handleSelectNeighborhood = (selected) => {
    setError(false);
    setSelectedNeighborhood(selected);
  };

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form className={classes.selectNeighborhood}>
          <div id="my-radio-group" className={classes.neighborhoodTitle}>
            2. Choose the neighborhood your property is located in
          </div>
          <div className={classes.options}>
            {options.map((option, index) => {
              return (
                <div
                  key={index}
                  className={
                    selectedNeighborhood === option.value
                      ? `${classes.selectedOption}`
                      : `${classes.option}`
                  }
                  onClick={() => handleSelectNeighborhood(option.value)}
                >
                  {option.value}
                </div>
              );
            })}
          </div>
          {error && (
            <p className={classes.error}>Please select no of bedrooms</p>
          )}
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
        </Form>
      )}
    </Formik>
  );
};

export default SelectNeighborhood;
