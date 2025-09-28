import React from 'react';
import Image from 'next/image';

const AdminStatusCards = ({ cardSteps = [], activeStep, completedSteps, handleStepClick, handleCheckboxChange }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 my-3">
      {cardSteps.map((step, idx) => (
        <div
          key={idx}
          onClick={() => handleStepClick(idx)}
          className="card text-start d-flex flex-column p-3"
          style={{
            width: '190px',
            minHeight: '200px',
            backgroundColor: completedSteps.includes(idx) ? '#007C36' : '#f8f9fa',
            borderRadius: '12.8px',
            boxShadow: '0px 0px 40px 0px #0000001A',
            transform: activeStep === idx ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            border : 'none'
          }}
        >
          {/* Icon */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-start mb-2"
            style={{
              backgroundColor: completedSteps.includes(idx) ? '#E6F4EA' : activeStep === idx ? '#EDFF8B' : '#f8f9fa',
              width: '40px',
              height: '40px',
              transition: 'all 0.2s ease'
            }}
          >

            <Image
              src={step.icon}
              alt={step.title}
              width={40}
              height={40}
            />

          </div>

          <div className='mt-2'>
            {/* Title */}
            <h6 className="mb-1" style={{
              fontSize: '14px',
              fontWeight: '600',
              color: completedSteps.includes(idx) ? 'white' : activeStep === idx ? '#007C36' : '#3D3D3D'
            }}>
              {step.title}
            </h6>

            {/* Description */}
            <p
              style={{
                fontSize: '12px',
                minHeight: '50px',
                lineHeight: "1.5",
                color: completedSteps.includes(idx) ? 'white' : '#6c757d'
              }}
            >
              {step.description.length > 50
                ? step.description.slice(0, 70) + '...'
                : step.description}
            </p>
          </div>

          {/* Admin Checkbox */}
          <span className='mb-2 d-flex align-items-center justify-content-start fw-semibold' style={{ fontSize: "11px", color: completedSteps.includes(idx) ? 'white' : '#6c757d' }}>
            <input
              style={{
                fontSize: "11px",
                accentColor: '#007C36',
                transform: 'scale(1.2)',
                marginRight: '4px'
              }}
              type='checkbox'
              className='me-1'
              checked={completedSteps.includes(idx)}
              onChange={(e) => handleCheckboxChange && handleCheckboxChange(idx, e.target.checked)}
            />
            Mark as done
          </span>
          {/* Button */}
          <button
            className={`btn btn-sm rounded-pill py-2 mt-auto`}
            style={{
              backgroundColor: completedSteps.includes(idx) ? '#28a745' : activeStep === idx ? '#007C36' : '#6c757d',
              color: 'white',
              border: 'none',
              fontSize: '12px',
              fontWeight: '500'
            }}
          >
            {completedSteps.includes(idx) ? 'Completed' : step.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminStatusCards;
