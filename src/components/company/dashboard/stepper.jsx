"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Tick icon path
const tickIconPath = "/assets/img/icon/Tick.png";

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

export default function CompanyNameStep({
  shouldCheckUrlParams = false,
  initialStep = 0,
  initialCompletedSteps = [],
  onStepChange
}) {

  const [activeStep, setActiveStep] = useState(initialStep);
  const [completedSteps, setCompletedSteps] = useState(initialCompletedSteps);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    const token = localStorage.getItem('authToken');

    if (authStatus === 'true' && token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Update stepper state when initial props change
  useEffect(() => {
    setActiveStep(initialStep);
    setCompletedSteps(initialCompletedSteps);
  }, [initialStep, initialCompletedSteps]);

  const steps = [
    { title: "Choose company name", descrip: "Provide at least 5 names" },
    { title: "Choose nature of business", descrip: "Provide the key information we need" },
    { title: "Provide address", descrip: "Provide the detail needed" },
    { title: "Your NIF Number", descrip: "Confirm all the details of the campaign" },
    { title: "Company's capital amount (in euros)", descrip: "This is what we'll use to build the LP" },
    { title: "Company's shareholders", descrip: "Pick the plan for this campaign" },
    { title: "Business address", descrip: "Confirm all the details of the campaign" },
    { title: "Contact Details", descrip: "Confirm all the details of the campaign" },
    { title: "Passport/ID scan", descrip: "Confirm all the details of the campaign" },
    { title: "Marital status", descrip: "Confirm all the details of the campaign" },

  ];

  const handleStepClick = (index) => {
    // Only allow navigation to:
    // 1. Current step (no change)
    // 2. Completed steps (going back)
    // 3. Next step if current step is completed
    const isCurrentStep = index === activeStep;
    const isCompletedStep = completedSteps.includes(index);
    const isNextStep = index === activeStep + 1;
    const isCurrentStepCompleted = completedSteps.includes(activeStep);

    // Allow navigation if:
    // - It's the current step
    // - It's a completed step (going back)
    // - It's the next step and current step is completed
    const canNavigate = isCurrentStep || isCompletedStep || (isNextStep && isCurrentStepCompleted);

    if (!canNavigate) {
      return; // Don't allow navigation to unfilled future steps
    }

    if (index !== activeStep) {
      setCompletedSteps((prev) =>
        index > activeStep
          ? [...new Set([...prev, activeStep])]
          : prev.filter((step) => step !== activeStep)
      );
    }
    setActiveStep(index);

    // Notify parent component about step change
    if (onStepChange) {
      onStepChange(index, completedSteps);
    }
  };

  const handleNextStep = () => {
    // Mark current step as completed and move to next
    const newCompletedSteps = [...completedSteps, activeStep];
    const newActiveStep = activeStep + 1;

    setCompletedSteps(newCompletedSteps);
    setActiveStep(newActiveStep);

    // Notify parent component about step change
    if (onStepChange) {
      onStepChange(newActiveStep, newCompletedSteps);
    }
  };

  const getStepComponent = () => {
    switch (activeStep) {
      case 0:
        return <ChooseCompanyName onNext={handleNextStep} />;
      case 1:
        return <ChooseBusinessNature onNext={handleNextStep} />;
      case 2:
        return <HomeAddress onNext={handleNextStep} />;
      case 3:
        return <NIFNumber onNext={handleNextStep} />;
      case 4:
        return <CapitalAmount onNext={handleNextStep} />;
      case 5:
        return <Shareholders onNext={handleNextStep} />;
      case 6:
        return <BusinessAddress onNext={handleNextStep} />;
      case 7:
        return <ContactDetails onNext={handleNextStep} />;
      case 8:
        return <UploadIdDetails onNext={handleNextStep} />;
      case 9:
        return <MaritalStatus onNext={handleNextStep} />;
      default:
        return <div className="text-muted">Coming soon...</div>;
    }
  };

  return (
    <>
      <div id="stepper-component" className="d-flex w-100" style={{ minHeight: '100vh' }}>
        {/* Stepper sidebar - Background changes based on authentication */}
        <div
          className="d-flex flex-column"
          style={{
            width: "330px",
            backgroundColor: isAuthenticated ? 'rgb(245 245 245 / 54%)' : '#007C36', // Off-white when authenticated, dark green when not
            padding: '10px 24px 32px 24px',
            minHeight: '100vh'
          }}
        >
          {/* Logo */}
          <div className="mb-4 d-flex justify-content-start">
            {!isAuthenticated && (
              <Image
                src="/_next/static/media/innovate.4fcb1525.svg"
                alt="INNOVATE 360°"
                width={180}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            )}
          </div>

          {/* Steps List */}
          <ul className="list-unstyled position-relative flex-grow-1" style={{ paddingLeft: '0' }}>
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = completedSteps.includes(index);
              const isLast = index === steps.length - 1;

              // Determine if this step is clickable
              const isCurrentStep = index === activeStep;
              const isCompletedStep = completedSteps.includes(index);
              const isNextStep = index === activeStep + 1;
              const isCurrentStepCompleted = completedSteps.includes(activeStep);
              const isClickable = isCurrentStep || isCompletedStep || (isNextStep && isCurrentStepCompleted);

              return (
                <li
                  key={index}
                  className={`mb-4 position-relative d-flex align-items-start`}
                  role="button"
                  onClick={() => handleStepClick(index)}
                  style={{
                    cursor: isClickable ? "pointer" : "not-allowed",
                    // opacity: isClickable ? 1 : 0.5
                  }}
                >
                  {/* Step Circle */}
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: (isActive || isCompleted) ? (isAuthenticated ? '#007C36' : '#EDFF8B') : 'transparent',
                      border: (isActive || isCompleted) ? `2px solid ${isAuthenticated ? '#007C36' : '#EDFF8B'}` : `2px solid ${isAuthenticated ? '#007C36' : '#EDFF8B'}`,
                      zIndex: 2,
                      position: 'relative',
                      flexShrink: 0
                    }}
                  >
                    {/* Show tick for completed steps, inner dot for active steps */}
                    {isCompleted ? (
                      <Image
                        src={tickIconPath}
                        alt="Completed"
                        width={12}
                        height={12}
                        style={{
                          filter: isAuthenticated ? 'brightness(0) invert(1)' : 'none'
                        }}
                      />
                    ) : isActive ? (
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: isAuthenticated ? 'white' : '#1a5d1a'
                        }}
                      ></div>
                    ) : (
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: isAuthenticated ? '#007C36' : '#EDFF8B'
                        }}
                      ></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-grow-1">
                    <div
                      className="mb-1"
                      style={{
                        color: isCompleted ? '#28a745' : (isAuthenticated ? '#333' : 'white'),
                        fontSize: '14px',
                        lineHeight: '1.4',
                        fontWeight: '600',
                        // opacity: isClickable ? 1 : 0.6
                      }}
                    >
                      {step.title}
                    </div>
                    <div
                      style={{
                        color: isAuthenticated ? '#666' : '#b8d4c1',
                        fontSize: '12px',
                        lineHeight: '1.3'
                      }}
                    >
                      {step.descrip}
                    </div>
                  </div>

                  {/* Connector line */}
                  {!isLast && (
                    <div
                      className="position-absolute"
                      style={{
                        left: "11px",
                        top: "24px",
                        height: "calc(100% + -3px)",
                        width: "2px",
                        backgroundColor: isAuthenticated ? '#007C36' : '#EDFF8B',
                        zIndex: 1,
                      }}
                    ></div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Footer */}
          <div className="mt-auto d-flex justify-content-between align-items-center" style={{ color: isAuthenticated ? '#666' : '#FCFCFCB2', fontSize: '12px' }}>
            <span>© INNOVATE360</span>
            <span>Get Help</span>
          </div>
        </div>

        {/* Main content - White Background */}
        <div className="flex-grow-1 d-flex justify-content-start align-items-start" style={{ backgroundColor: 'white', padding: '10px 40px' }}>
          <div className='w-100'>
            {/* Dynamic step content */}
            {getStepComponent()}
          </div>
        </div>
      </div>
    </>
  );
}
