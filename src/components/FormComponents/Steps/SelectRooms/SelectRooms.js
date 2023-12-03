import React, { useState } from "react";
import { useFormik } from "formik";
import classes from "./SelectRooms.module.css";
import Button from "@mui/material/Button";

export default function SelectRooms(props) {
  const roomOptions = [
    { key: "Studio", value: "Studio" },
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3+", value: "3+" },
  ];

  const [selectedRoomType, setSelectedRoomType] = useState(
    props.data.typeOfApartment
  );
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      typeOfApartment: props.data.typeOfApartment,
    },
    onSubmit: (values) => {
      if (selectedRoomType === "") {
        setError(true);
        return;
      }
      props.next({ ...props.data, typeOfApartment: selectedRoomType });
      setError(false);
    },
  });

  const handleSelectTypeOfApartment = (option) => {
    setError(false);
    setSelectedRoomType(option);
  };

  // useEffect(() => )

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.selectRooms}>
        <div id="my-room-group" className={classes.roomTitle}>
          4. How many bedrooms does the property have ?
        </div>
        <div role="group" className={classes.roomOptionsGroup}>
          {roomOptions.map((roption) => {
            return (
              <div
                key={roption.key}
                className={
                  selectedRoomType === roption.value
                    ? classes.selectedRoomOption
                    : classes.roomOption
                }
                onClick={() => {
                  handleSelectTypeOfApartment(roption.value);
                }}
              >
                <span>{roption.value}</span>
                {selectedRoomType === roption.value && (
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
        </div>
        {error && <p className={classes.error}>Please select no of bedrooms</p>}
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
