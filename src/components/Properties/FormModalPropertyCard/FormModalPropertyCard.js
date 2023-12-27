import React, { useState } from "react";
import classes from "./FormModalPropertyCard.module.css";
import ReactDOM from "react-dom";

import Backdrop from "../../../UI/Backdrop";
import PropertyInvestorForm from "../PropertyInvestorForm/PropertyInvestorForm";

const FormModalPropertyCard = (props) => {
  return (
    <React.Fragment>
      {props.isShowingInvestorForm &&
        ReactDOM.createPortal(
          <Backdrop showModal={props.showInvestorModal} />,
          document.getElementById("backdrop-investor")
        )}
      {props.isShowingInvestorForm &&
        ReactDOM.createPortal(
          <PropertyInvestorForm
            data={props.propertyData}
            showModal={props.showInvestorModal}
            successfulSubmission={props.isSuccessfullySubmitted}
            onSuccessfulSubmission={props.onSuccessMessage}
          />,
          document.getElementById("submit-property-modal")
        )}
    </React.Fragment>
  );
};

export default FormModalPropertyCard;
