import React, { useState } from "react";
import Card from "../../UI/Card";
import classes from "./SubmitProperty.module.css";

const SubmitPropertyForm = (props) => {
  const [data, setData] = useState({
    city: "",
    area: "",
    fullAddress: "",
    numberOfBedrooms: 2,
    firstName: "",
    lastName: "",
    countryCode: 965,
    mobileNumber: 50123123,
    email: "",
  });

  let fill = (2 / 5) * 100;

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <div className={classes.complete} style={{ width: `${fill}%` }}></div>
      </header>
      <div className={classes.formBackground}>
        <div className={classes.content}>
          <div>{props.message}</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
      </div>
      {/* <footer className={classes.actions}></footer> */}
    </Card>
  );
};

export default SubmitPropertyForm;
