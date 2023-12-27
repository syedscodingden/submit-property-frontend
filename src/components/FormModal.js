import React, { useState } from "react";
import classes from "./FormModal.module.css";
import ReactDOM from "react-dom";
import SubmitPropertyForm from "./FormComponents/SubmitPropertyForm";
import Backdrop from "../UI/Backdrop";
import InvestorForm from "./FormComponents/InvestorForm";

const FormModal = (props) => {
  return (
    <React.Fragment>
      {props.isShowing &&
        ReactDOM.createPortal(
          <Backdrop showModal={props.showModal} />,
          document.getElementById("backdrop")
        )}
      {props.isShowingInvestorForm &&
        ReactDOM.createPortal(
          <Backdrop showModal={props.showInvestorModal} />,
          document.getElementById("backdrop-investor")
        )}
      {props.isShowing &&
        ReactDOM.createPortal(
          <SubmitPropertyForm
            showModal={props.showModal}
            successfulSubmission={props.isSuccessfullySubmitted}
            onSuccessfulSubmission={props.onSuccessMessage}
          />,
          document.getElementById("submit-property-modal")
        )}
      {props.isShowingInvestorForm &&
        ReactDOM.createPortal(
          <InvestorForm
            showModal={props.showInvestorModal}
            successfulSubmission={props.isSuccessfullySubmitted}
            onSuccessfulSubmission={props.onSuccessMessage}
          />,
          document.getElementById("submit-property-modal")
        )}
    </React.Fragment>
  );
};

export default FormModal;
