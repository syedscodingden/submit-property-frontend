import React, { useEffect, useState, useLayoutEffect } from "react";
import Card from "../../UI/Card";
import classes from "./SubmitProperty.module.css";
import SelectCity from "./Steps/SelectCity/SelectCity";
import SelectNeighborhood from "./Steps/SelectNeighborhood/SelectNeighborhood";
import images from "../../assets/imageMap";
import PropertyAddress from "./Steps/PropertyAddress/PropertyAddress";
import SelectRooms from "./Steps/SelectRooms/SelectRooms";
import PersonalDetails from "./Steps/PersonalDetails/PersonalDetails";

const SubmitPropertyForm = (props) => {
  const [data, setData] = useState({
    city: "",
    area: "",
    fullAddress: "",
    typeOfApartment: "",
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    email: "",
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
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState("");
  const [windowWidth, setWindowWidth] = useState(1500);
  const [currentCity, setCurrentCity] = useState("Dubai");

  const makeApiRequest = (formData) => {
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
    <SelectCity
      next={handleNextStep}
      data={data}
      backgroundImageChange={handleBackgroundImageChange}
    />,
    <SelectNeighborhood
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
    <PropertyAddress next={handleNextStep} prev={handlePrevStep} data={data} />,
    <SelectRooms next={handleNextStep} prev={handlePrevStep} data={data} />,
    <PersonalDetails next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  let fill = ((currentStep + 1) / 5) * 100;

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
            <span>Logo</span>
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

export default SubmitPropertyForm;
