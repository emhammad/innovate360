"use client";
import { useState } from "react";


// Import your step components
import ChooseCompanyName from "../steps/ChooseCompanyName";
import ChooseBusinessNature from "../steps/BusinessNature";
import HomeAddress from "../steps/homeAdress";
import NIFNumber from "../steps/NIF";
import CapitalAmount from "../steps/CapitalAmount";
import Shareholders from "../steps/shareholder";
import BusinessAddress from "../steps/BusinessAdress";
import ContactDetails from "../steps/ContactDetails";
import UploadIdDetails from "../steps/UploadDetails";
import MaritalStatus from "../steps/MaritalStatus";

export default function CompanyNameStep() {
  
    const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    { title: "Choose company name", descrip: "Provide at least 5 names" },
    { title: "Choose nature of business", descrip: "Provide the key information we need" },
    { title: "Provide address", descrip: "Provide the detail needed" },
    { title: "Your NIF Number", descrip: "Confirm all the details of the campaign" },
    { title: "Company’s capital amount (in euros)", descrip: "This is what we'll use to build the LP" },
    { title: "Company’s shareholders", descrip: "Pick the plan for this campaign" },
    { title: "Business address", descrip: "Confirm all the details of the campaign" },
    { title: "Contact Details", descrip: "Confirm all the details of the campaign" },
    { title: "Passport/ID scan", descrip: "Confirm all the details of the campaign" },
    { title: "Marital status", descrip: "Confirm all the details of the campaign" },
    
  ];

  const handleStepClick = (index) => {
    if (index !== activeStep) {
      setCompletedSteps((prev) =>
        index > activeStep
          ? [...new Set([...prev, activeStep])]
          : prev.filter((step) => step !== activeStep)
      );
    }
    setActiveStep(index);
  };

  const getStepComponent = () => {
    switch (activeStep) {
      case 0:
        return <ChooseCompanyName />;
      case 1:
        return <ChooseBusinessNature />;
      case 2:
         return <HomeAddress/>;
      case 3:
        return <NIFNumber/>;
      case 4:
        return <CapitalAmount/>;
      case 5:
        return <Shareholders/>;
      case 6:
        return <BusinessAddress/>;
      case 7:
        return <ContactDetails/>;
      case 8:
        return <UploadIdDetails/>;
      case 9:
        return <MaritalStatus/>;                 
      default:
        return <div className="text-muted">Coming soon...</div>;
    }
  };

  return (
    <>
        <div className="d-flex w-100">
          {/* Stepper sidebar */}
          <div
            className=" p-4 d-flex flex-column"
            style={{ width: "280px" }}
          >

            <ul className="list-unstyled position-relative flex-grow-1">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isCompleted = completedSteps.includes(index);
                const isLast = index === steps.length - 1;

                return (
                  <li
                    key={index}
                    className={`mb-4 position-relative ps-1 ${
                      isActive ? "fw-bold " : ""
                    }`}
                    role="button"
                    onClick={() => handleStepClick(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Badge */}
                    <span
                      className={`badge rounded-circle me-2 ${
                        isCompleted ? "bg-success text-white" : "bg-success text-white"
                      }`}
                      style={{ zIndex: 1, position: "relative" }}
                    >
                      {isCompleted ? "✓" : "●"}
                    </span>

                    {/* Step text */}
                    {isCompleted ? (
                      <span className="step-title">{step.title}</span>
                    ) : (
                      <span className="step-title">{step.title}</span>
                    )}
                    <br />
                    <small className="ms-4 step-descrip">{step.descrip}</small>

                    {/* Connector line */}
                    {!isLast && (
                      <span
                        className="position-absolute"
                        style={{
                          left: "13px",
                          top: "27px",
                          height: "calc(100% - 5px)",
                          width: "2px",
                          backgroundColor: isCompleted
                            ? "#80bd9a"
                            : "#80bd9a",
                          zIndex: 0,
                        }}
                      ></span>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto text-white-50 small pt-4">
              © INNOVATE360 <span className="float-end">Get Help</span>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-grow-1 p-4 bg-light">
            <div className="container-fluid">
              

              {/* Dynamic step content */}
              {getStepComponent()}
            </div>
          </div>
        </div>
    </>
  );
}
