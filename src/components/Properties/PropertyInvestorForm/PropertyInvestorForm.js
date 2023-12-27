import React, { useEffect, useState, useLayoutEffect } from "react";
import images from "../../../assets/imageMap";
import axios from "axios";

import Card from "../../../UI/Card";
import FinancialPreferences from "../../FormComponents/InvestorFormSteps/FinancialPreferences/FinancialPreferences";
import classes from "../../FormComponents/SubmitProperty.module.css";
import InvestorInfo from "./Steps/InvestorInfo";
import InvestorPreferences from "./Steps/InvestorPreferences";

const PropertyInvestorForm = (props) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    email: "",
    tokenSymbol: props.data.tokenSymbol,
    noOfTokens: null,
    preferredCurrency: "",
    propertyId: props.data._id,
  });

  const imageSpecificData = {
    Dubai: {
      mobile: images.dubaiMobile,
      desktop: images.dubaiDesktop,
      tab: images.dubaiTab,
    },
    Sharjah: {
      mobile: images.sharjahMobile,
      desktop: images.sharjahDesktop,
      tab: images.sharjahMobile,
    },
    "Abu Dhabi": {
      mobile: images.dubaiMobile,
      desktop: images.dubaiDesktop,
      tab: images.dubaiTab,
    },
    Ajman: {
      mobile: images.sharjahMobile,
      desktop: images.sharjahDesktop,
      tab: images.sharjahMobile,
    },
    "Ras Al Khaimah": {
      mobile: images.dubaiMobile,
      desktop: images.dubaiDesktop,
      tab: images.dubaiTab,
    },
    Fujairah: {
      mobile: images.sharjahMobile,
      desktop: images.sharjahDesktop,
      tab: images.sharjahMobile,
    },
    "Umm Al Quwain": {
      mobile: images.dubaiMobile,
      desktop: images.dubaiDesktop,
      tab: images.dubaiTab,
    },
    "Madinat Zayed": {
      mobile: images.sharjahMobile,
      desktop: images.sharjahDesktop,
      tab: images.sharjahMobile,
    },
    "Al Ain": {
      mobile: images.dubaiMobile,
      desktop: images.dubaiDesktop,
      tab: images.dubaiTab,
    },
    Ruwais: {
      mobile: images.sharjahMobile,
      desktop: images.sharjahDesktop,
      tab: images.sharjahMobile,
    },
    "Jebel Ali": {
      mobile: images.dubaiMobile,
      desktop: images.dubaiDesktop,
      tab: images.dubaiTab,
    },
    Hatta: {
      mobile: images.sharjahMobile,
      desktop: images.sharjahDesktop,
      tab: images.sharjahMobile,
    },
    "Ar-Rams": {
      mobile: images.dubaiMobile,
      desktop: images.dubaiDesktop,
      tab: images.dubaiTab,
    },
    Kalba: {
      mobile: images.sharjahMobile,
      desktop: images.sharjahDesktop,
      tab: images.sharjahMobile,
    },
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState("");
  const [windowWidth, setWindowWidth] = useState(1500);
  const [currentCity, setCurrentCity] = useState("Dubai");

  const makeApiRequest = async (formData) => {
    await axios.post("http://localhost:8000/submitUser", { ...formData });
    // props.onSuccessfulSubmission();
    props.showModal();
    console.log("Form Submitted", formData); //backend request
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeApiRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const handleBackgroundImageChange = (option) => {
    setCurrentCity(option);
  };

  const handleCityBackgroundChange = () => {
    if (windowWidth <= 319 || (windowWidth > 319 && windowWidth <= 480)) {
      setCurrentBackgroundImage(imageSpecificData[currentCity].mobile);
    } else if (windowWidth > 480 && windowWidth <= 1200) {
      setCurrentBackgroundImage(imageSpecificData[currentCity].tab);
    } else {
      setCurrentBackgroundImage(imageSpecificData[currentCity].desktop);
    }
  };
  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
      handleCityBackgroundChange();
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [windowWidth, currentCity]);

  const steps = [
    <InvestorInfo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <InvestorPreferences
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
  ];

  let fill = ((currentStep + 1) / steps.length) * 100;

  let imageURL = "../../assets/dubaiTest.jpg";

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <div
          className={classes.complete}
          style={{ width: `${fill}%`, transition: "width 0.9s" }}
        ></div>
      </header>
      <div
        style={{
          backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.5),
          rgba(255, 255, 255, 0.5)
        ),
        url(${currentBackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          objectFit: "cover",
          objectPsition: "center",
          opacity: 1,
          transition: `opacity 0.4s ease-in-out`,
        }}
      >
        <div className={classes.common}>
          <div>
            <span>
              <img className={classes.logo} src={images.tranparentLogo} />
            </span>
          </div>
          <div onClick={() => props.showModal()} style={{ cursor: "pointer" }}>
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
        <div className={classes.content}>{steps[currentStep]}</div>
      </div>
    </Card>
  );
};

export default PropertyInvestorForm;
