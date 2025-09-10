import { useState } from 'react';
import Image from 'next/image';
import HorizontalStepper from '../../company/common/HorizontalStepper'; // adjust path as needed
import StatusCards from '../../company/common/StatusCard';
import Registration from "./progress/Registration";
import InvoiceCard from './progress/Invoice';
import AppliedNames from "./progress/NameApplied";
import ProcessDocuments from './progress/DocProcess';
import RegComplete from "./progress/RegComplete";
import {
  FaSearch,
  FaTimes,
  FaUser
} from 'react-icons/fa';

export default function Home(CaseId) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([0]);
  const [search, setSearch] = useState("");
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignSearch, setAssignSearch] = useState("");
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [tempSelectedLawyer, setTempSelectedLawyer] = useState(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

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
    <div className="container-fluid py-5">
      {/* Header Section */}
      <div
        className="bg-white" style={{ marginBottom: '35px' }}
      >
        <div className="d-flex justify-content-between align-items-center">
          {/* User Information */}
          <div>
            <h5 className="mb-1 fw-bold" style={{ color: '#3D3D3D', fontSize: '18px' }}>
              John Doe
            </h5>
            <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>
              olivia@untitledui.com
            </p>
          </div>

          {/* Search and Assign To */}
          <div className="d-flex align-items-center gap-3">
            {/* Search Bar */}
            <div className="position-relative" style={{ maxWidth: "300px" }}>
              <input
                type="text"
                placeholder="Search here"
                className="form-control"
                style={{
                  width: "100%",
                  borderRadius: "25px",
                  padding: "8px 20px 8px 40px",
                  height: '40px',
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  border: '1px solid #3D3D3D',
                }}
                value={search}
                onChange={handleSearchChange}
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
      </div>

      <HorizontalStepper
        steps={cardSteps}
        activeStep={activeStep}
        completedSteps={completedSteps}
        handleStepClick={handleStepClick}
      />
      <StatusCards
        panel="admin"
        cardSteps={cardSteps}
        activeStep={activeStep}
        completedSteps={completedSteps}
        handleStepClick={handleStepClick}
        handleCheckboxChange={handleCheckboxChange} />
      {getProgressComponent()}

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
    </div>
  );
}
