import { useState, useEffect } from 'react';
import Image from 'next/image';
import HorizontalStepper from '../company/common/HorizontalStepper'; // adjust path as needed
import StatusCards from '../company/common/StatusCard';
import DocProccess from "./dashboard/docProcess";
import InvoiceFlow from './dashboard/invoice-flow';
import InvoiceSummary from './dashboard/invoice-summary';
import NifCompletedDocument from "../company/common/DownloadFile";
// Removed unused React icon imports - now using PNG icons
export default function Home({ onStepChange, onPaymentFlowChange }) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showPaymentFlow, setShowPaymentFlow] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration and localStorage initialization
  useEffect(() => {
    setIsHydrated(true);

    // Initialize from localStorage after hydration
    if (typeof window !== 'undefined') {
      const savedStep = localStorage.getItem('nifActiveStep');
      const savedCompleted = localStorage.getItem('nifCompletedSteps');

      if (savedStep) {
        setActiveStep(parseInt(savedStep, 10));
      }

      if (savedCompleted) {
        setCompletedSteps(JSON.parse(savedCompleted));
      }
    }
  }, []);

  // Notify parent when payment flow state changes
  useEffect(() => {
    if (onPaymentFlowChange) {
      onPaymentFlowChange(showPaymentFlow);
    }
  }, [showPaymentFlow, onPaymentFlowChange]);

  // Notify parent component when step changes
  const handleStepChange = (step) => {
    setActiveStep(step);
    if (onStepChange) {
      onStepChange(step);
    }
    // Save to localStorage only after hydration
    if (isHydrated && typeof window !== 'undefined') {
      localStorage.setItem('nifActiveStep', step.toString());
    }
  };

  // Mark steps as completed
  const markStepCompleted = (step) => {
    setCompletedSteps(prev => {
      const newCompleted = [...prev];
      if (!newCompleted.includes(step)) {
        newCompleted.push(step);
        // Save to localStorage only after hydration
        if (isHydrated && typeof window !== 'undefined') {
          localStorage.setItem('nifCompletedSteps', JSON.stringify(newCompleted));
        }
      }
      return newCompleted;
    });
  };

  // Check if step is accessible
  const isStepAccessible = (step) => {
    // Step 0 is always accessible
    if (step === 0) return true;

    // If all steps are completed, allow free navigation
    if (completedSteps.length >= 2) return true;

    // Only allow next step or completed steps
    return step === activeStep + 1 || completedSteps.includes(step);
  };

  // Handle payment flow
  const handlePayNow = () => {
    setShowPaymentFlow(true);
  };

  const handleBackToSummary = () => {
    setShowPaymentFlow(false);
  };

  const handleResetPaymentflow = () => {
    setShowPaymentFlow(false);
  }


  const cardSteps = [
    {
      title: 'NIF Registration',
      description: 'Please wait till your registration is complete.',
      icon: <Image src="/assets/img/icon/registration.png" alt="NIF Registration" width={40} height={40} />,
      button: 'View',
      active: true
    },
    {
      title: 'Invoice',
      description: 'Waiting for invoice to be paid',
      icon: <Image src="/assets/img/icon/invoice.png" alt="Invoice" width={40} height={40} />,
      button: 'Pay Now',
      active: false
    },
    {
      title: 'Complete',
      description: 'Your NIF registration is successfully completed.',
      icon: <Image src="/assets/img/icon/completed.png" alt="Complete" width={40} height={40} />,
      button: 'View',
      active: false
    }
  ];

  const handleStepClick = (index) => {
    // Check if step is accessible
    if (isStepAccessible(index)) {
      // Mark previous step as completed when moving forward
      if (index > activeStep) {
        markStepCompleted(activeStep);
      }
      handleStepChange(index);
    }
  };
  const getProgressComponent = () => {
    switch (activeStep) {
      case 0:
        return <DocProccess />;
      case 1:
        if (showPaymentFlow) {
          return <InvoiceFlow
            onBackToStep0={() => handleStepChange(0)}
            onBackToSummary={handleBackToSummary}
            onResetPaymentflow={handleResetPaymentflow}
            onNextToStep2={() => {
              markStepCompleted(1);
              handleStepChange(2);
            }}
          />;
        } else {
          return <InvoiceSummary onPayNow={handlePayNow} />;
        }
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
  // Show loading state until hydrated
  if (!isHydrated) {
    return (
      <div className="container-fluid pb-4 pt-2">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-2">
      {activeStep === 1 && showPaymentFlow ? "" : <>

        <HorizontalStepper
          steps={cardSteps}
          activeStep={activeStep}
          completedSteps={completedSteps}
          handleStepClick={handleStepClick}
          isStepAccessible={isStepAccessible}
        />
        <StatusCards
          cardSteps={cardSteps}
          activeStep={activeStep}
          completedSteps={completedSteps}
          handleStepClick={handleStepClick}
          isStepAccessible={isStepAccessible}
        />
      </>}

      {getProgressComponent()}
    </div>
  );
}
