import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import classes from "../SelectRooms/SelectRooms.module.css";

export default function SelectApartment(props) {
  const typeOfApartmentOptions = [
    { key: "Studio", value: "Studio" },
    { key: "Apartment", value: "Apartment" },
    { key: "Villa", value: "Villa" },
    { key: "Mansion", value: "Mansion" },
  ];

  const [typeOfApartment, setTypeOfApartment] = useState(
    props.data.typeOfApartment
  );
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      typeOfApartment: props.data.typeOfApartment,
    },
    validationSchema: Yup.object({
      typeOfApartment: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log("valuess", values.typeOfApartment);
      console.log("state", typeOfApartment);
      if (typeOfApartment === "" && values.typeOfApartment === "") {
        setError(true);
        return;
      }
      props.next({
        ...props.data,
        typeOfApartment:
          values.typeOfApartment === ""
            ? typeOfApartment
            : values.typeOfApartment,
      });
      setError(false);
    },
  });

  const handleSelectTypeOfApartment = (option) => {
    setError(false);
    setTypeOfApartment(option);
    formik.values.typeOfApartment = "";
  };

  // useEffect(() => )

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.selectRooms}>
        <div id="my-room-group" className={classes.roomTitle}>
          4. What is the type of your property ?
        </div>
        <div role="group" className={classes.roomOptionsGroup}>
          {typeOfApartmentOptions.map((roption) => {
            return (
              <div
                key={roption.key}
                className={
                  typeOfApartment === roption.value
                    ? classes.selectedRoomOption
                    : classes.roomOption
                }
                onClick={() => {
                  handleSelectTypeOfApartment(roption.value);
                }}
              >
                <span>{roption.value}</span>
                {typeOfApartment === roption.value && (
                  <span className={classes.selectedCheck}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                )}
              </div>
            );
          })}
          <input
            id="typeOfApartment"
            name="typeOfApartment"
            type="text"
            placeholder="Type Of property, if not mentioned...."
            onChange={(e) => {
              formik.handleChange(e);
              setTypeOfApartment("");
            }}
            value={formik.values.typeOfApartment}
            className={classes.inputNoOfRooms}
            onBlur={formik.handleBlur}
          />
          {formik.touched.typeOfApartment && formik.errors.typeOfApartment ? (
            <p className={classes.error}>{formik.errors.typeOfApartment}</p>
          ) : null}
        </div>
        {error && (
          <p className={classes.error}>
            Please select Type Of Property or enter your own
          </p>
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
      </div>
    </form>
  );
}
