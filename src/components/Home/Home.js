import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import images from "../../assets/imageMap";
import ConnectWallet from "../../web3Connect/ConnectWallet";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button } from "@mui/material";

function Home(props) {
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  // const [props.walletAddress, props.OnWalletChange] = useState("");
  const [showSubmitPropertyButtonAlert, setShowSubmitPropertyButtonAlert] =
    useState(false);

  const handleLoginThroughWallet = (accounts) => {
    if (accounts.length === 0) {
      setButtonDisabled(true);
      props.onWalletChange(accounts);
      return;
    }
    props.onWalletChange(accounts);
    setButtonDisabled(false);
  };

  const handleSubmitPropertyClick = () => {
    if (props.walletAddress === "" || props.walletAddress === null) {
      setShowSubmitPropertyButtonAlert(true);
    } else {
      props.submitPropertyFormHandler();
    }
  };

  const handleInvestorFormClick = () => {
    if (props.walletAddress === "" || props.walletAddress === null) {
      setShowSubmitPropertyButtonAlert(true);
    } else {
      props.investorFormHandler();
    }
  };

  return (
    <>
      {showSubmitPropertyButtonAlert && (
        <Collapse in={showSubmitPropertyButtonAlert}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowSubmitPropertyButtonAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>Error</AlertTitle>
            You are not connected with your wallet —{" "}
            <strong>Please connect with your wallet!</strong>
          </Alert>
          {/* <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowSubmitPropertyButtonAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert> */}
        </Collapse>
      )}
      <header className={classes.headerClass}>
        <div className={classes.leftContainer}>
          <div
            className={classes.logo}
            style={{
              backgroundImage: `linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  ),
  url(${images.logo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <Button
            variant="outlined"
            sx={{ marginLeft: "1rem", height: "1.9rem" }}
            onClick={handleSubmitPropertyClick}
            // disabled={isButtonDisabled}
          >
            Submit Property
          </Button>
          <Button
            variant="outlined"
            sx={{ marginLeft: "1rem", height: "1.9rem" }}
            onClick={handleInvestorFormClick}
            // disabled={isButtonDisabled}
          >
            Buy Property
          </Button>
        </div>
        <div className={classes.rightContainer}>
          <ConnectWallet
            onWalletChange={handleLoginThroughWallet}
            walletAddress={props.walletAddress}
          />
        </div>
      </header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} sx={{ backgroundColor: "#f4f0ec" }}>
            <div className={classes.textHome}>
              <span className={classes.headingText}>
                The modern way to invest in Real Estate
              </span>
              <div>
                <span className={classes.descriptionText}>
                  Digitally invest in prime rental properties from anywhere in
                  the world !
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              className={classes.imageHome}
              style={{
                backgroundImage: `linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  ),
  url(${images.dubaiDesktop})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
