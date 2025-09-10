import { useState } from 'react';
import Image from 'next/image';
import HorizontalStepper from '../../company/common/HorizontalStepper'; // adjust path as needed
import StatusCards from '../../company/common/StatusCard';
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
    { title: 'Step 2', descrip: 'Payment' },
    { title: 'Step 3', descrip: 'Verification' },
    { title: 'Step 4', descrip: 'Review' },
    { title: 'Step 5', descrip: 'Complete' }
  ];



  const cardSteps = [
    {
      title: 'Registration',
      description: 'Your invoice is not paid. Kindly pay it to complete your registration.',
      icon: <Image src="/assets/img/icon/registration.png" alt="Registration" width={40} height={40} />,
      button: 'View',
      active: true
    },
    {
      title: 'Invoice',
      description: 'Waiting for invoice to be paid',
      icon: <Image src="/assets/img/icon/invoice.png" alt="Invoice" width={40} height={40} />,
      button: 'View',
      active: false
    },
    {
      title: 'Company Name',
      description: 'Your name is not approved. Kindly resubmit the names.',
      icon: <Image src="/assets/img/icon/company-name.png" alt="Company Name" width={40} height={40} />,
      button: 'View',
      active: false
    },
    {
      title: 'Processing',
      description: 'Your company registration is in process. Kindly e-sign the documents uploaded.',
      icon: <Image src="/assets/img/icon/processing.png" alt="Processing" width={40} height={40} />,
      button: 'View',
      active: false
    },
    {
      title: 'Company Registration',
      description: 'Your company is successfully registered.',
      icon: <Image src="/assets/img/icon/com-registration.png" alt="Company Registration" width={40} height={40} />,
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
    <div className="container-fluid py-5 pt-4">
      <h3 className='mb-2' style={{ fontWeight: '600', color: '#3D3D3D' }}>John Doe</h3>
      <p className='mb-4 ' style={{ fontSize: '14px', color: '#6C757D' }}>olivia@untitledui.com</p>
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
