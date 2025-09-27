import { useState, useEffect } from 'react';
import Image from 'next/image';
import AdminHorizontalStepper from '../../common/AdminHorizontalStepper';
import AdminStatusCards from '../../common/AdminStatusCards';
import VirtualOfficeDocProcess from './VirtualOfficeDocProcess';
import VirtualOfficeCompletedDocument from './VirtualOfficeCompletedDocument';

export default function VirtualOfficeStepper({ onStepChange, onPaymentFlowChange }) {
    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [showPaymentFlow, setShowPaymentFlow] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    // Handle hydration and localStorage initialization
    useEffect(() => {
        setIsHydrated(true);

        // Initialize from localStorage after hydration
        if (typeof window !== 'undefined') {
            const savedStep = localStorage.getItem('virtualOfficeActiveStep');
            const savedCompleted = localStorage.getItem('virtualOfficeCompletedSteps');

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
            localStorage.setItem('virtualOfficeActiveStep', step.toString());
        }
    };

    // Mark steps as completed
    const markStepCompleted = (step) => {
        if (!completedSteps.includes(step)) {
            const newCompleted = [...completedSteps, step];
            setCompletedSteps(newCompleted);
            if (isHydrated && typeof window !== 'undefined') {
                localStorage.setItem('virtualOfficeCompletedSteps', JSON.stringify(newCompleted));
            }
        }
    };

    // Check if step is accessible
    const isStepAccessible = (index) => {
        if (index === 0) return true;
        if (index === 1) return completedSteps.includes(0);
        if (index === 2) return completedSteps.includes(1);
        return false;
    };

    // Define steps for the stepper
    const cardSteps = [
        {
            title: 'Document Process',
            description: 'Upload required documents for virtual office setup',
            icon: '/assets/img/icon/list-icon.png',
            button: 'Start',
            active: activeStep === 0
        },
        {
            title: 'Completed',
            description: 'Virtual office setup completed successfully',
            icon: '/assets/img/icon/completed.png',
            button: 'View',
            active: activeStep === 2
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

    const handleCheckboxChange = (stepIndex, isChecked) => {
        if (isChecked) {
            markStepCompleted(stepIndex);
        } else {
            setCompletedSteps(prev => prev.filter(step => step !== stepIndex));
            if (isHydrated && typeof window !== 'undefined') {
                localStorage.setItem('virtualOfficeCompletedSteps', JSON.stringify(completedSteps.filter(step => step !== stepIndex)));
            }
        }
    };

    const getProgressComponent = () => {
        switch (activeStep) {
            case 0:
                return <VirtualOfficeDocProcess />;
            case 1:
                return <VirtualOfficeCompletedDocument
                    file={{
                        name: 'Virtual-Office-Confirmation.pdf',
                        size: '250 KB',
                        url: '#',
                    }}
                />;
            default:
                return <VirtualOfficeDocProcess />;
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
        window.location.href = '/admin/dashboard';
    };

    return (
        <div className="pt-2">
            {/* Back Button */}
            <div className="d-flex justify-content-start mb-3">
                <button 
                    className="btn btn-outline-secondary"
                    onClick={handleBackToDashboard}
                    style={{ 
                        borderRadius: '20px', 
                        fontSize: '14px',
                        padding: '8px 16px'
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
                    isStepAccessible={isStepAccessible}
                />
                <AdminStatusCards
                    cardSteps={cardSteps}
                    activeStep={activeStep}
                    completedSteps={completedSteps}
                    handleStepClick={handleStepClick}
                    handleCheckboxChange={handleCheckboxChange}
                    isStepAccessible={isStepAccessible}
                />
            </>}

            <div className="container-fluid pb-4 pt-2">
                {getProgressComponent()}
            </div>
        </div>
    );
}
