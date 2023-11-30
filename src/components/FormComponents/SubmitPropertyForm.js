import React, { useState } from "react";
import Card from "../../UI/Card";
import classes from "./SubmitProperty.module.css";
import SelectCity from "./Steps/SelectCity/SelectCity";

const SubmitPropertyForm = (props) => {
  const [data, setData] = useState({
    city: "",
    area: "",
    fullAddress: "",
    numberOfBedrooms: 2,
    firstName: "",
    lastName: "",
    countryCode: 0,
    mobileNumber: 0,
    email: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [<SelectCity /> ]

  let fill = (2 / 5) * 100;
  

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <div className={classes.complete} style={{ width: `${fill}%` }}></div>
      </header>
      <div className={classes.formBackground}>
        <div className={classes.common}>
          <div>
            <span>Logo</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#0A2351"
              class="bi bi-x-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </div>
        <div className={classes.content}>
          {steps[currentStep]}
        </div>
      </div>
      {/* <footer className={classes.actions}></footer> */}
    </Card>
  );
};

export default SubmitPropertyForm;
