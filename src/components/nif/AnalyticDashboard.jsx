import { useState } from 'react';
import Image from 'next/image';
import HorizontalStepper from '../company/common/HorizontalStepper'; // adjust path as needed
import StatusCards from '../company/common/StatusCard';
import DocProccess from "./dashboard/docProcess";
import InvoiceFlow from './dashboard/invoice-flow';
import NifCompletedDocument from "../company/common/DownloadFile";
// Removed unused React icon imports - now using PNG icons
export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(['']);


  const cardSteps = [
    {
      title: 'NIF Registration',
      description: 'Please wait till your registration is complete.',
      icon: <Image src="/assets/img/icon/registration.png" alt="NIF Registration" width={20} height={20} />,
      button: 'View',
      active: true
    },
    {
      title: 'Invoice',
      description: 'Waiting for invoice to be paid',
      icon: <Image src="/assets/img/icon/invoice.png" alt="Invoice" width={20} height={20} />,
      button: 'Pay Now',
      active: false
    },
    {
      title: 'Complete',
      description: 'Your NIF registration is successfully completed.',
      icon: <Image src="/assets/img/icon/Tick.png" alt="Complete" width={20} height={20} />,
      button: 'View',
      active: false
    }
  ];

  const handleStepClick = (index) => {
    // if (index <= activeStep) {

    // }
    setActiveStep(index);
  };
  const getProgressComponent = () => {
    switch (activeStep) {
      case 0:
        return <DocProccess />;
      case 1:
        return <InvoiceFlow />;
      case 2:
        return <NifCompletedDocument
          file={{
            name: 'NIF-Confirmation.pdf',
            size: '200 KB',
            url: '#',
          }}
        />
          ;
      default:
        return <DocProccess />;
    }
  };
  return (
    <div className="container-fluid pb-4 pt-4">
      {activeStep === 1 ? "" : <>
        <h6 className="mb-4" style={{ fontSize: '24px', color: '#3D3D3D', fontWeight: '600' }}>Dashboard</h6>

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
      </>}

      {getProgressComponent()}
    </div>
  );
}
