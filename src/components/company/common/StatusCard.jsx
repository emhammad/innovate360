import React from 'react';
import Image from 'next/image';


const StatusCards = ({ panel, cardSteps, activeStep, completedSteps, handleStepClick, handleCheckboxChange }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 my-5">
      {cardSteps.map((step, idx) => (
        <div
          key={idx}
          onClick={() => handleStepClick(idx)}
          className="card text-start d-flex flex-column p-3"

          style={{
            width: '190px',
            minHeight: '200px',
            backgroundColor: (panel === "admin" || panel === "lawyer")
              ? 'white'
              : (completedSteps.includes(idx) ? '#007C36' : activeStep === idx ? 'white' : 'white'),
            borderRadius: '12.8px',
            boxShadow: '0px 0px 40px 0px #0000001A',
            border: 'none',
            opacity: activeStep === idx ? 1 : 0.9
          }}
        >
          {/* Icon */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-start mb-2"
            // style={{
            //   backgroundColor: '#EDFF8B',
            //   width: '40px',
            //   height: '40px'
            // }}
          >
            <div className="">{step.icon}</div>
          </div>

          <div className='mt-2'>
            {/* Title */}
            <h6 className="mb-1" style={{
              fontSize: '14px',
              fontWeight: '600',
              color: (panel === "admin" || panel === "lawyer")
                ? '#3D3D3D'
                : (completedSteps.includes(idx) ? 'white' : '#3D3D3D')
            }}>
              {step.title}
            </h6>

            {/* Description */}
            <p
              className="mb-2"
              style={{
                fontSize: '12px',
                minHeight: '50px',
                lineHeight: "1.5",
                color: (panel === "admin" || panel === "lawyer")
                  ? '#3D3D3D'
                  : (completedSteps.includes(idx) ? 'white' : '#3D3D3D')
              }}
            >
              {step.description.length > 50
                ? step.description.slice(0, 70) + '...'
                : step.description}
            </p>
          </div>

          {/* Checkbox for admin and lawyer - always visible */}
          {(panel === "admin" || panel === "lawyer") && (
            <span className='mb-10 d-flex align-items-center justify-content-start fw-semibold' style={{ fontSize: "11px" }}>
              <input
                style={{
                  fontSize: "11px",
                  accentColor: '#007C36',
                  transform: 'scale(1.2)'
                }}
                type='checkbox'
                className='me-1'
                checked={completedSteps.includes(idx)}
                onChange={(e) => handleCheckboxChange && handleCheckboxChange(idx, e.target.checked)}
              />
              Mark as done
            </span>
          )}

          {/* Button */}
          <button
            className={`btn btn-sm rounded-pill py-2 mt-auto`}
            style={{
              backgroundColor: (panel === "admin" || panel === "lawyer") ? '#007C36' : (activeStep === idx ? '#007C36' : '#1D1B201F'),
              color: (panel === "admin" || panel === "lawyer") ? 'white' : (activeStep === idx ? 'white' : '#3D3D3D'),
              border: 'none',
            }}
            disabled={panel !== "admin" && panel !== "lawyer" && activeStep !== idx}
          >
            {step.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default StatusCards;
