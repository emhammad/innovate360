import { useState } from 'react';
import Image from 'next/image';
import HorizontalStepper from './common/HorizontalStepper'; // adjust path as needed
import StatusCards from './common/StatusCard';
import Registration from "./progress/Registration";
import InvoiceCard from './progress/Invoice';
import AppliedNames from "./progress/NameApplied";
import ProcessDocuments from './progress/DocProcess';
import RegComplete from "./progress/RegComplete";
// Removed unused React icon imports - now using PNG icons

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const steps = [
    { title: 'Step 1', descrip: 'Registration' },
    { title: 'Step 2', descrip: 'Payment' },
    { title: 'Step 3', descrip: 'Verification' },
    { title: 'Step 4', descrip: 'Review' },
    { title: 'Step 5', descrip: 'Complete' }
  ];



  const cardSteps = [
    {
      title: 'Registration Pending',
      description: 'Your invoice is not paid. Kindly pay it to complete your registration.',
      icon: <Image src="/assets/img/icon/registration.png" alt="Registration" width={20} height={20} />,
      button: 'Pay Now',
      active: true
    },
    {
      title: 'Invoice Pending',
      description: 'Waiting for invoice to be paid',
      icon: <Image src="/assets/img/icon/invoice.png" alt="Invoice" width={20} height={20} />,
      button: 'View',
      active: false
    },
    {
      title: 'Name Applied',
      description: 'Your name is not approved. Kindly resubmit the names.',
      icon: <Image src="/assets/img/icon/company-name.png" alt="Company Name" width={20} height={20} />,
      button: 'Resubmit',
      active: false
    },
    {
      title: 'Processing',
      description: 'Your company registration is in process. Kindly e-sign the documents uploaded.',
      icon: <Image src="/assets/img/icon/processing.png" alt="Processing" width={20} height={20} />,
      button: 'View',
      active: false
    },
    {
      title: 'Company Registered',
      description: 'Your company is successfully registered.',
      icon: <Image src="/assets/img/icon/com-registration.png" alt="Company Registration" width={20} height={20} />,
      button: 'View',
      active: false
    }
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);

    // Mark all previous steps as completed when moving to next step
    if (index > activeStep) {
      const newCompletedSteps = [];
      for (let i = 0; i < index; i++) {
        newCompletedSteps.push(i);
      }
      setCompletedSteps(newCompletedSteps);
    }
  };
  const getProgressComponent = () => {
    switch (activeStep) {
      case 0:
        return <Registration />;
      case 1:
        return <InvoiceCard />;
      case 2:
        return <AppliedNames />;
      case 3:
        return <ProcessDocuments />;
      case 4:
        return <RegComplete />;
      default:
        return <Registration />;
    }
  };
  return (
    <div className="container-fluid p-4">
      <h3 className="mb-4" style={{ fontWeight: '600', color: '#333' }}> Dashboard</h3>
      <HorizontalStepper
        steps={cardSteps}
        activeStep={activeStep}
        completedSteps={completedSteps}
        handleStepClick={handleStepClick}
      />
      <StatusCards
        cardSteps={cardSteps}
        activeStep={activeStep}
        completedSteps={completedSteps}
        handleStepClick={handleStepClick} />
      {getProgressComponent()}
    </div>
  );
}
