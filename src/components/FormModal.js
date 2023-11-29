import React from "react";
import classes from "./FormModal.module.css";
import ReactDOM from "react-dom";
import SubmitPropertyForm from "./FormComponents/SubmitPropertyForm";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const FormModal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <SubmitPropertyForm title={"Hello"} message={"Message"} />,
        document.getElementById("submit-property-modal")
      )}
    </React.Fragment>
  );
};

export default FormModal;
