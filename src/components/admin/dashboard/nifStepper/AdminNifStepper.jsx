import { useState, useEffect } from 'react';
import Image from 'next/image';
import AdminHorizontalStepper from '../../common/AdminHorizontalStepper';
import AdminStatusCards from '../../common/AdminStatusCards';
import AdminNifDocProcess from './AdminNifDocProcess';
import AdminNifInvoiceFlow from './AdminNifInvoiceFlow';
import AdminNifInvoiceSummary from './AdminNifInvoiceSummary';
import AdminNifCompletedDocument from './AdminNifCompletedDocument';
import AdminNifProcessing from './AdminNifProcessing';
import { FaSearch, FaTimes, FaUser } from 'react-icons/fa';

export default function AdminNifStepper({ onStepChange, onPaymentFlowChange }) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showPaymentFlow, setShowPaymentFlow] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignSearch, setAssignSearch] = useState("");
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [tempSelectedLawyer, setTempSelectedLawyer] = useState(null);

  const handleAssignTo = () => {
    setShowAssignModal(true);
    setTempSelectedLawyer(null); // Reset temp selection when opening modal
  };

  const handleCloseModal = () => {
    setShowAssignModal(false);
    setAssignSearch("");
    setTempSelectedLawyer(null); // Reset temp selection when closing modal
  };

  const handleAssignSearchChange = (e) => {
    setAssignSearch(e.target.value);
  };

  const handleAssign = () => {
    if (tempSelectedLawyer) {
      setSelectedLawyer(tempSelectedLawyer); // Set the actual selected lawyer
      console.log("Assigning to:", tempSelectedLawyer);
      handleCloseModal();
    }
  };

  // Sample lawyers data
  const lawyers = [
    { id: 1, name: "Matthews James", email: "matthews.james@law.com" },
    { id: 2, name: "Matthews Lewis", email: "matthews.lewis@law.com" },
    { id: 3, name: "Matthews Lewis", email: "matthews.lewis2@law.com" },
    { id: 4, name: "Matthews Lewis", email: "matthews.lewis3@law.com" },
    { id: 5, name: "Matthews Lewis", email: "matthews.lewis4@law.com" },
    { id: 6, name: "Matthews Lewis", email: "matthews.lewis5@law.com" },
    { id: 7, name: "Matthews Lewis", email: "matthews.lewis6@law.com" },
    { id: 8, name: "Matthews Lewis", email: "matthews.lewis7@law.com" },
    { id: 9, name: "Matthews Lewis", email: "matthews.lewis8@law.com" }
  ];

  const filteredLawyers = lawyers.filter(lawyer =>
    lawyer.name.toLowerCase().includes(assignSearch.toLowerCase()) ||
    lawyer.email.toLowerCase().includes(assignSearch.toLowerCase())
  );

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

  // Handle payment flow
  const handlePayNow = () => {
    setShowPaymentFlow(true);
  };

  const handleBackToSummary = () => {
    setShowPaymentFlow(false);
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
      title: 'Invoice',
      description: 'Waiting for invoice to be paid',
      icon: '/assets/img/icon/invoice.png',
      button: 'Pay Now',
      active: false
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
        if (showPaymentFlow) {
          return <AdminNifInvoiceFlow
            onBackToStep0={() => handleStepChange(0)}
            onBackToSummary={handleBackToSummary}
            onNextToStep2={() => {
              markStepCompleted(1);
              handleStepChange(2);
            }}
          />;
        } else {
          return <AdminNifInvoiceSummary onPayNow={handlePayNow} />;
        }
      case 2:
        return <AdminNifProcessing />;
      case 3:
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
    window.location.href = '/admin/dashboard';
  };

  return (
    <div className="pt-2">
      {/* Back Button */}
      <div className="d-flex justify-content-between mb-3 pe-4">
        <button
          className="btn"
          onClick={handleBackToDashboard}
          style={{
            borderRadius: '20px',
            fontSize: '14px',
            padding: '8px 16px',
            color: '#007C36',
            fontWeight: '600',
          }}
        >
          ← Back to Dashboard
        </button>
        <div style={{ maxWidth: "300px" }}>

          {/* Assigned Lawyer Card or Assign Button */}
          {selectedLawyer ? (
            <div
              className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{
                backgroundColor: '#E6F4EA',
                border: '1px solid #28a745',
                borderRadius: '25px',
                height: '40px'
              }}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#28a745",
                  color: "white"
                }}
              >
                <FaUser size={12} />
              </div>
              <span
                className="fw-semibold"
                style={{
                  color: "#28a745",
                  fontSize: "14px"
                }}
              >
                {selectedLawyer.name}
              </span>
              <button
                className="btn btn-link p-0"
                onClick={() => setSelectedLawyer(null)}
                style={{
                  color: "#28a745",
                  fontSize: "12px",
                  textDecoration: "none"
                }}
              >
                <FaTimes size={10} />
              </button>
            </div>
          ) : (
            <button
              className="btn"
              onClick={handleAssignTo}
              style={{
                backgroundColor: "#007C36",
                color: "white",
                border: "none",
                borderRadius: "25px",
                padding: "8px 20px",
                fontWeight: "500",
                fontSize: "14px",
                height: '40px'
              }}
            >
              Assign To
            </button>
          )}
        </div>
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

      {/* Assign Lawyer Modal */}
      {showAssignModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050
          }}
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-4"
            style={{
              width: "500px",
              maxWidth: "90vw",
              overflow: "hidden"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
              <h5 className="fw-bold mb-0" style={{ color: "#3D3D3D" }}>
                Assign Lawyer
              </h5>
              <button
                className="btn btn-link p-0"
                onClick={handleCloseModal}
                style={{ color: "#6c757d", fontSize: "20px" }}
              >
                <FaTimes />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-bottom">
              <div className="position-relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="form-control"
                  style={{
                    width: "100%",
                    borderRadius: "25px",
                    padding: "10px 20px 10px 40px",
                    height: '48px',
                    fontSize: '14px',
                    backgroundColor: 'transparent',
                    border: '1px solid #3D3D3D',
                  }}
                  value={assignSearch}
                  onChange={handleAssignSearchChange}
                />
                <FaSearch
                  style={{
                    position: 'absolute',
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6c757d',
                    fontSize: '14px',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>

            {/* Lawyers List */}
            <div
              className="p-0"
              style={{
                maxHeight: "300px",
                overflowY: "auto"
              }}
            >
              {filteredLawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className={`d-flex align-items-center px-3 py-2 cursor-pointer ${tempSelectedLawyer?.id === lawyer.id ? 'bg-light' : ''
                    }`}
                  style={{
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onClick={() => setTempSelectedLawyer(lawyer)}
                  onMouseEnter={(e) => {
                    if (tempSelectedLawyer?.id !== lawyer.id) {
                      e.target.style.backgroundColor = '#f8f9fa';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tempSelectedLawyer?.id !== lawyer.id) {
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#e9ecef",
                      color: "#6c757d"
                    }}
                  >
                    <FaUser size={16} />
                  </div>
                  <div>
                    <div className="fw-semibold" style={{ color: "#3D3D3D", fontSize: "14px" }}>
                      {lawyer.name}
                    </div>
                    <div style={{ color: "#6c757d", fontSize: "12px" }}>
                      {lawyer.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="d-flex justify-content-end gap-3 p-4 border-top">
              <button
                className="btn"
                onClick={handleCloseModal}
                style={{
                  backgroundColor: "white",
                  color: "#6c757d",
                  border: "1px solid #dee2e6",
                  borderRadius: "25px",
                  padding: "6px 20px",
                  fontWeight: "500"
                }}
              >
                Cancel
              </button>
              <button
                className="btn"
                onClick={handleAssign}
                disabled={!tempSelectedLawyer}
                style={{
                  backgroundColor: tempSelectedLawyer ? "#007C36" : "#f8f9fa",
                  color: tempSelectedLawyer ? "white" : "#6c757d",
                  border: "none",
                  borderRadius: "25px",
                  padding: "6px 20px",
                  fontWeight: "500",
                  cursor: tempSelectedLawyer ? "pointer" : "not-allowed"
                }}
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid pb-4 pt-2">
        {getProgressComponent()}
      </div>
    </div>
  );
}
