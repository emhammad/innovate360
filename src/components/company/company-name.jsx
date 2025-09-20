import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import logo_img from "@assets/img/logo/innovate.svg";

// Import step components
import ChooseCompanyName from './steps/ChooseCompanyName';
import ChooseBusinessNature from './steps/BusinessNature';

export default function CompanyNameStep() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

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

  const steps = [
    { title: "Choose company name", descrip: "Provide atleast 5 names" },
    { title: 'Choose nature of business', descrip: "Provide the key information we need" },
    { title: 'Provide address', descrip: "Provide the detail needed" },
    { title: 'Company’s capital amount (in euros)', descrip: "This is what we'll used to build the LP" },
    { title: 'Company’s shareholders', descrip: "Pick the plan for this campaign" },
    { title: 'Business address', descrip: "Confirm all the details of the campaign" },
    { title: 'Contact Details', descrip: "Confirm all the details of the campaign" },
    { title: 'Passport/ID scan', descrip: "Confirm all the details of the campaign" },
    { title: 'Marital status', descrip: "Confirm all the details of the campaign" },
    { title: 'Your NIF Number', descrip: "Confirm all the details of the campaign" },
  ];

  const getStepComponent = () => {
    switch (activeStep) {
      case 0:
        return <ChooseCompanyName />;
      case 1:
        return <ChooseBusinessNature />;
      // Add more cases here for other steps
      default:
        return <div className="text-muted">Coming soon...</div>;
    }
  };

  return (
    <>
      <Head>
        <title>Company Setup - Innovate360</title>
      </Head>

      <div className="d-flex" style={{ minHeight: '100vh' }}>
        {/* Sidebar */}
        <div className="bg-success text-white p-4" style={{ width: '280px' }}>
          <Image className='mb-20' src={logo_img} alt="theme-pure" />

          <div className="step-list-container position-relative">
            {/* Connecting vertical line */}
            <div className="step-line"></div>

            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = completedSteps.includes(index);

              return (
                <div
                  key={index}
                  className="d-flex align-items-start step-item"
                  role="button"
                  onClick={() => handleStepClick(index)}
                >
                  {/* Dot */}
                  <div
                    className={`step-indicator me-3 mt-1 
                    ${isActive ? 'active' : ''}
                    ${isCompleted ? 'completed' : ''}
                  `}
                  >
                    {isCompleted ? <span className="checkmark">✔</span> : ''}
                  </div>

                  {/* Label */}
                  <div>
                    <span className={isActive ? 'step-title fw-bold text-white' : 'step-title text-white-50'}>
                      {step.title}
                    </span>
                    <div className="step-descrip text-white-50">{step.descrip}</div>
                  </div>
                </div>
              );
            })}
          </div>



          <div className="mt-auto text-white-50 small pt-4">
            © INNOVATE360 <span className="float-end">Get Help</span>
          </div>
        </div>

        {/* Dynamic Step Content */}
        <div className="flex-grow-1 p-4 bg-light">
          <div className="container" style={{ maxWidth: '600px' }}>
            <hr />

            {/* Load Step Component */}
            {getStepComponent()}
          </div>
        </div>
      </div>

      <style jsx>{`
  .step-list-container {
    position: relative;
    padding-left: 0px;
  }
  .step-title
  {
    font-size: 13px;
  }
  .step-descrip
  {
    font-size:10px;
  }  
  .step-line {
    position: absolute;
    top: 6px; /* aligns with dot center */
    bottom: 0;
    left: 6px; /* half of dot size (14px + 2px border) / 2 */
    width: 2px;
    background-color: #edff8b;
    z-index: 0; /* behind dots */
  }

  .step-item {
    position: relative;
    z-index: 2;
  }

  .step-item:not(:last-child) {
    margin-bottom: 10px;
  }

  .step-indicator {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid #edff8b;
    background-color: white;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    color: #1e1e1e;
  }

  .step-indicator.active {
    background-color: #edff8b;
    transform: scale(1.2);
  }

  .step-indicator.completed {
    background-color: #edff8b;
    border-color: #edff8b;
    color: #1e1e1e;
  }

  .checkmark {
    font-size: 10px;
    color: #1e1e1e;
  }

  .step-item:hover .step-indicator {
    border-color: #fff;
  }
`}</style>


    </>
  );
}
