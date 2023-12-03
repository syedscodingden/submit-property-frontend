import React, { useState } from "react";
import classes from "./FormModal.module.css";
import ReactDOM from "react-dom";
import SubmitPropertyForm from "./FormComponents/SubmitPropertyForm";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={() => props.showModal()} />;
};

const FormModal = (props) => {
  return (
    <React.Fragment>
      {props.isShowing &&
        ReactDOM.createPortal(
          <Backdrop showModal={props.showModal} />,
          document.getElementById("backdrop")
        )}
      {props.isShowing &&
        ReactDOM.createPortal(
          <SubmitPropertyForm showModal={props.showModal} />,
          document.getElementById("submit-property-modal")
        )}
    </React.Fragment>
  );
};

export default FormModal;
