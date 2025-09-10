// pages/resubmit.js

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SuccessImage from "@assets/img/company/completed.png";

export default function ResubmitFlow() {
  const [step, setStep] = useState(1);
  const [names, setNames] = useState(['Company 1', 'Company 1', 'Company 1', 'Company 1', 'Company 1']);

  const updateName = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };
  const [newNames, setNewNames] = useState(Array(5).fill(""));

  const handleInputChange = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNewNames(updated);
  };

  const addNameField = () => {
    setNames([...names, ""]); setNewNames([...newNames, ""]);
  };

  const handleSubmit = () => {
    // Normally you would send the names to the server here
    console.log("Submitted names:", newNames);
    setStep(3);
  };

  return (
    <div className="container py-5" style={{ backgroundColor: '#F3F9F6', borderRadius: '1rem' }}>
      <Head>
        <title>Company Name Resubmission</title>
      </Head>

      {/* Step 1: Guidelines + submitted names */}
      {step === 1 && (
        <div className="row px-4">
          <div className="col-md-7">
            <h5 className="mb-3">Please resubmit the names</h5>
            <p className="fw-bold">Company Name Guidelines for Portugal</p>
            <ol className="small ps-3">
              <li>Uniqueness – The name must be distinguishable from existing businesses.</li>
              <li>No Restricted Terms – Avoid misleading, governmental, or offensive words.</li>
              <li>Portuguese or Recognizable Language – The name should be in Portuguese or a widely understood language.</li>
              <li>Memorable & Clear – Choose a simple, easy-to-pronounce name.</li>
              <li>Domain & Trademark Check – Ensure availability for branding and online presence.</li>
            </ol>
          </div>

          <div className="col-md-5">
            {/* Input Fields */}
            <div className="d-flex flex-column align-items-center">
              {names.map((name, index) => (
                <div className="mb-2" key={index} style={{ width: '100%', minWidth: '400px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your company name"
                    value={name}
                    onChange={(e) => updateName(index, e.target.value)}
                    style={{
                      width: '100%',
                      height: '48px',
                      borderRadius: '50px',
                      paddingTop: '15px',
                      paddingRight: '20px',
                      paddingBottom: '15px',
                      paddingLeft: '20px',
                      opacity: 1,
                      borderWidth: '1px',
                      border: '1px solid #79747E',
                      background: 'transparent',
                      fontSize: '14px'
                    }}
                    readOnly
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 mt-4">
            <button
              className="btn btn-success rounded-pill px-4"
              onClick={() => setStep(2)}
            >
              Resubmit
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Resubmission inputs */}
      {step === 2 && (
        <div className="row px-4">
          <div className="col-md-7">
            <h5 className="mb-3">Resubmit Your Company Name</h5>
            <p className="small text-muted">
              We need to verify the availability of your business name.
              <br />
              Provide 5 names at least since some names may already be in use.
            </p>
          </div>

          <div className="col-md-5">
            {newNames.map((name, index) => {
              return (
                <div className="mb-2" key={index} style={{ width: '100%', minWidth: '400px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your company name"
                    value={name}
                    onChange={(e) => updateName(index, e.target.value)}
                    style={{
                      width: '100%',
                      height: '48px',
                      borderRadius: '50px',
                      paddingTop: '15px',
                      paddingRight: '20px',
                      paddingBottom: '15px',
                      paddingLeft: '20px',
                      opacity: 1,
                      borderWidth: '1px',
                      border: '1px solid #79747E',
                      background: 'transparent',
                      fontSize: '14px'
                    }}
                    readOnly
                  />
                </div>
              )
            }
            )}

            <p
              className="text-success fw-bold mt-2"
              style={{ cursor: 'pointer' }}
              onClick={addNameField}
            >
              + Add name option
            </p>

            <button
              className="btn btn-success rounded-pill px-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )
      }

      {/* Step 3: Confirmation screen */}
      {
        step === 3 && (
          <div className="d-flex justify-content-center align-items-center w-100 py-4 my-2">
            <div className="text-center">
              <Image
                src={SuccessImage} // Make sure this exists in /public
                alt="Confirmation Icon"
                width={150}
                height={150}
                className="mb-4"
              />
              <h5 className="fw-bold mb-2">
                Great! We have received your company’s name
              </h5>
              <p className="text-muted small">
                Please wait till your company name is approved.
              </p>
            </div>
          </div>
        )
      }
    </div >
  );
}
