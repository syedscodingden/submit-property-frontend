import React, { useState } from "react";
import images from "../../assets/imageMap";
import classes from "./PropertyCard.module.css";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import FormModalPropertyCard from "./FormModalPropertyCard/FormModalPropertyCard";

function PropertyCard({ data, walletAddress }) {
  const [showInvestorModal, setShowInvestorModal] = useState(false);

  const investorFormModalDisplayHandler = () => {
    setShowInvestorModal(!showInvestorModal);
  };

  const handleInvestorDetails = () => {
    if (walletAddress === "") {
      return;
    }
    setShowInvestorModal(true);
  };

  return (
    <div className={classes.propertyCard}>
      <div className={classes.container}>
        <img src={images.dubaiDesktop} className={classes.imageCard} />
        <div className={classes.topLeft}>
          <Chip
            label="Featured"
            sx={{ backgroundColor: "orange", color: "white", width: "78px" }}
          />
        </div>
        <div className={classes.topRight}>
          <Chip
            label="For Rent"
            sx={{ backgroundColor: "green", color: "white", width: "78px" }}
          />
        </div>
      </div>
      <div className={classes.detailsContainer}>
        <h4 className={classes.propertyTitle}>
          {data.noOfRooms}
          {data.typeOfApartment !== "Studio"
            ? " bedroom " + data.typeOfApartment
            : " Apartment"}
        </h4>
        <div className={classes.propertyPrice1}>
          <h5>AED 150,000 {"  "}</h5>
        </div>
        <div className={classes.propertyPrice2}>
          <h5>AED {data.pricePerSqFt} / Per Sqft</h5>
        </div>
        <div className={classes.propertyCardDetails}>
          <div className={classes.propertyCardDetailsKey}>
            Annualized Return{" "}
          </div>
          <div className={classes.propertyCardDetailsValue}>
            {data.annualizedReturn}%
          </div>
        </div>
        <div className={classes.propertyCardDetails}>
          <div className={classes.propertyCardDetailsKey}>
            Annualized Appreciation{" "}
          </div>
          <div className={classes.propertyCardDetailsValue}>
            {data.annualizedAppreciation}%
          </div>
        </div>
        <div className={classes.propertyCardDetails}>
          <div className={classes.propertyCardDetailsKey}>
            Projected Gross Yield{" "}
          </div>
          <div className={classes.propertyCardDetailsValue}>
            {data.projectGrossYield}%
          </div>
        </div>
        <div className={classes.propertyCardDetails}>
          <div className={classes.propertyCardDetailsKey}>
            Projected Net Yield{" "}
          </div>
          <div className={classes.propertyCardDetailsValue}>
            {data.projectNetYield}%
          </div>
        </div>
        <div className={classes.propertyCardDetails}>
          <div className={classes.propertyCardDetailsKey}>Token Symbol </div>
          <div className={classes.propertyCardDetailsValue}>
            {data.tokenSymbol}
          </div>
        </div>

        <h5 className={classes.tokensRemaining}>Tokens Remaining 35678</h5>
        <div className={classes.propertLocation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="23"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
          <span className={classes.locationText}>
            {data.area}, {data.city}
          </span>
        </div>
        <div className={classes.buyPropertyButton}>
          <Button
            variant="contained"
            onClick={handleInvestorDetails}
            sx={{ backgroundColor: "#002244" }}
          >
            Buy Property
          </Button>
          {showInvestorModal && (
            <FormModalPropertyCard
              // showModal={formModalDisplayHandler}
              // isSuccessfullySubmitted={showSuccessMessage}
              // onSuccessMessage={formSubmissionSuccessHandler}
              propertyData={data}
              isShowingInvestorForm={showInvestorModal}
              showInvestorModal={investorFormModalDisplayHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
