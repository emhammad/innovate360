import { useState } from 'react';
import Image from 'next/image';
import HorizontalStepper from '../common/HorizontalStepper'; // adjust path as needed
import StatusCards from '../common/StatusCards';
import Registration from "./progress/Registration";
import InvoiceCard from './progress/Invoice';
import AppliedNames from "./progress/NameApplied";
import ProcessDocuments from './progress/DocProcess';
import RegComplete from "./progress/RegComplete";
// Removed unused React icon imports - now using PNG icons

export default function Home(CaseId) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(['']);

  const steps = [
    { title: 'Step 1', descrip: 'Registration' },
    // { title: 'Step 2', descrip: 'Payment' },
    { title: 'Step 2', descrip: 'Verification' },
    { title: 'Step 3', descrip: 'Review' },
    { title: 'Step 4', descrip: 'Complete' }
  ];



  const cardSteps = [
    {
      title: 'Registration',
      description: 'Your invoice is not paid. Kindly pay it to complete your registration.',
      icon: '/assets/img/icon/registration.png',
      button: 'View',
      active: true
    },
    // {
    //   title: 'Invoice',
    //   description: 'Waiting for invoice to be paid',
    //   icon: '/assets/img/icon/invoice.png',
    //   button: 'View',
    //   active: false
    // },
    {
      title: 'Company Name',
      description: 'Your name is not approved. Kindly resubmit the names.',
      icon: '/assets/img/icon/company-name.png',
      button: 'View',
      active: false
    },
    {
      title: 'Processing',
      description: 'Your company registration is in process. Kindly e-sign the documents uploaded.',
      icon: '/assets/img/icon/processing.png',
      button: 'View',
      active: false
    },
    {
      title: 'Company Registration',
      description: 'Your company is successfully registered.',
      icon: '/assets/img/icon/com-registration.png',
      button: 'View',
      active: false
    }
  ];

  const handleStepClick = (index) => {
    // if (index <= activeStep) {

    // }
    setActiveStep(index);
  };

  const handleCheckboxChange = (stepIndex, isChecked) => {
    if (isChecked) {
      // Add the step to completed steps if not already present
      if (!completedSteps.includes(stepIndex)) {
        setCompletedSteps(prev => [...prev, stepIndex]);
      }
    } else {
      // Remove the step from completed steps
      setCompletedSteps(prev => prev.filter(step => step !== stepIndex));
    }
  };
  const getProgressComponent = () => {
    switch (activeStep) {
      case 0:
        return <Registration />;
      // case 1:
      //   return <InvoiceCard />;
      case 1:
        return <AppliedNames />;
      case 2:
        return <ProcessDocuments />;
      case 3:
        return <RegComplete />;
      default:
        return <Registration />;
    }
  };

  const handleBackToDashboard = () => {
    // Navigate back to admin dashboard
    window.location.href = '/lawyer/dashboard';
  };

  return (
    <div className="container-fluid py-5 pt-4">
      {/* Back Button */}
      <div className="d-flex justify-content-start mb-3">
        <button
          className="btn"
          onClick={handleBackToDashboard}
          style={{
            borderRadius: '20px',
            fontSize: '14px',
            padding: '8px 16px',
            color: '#007C36',
            fontWeight: '600'
          }}
        >
          ← Back to Dashboard
        </button>
      </div>
      <HorizontalStepper
        steps={cardSteps}
        activeStep={activeStep}
        completedSteps={completedSteps}
        handleStepClick={handleStepClick}
      />
      <StatusCards
        panel="lawyer"
        cardSteps={cardSteps}
        activeStep={activeStep}
        completedSteps={completedSteps}
        handleStepClick={handleStepClick}
        handleCheckboxChange={handleCheckboxChange} />
      {getProgressComponent()}
    </div>
  );
}
