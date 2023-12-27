import React, { useState, useEffect } from "react";
import FormModal from "./components/FormModal";
import Home from "./components/Home/Home";
import Toast from "react-bootstrap/Toast";
import ReactDOM from "react-dom";
import "./App.css";
import Backdrop from "./UI/Backdrop";
import Modal from "react-bootstrap/Modal";
import Properties from "./components/Properties/Properties";
import Filters from "./components/Filters/Filters";
import axios from "axios";

function App() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showInvestorFormModal, setShowInvestorFormModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [filter, setFilter] = useState("cg");
  const [properties, setProperties] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");

  const formModalDisplayHandler = () => {
    setShowFormModal(!showFormModal);
  };

  const handleWalletChange = (accounts) => {
    if (accounts.length === 0) {
      setWalletAddress("");
      return;
    }
    setWalletAddress(accounts[0]);
  };

  const handleFilterChange = (currFilter) => {
    setFilter(currFilter);
  };

  const investorFormModalDisplayHandler = () => {
    setShowInvestorFormModal(!showInvestorFormModal);
  };

  const formSubmissionSuccessHandler = (formData) => {
    console.log("Successful");
    setShowSuccessMessage(true);
    setProperties((prevData) => {
      return [...prevData, formData];
    });
  };

  const toggleSuccessMessage = () => {
    setShowSuccessMessage(!showSuccessMessage);
  };

  useEffect(() => {
    async function getAllProperties() {
      const response = await axios.get("http://localhost:8000/getProperties");
      setProperties(response.data.properties);
    }
    getAllProperties();
  }, []);

  return (
    <>
      <Home
        submitPropertyFormHandler={formModalDisplayHandler}
        investorFormHandler={investorFormModalDisplayHandler}
        walletAddress={walletAddress}
        onWalletChange={handleWalletChange}
      />
      {/* <ConnectWallet /> */}
      <div>
        {(showFormModal || showInvestorFormModal) && (
          <FormModal
            isShowing={showFormModal}
            showModal={formModalDisplayHandler}
            isSuccessfullySubmitted={showSuccessMessage}
            onSuccessMessage={formSubmissionSuccessHandler}
            isShowingInvestorForm={showInvestorFormModal}
            showInvestorModal={investorFormModalDisplayHandler}
          />
        )}

        {showSuccessMessage && (
          <Modal show={showSuccessMessage} onHide={toggleSuccessMessage}>
            <Modal.Header closeButton>
              <Modal.Title>
                <span className="toastHeading">Submission Success</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Toast
                show={true}
                onClose={toggleSuccessMessage}
                delay={3000}
                autohide
                className="toastModal"
                style={{ backgroundColor: "#00fa9a" }}
              >
                <Toast.Body>
                  Property has been successfully submitted
                </Toast.Body>
              </Toast>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        )}

        {/* <div style={{ textAlign: "center" }}>
          <h2>Please Click on the Submit Property Button to view the form</h2>
          <button onClick={formModalDisplayHandler}>Submit Property</button>
        </div> */}
        <Filters filter={filter} onFilterChange={handleFilterChange} />
        <Properties walletAddress={walletAddress} filter={filter} properties={properties} />
      </div>
    </>
  );
}

export default App;
