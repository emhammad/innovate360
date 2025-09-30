import { useState, useEffect } from 'react';
import Image from 'next/image';
import AdminHorizontalStepper from '../../common/AdminHorizontalStepper';
import AdminStatusCards from '../../common/AdminStatusCards';
import AdminNifDocProcess from './NifDocProcess';
import AdminNifInvoiceSummary from './NifInvoiceSummary';
import AdminNifCompletedDocument from './NifCompletedDocument';
import AdminNifProcessing from './NifProcessing';


export default function AdminNifStepper({ onStepChange, onPaymentFlowChange }) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showPaymentFlow, setShowPaymentFlow] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration and localStorage initialization
  useEffect(() => {
    setIsHydrated(true);

    // Initialize from localStorage after hydration
    if (typeof window !== 'undefined') {
      const savedStep = localStorage.getItem('adminNifActiveStep');
      const savedCompleted = localStorage.getItem('adminNifCompletedSteps');

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
      localStorage.setItem('adminNifActiveStep', step.toString());
    }
  };

  // Mark steps as completed
  const markStepCompleted = (step) => {
    if (!completedSteps.includes(step)) {
      const newCompleted = [...completedSteps, step];
      setCompletedSteps(newCompleted);
      if (isHydrated && typeof window !== 'undefined') {
        localStorage.setItem('adminNifCompletedSteps', JSON.stringify(newCompleted));
      }
    }
  };

  // Define steps for the stepper
  const cardSteps = [
    {
      title: 'NIF Registration',
      description: 'Please wait till your registration is complete.',
      icon: '/assets/img/icon/registration.png',
      button: 'View',
      active: true
    },
    {
      title: 'Processing',
      description: 'Kindly e-sign the documents uploaded.',
      icon: '/assets/img/icon/processing.png',
      button: 'View',
      active: false
    },
    {
      title: 'Complete',
      description: 'Your NIF registration is successfully completed.',
      icon: '/assets/img/icon/completed.png',
      button: 'View',
      active: false
    }
  ];

  const handleStepClick = (index) => {

    // Mark previous step as completed when moving forward
    if (index > activeStep) {
      markStepCompleted(activeStep);
    }
    handleStepChange(index);

  };

  const handleCheckboxChange = (stepIndex, isChecked) => {
    if (isChecked) {
      markStepCompleted(stepIndex);
    } else {
      setCompletedSteps(prev => prev.filter(step => step !== stepIndex));
      if (isHydrated && typeof window !== 'undefined') {
        localStorage.setItem('adminNifCompletedSteps', JSON.stringify(completedSteps.filter(step => step !== stepIndex)));
      }
    }
  };

  const getProgressComponent = () => {
    switch (activeStep) {
      case 0:
        return <AdminNifDocProcess />;
      
      case 1:
        return <AdminNifProcessing />;
      case 2:
        return <AdminNifCompletedDocument
          file={{
            name: 'NIF-Confirmation.pdf',
            size: '200 KB',
            url: '#',
          }}
        />;
      default:
        return <AdminNifDocProcess />;
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

  const handleBackToDashboard = () => {
    // Navigate back to admin dashboard
    window.location.href = '/lawyer/dashboard';
  };

  return (
    <div className="pt-2">
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

      {activeStep === 1 && showPaymentFlow ? "" : <>
        <AdminHorizontalStepper
          steps={cardSteps}
          activeStep={activeStep}
          completedSteps={completedSteps}
          handleStepClick={handleStepClick}
        />
        <AdminStatusCards
          cardSteps={cardSteps}
          activeStep={activeStep}
          completedSteps={completedSteps}
          handleStepClick={handleStepClick}
          handleCheckboxChange={handleCheckboxChange}
        />
      </>}

      <div className="container-fluid pb-4 pt-2">
        {getProgressComponent()}
      </div>
    </div>
  );
}
