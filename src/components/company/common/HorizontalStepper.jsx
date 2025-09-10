import React from 'react';

const HorizontalStepper = ({ steps, activeStep, completedSteps, handleStepClick }) => {
  return (
    <ul className="list-unstyled d-flex justify-content-between align-items-center position-relative p-0 m-0" style={{ marginTop: '40px' }}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = completedSteps.includes(index);
        const isLast = index === steps.length - 1;

        return (
          <li
            key={index}
            className="d-flex flex-column align-items-center text-center flex-grow-1 position-relative"
            style={{ minWidth: '120px', cursor: 'pointer' }}
            onClick={() => handleStepClick(index)}
          >
            {/* Line connector (before) */}
            {index !== 0 && (
              <div
                className="position-absolute"
                style={{
                  top: '12px',
                  left: '-50%',
                  width: '100%',
                  height: '3px',
                  backgroundColor: completedSteps.includes(index - 1) ? '#198754' : '#ccc',
                  zIndex: 0
                }}
              />
            )}

            {/* Step Circle */}
            <div
              className="position-relative mb-2"
              style={{
                width: '24px',
                height: '24px',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Outer Circle */}
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: '2px solid #198754',
                  backgroundColor: isCompleted ? '#198754' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Inner Dot for completed steps */}
                {isCompleted ? (
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '8px',
                      fontWeight: 'bold'
                    }}
                  >
                    ✓
                  </div>
                ) : (
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#198754'
                    }}
                  />
                )}
              </div>
            </div>



            {/* Line connector (after) */}
            {!isLast && (
              <div
                className="position-absolute"
                style={{
                  top: '12px',
                  right: '-50%',
                  width: '100%',
                  height: '2px',
                  backgroundColor: completedSteps.includes(index) ? '#198754' : '#ccc',
                  zIndex: 0
                }}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default HorizontalStepper;
