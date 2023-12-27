import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdropApp} onClick={() => props.showModal()} />;
};


export default Backdrop;
