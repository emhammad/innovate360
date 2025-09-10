import React, { useState } from 'react';
import { FaEnvelope, FaFilePdf, FaCheckCircle } from 'react-icons/fa';

const CompanyRegistrationForm = () => {
  const [names, setNames] = useState(['Company 1', 'Company 1', 'Company 1', 'Company 1', 'Company 1']);
  const [status, setStatus] = useState("Married");

  const updateName = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };

  const [activity, setActivity] = useState("Our company specializes in providing [your industry/service], delivering innovative solutions to meet client needs. We focus on quality, efficiency, and customer satisfaction to drive business growth and success.");

  return (
    <div className="container rounded-4 my-5" style={{ backgroundColor: '#007C360D', border: '1px solid #eee', padding: '30px' }}>
      <form className="d-flex flex-column gap-4">

        {/* Company Names */}
        <div className="rounded" >
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">

            {/* Left side: Text */}
            <div className="pe-md-4 mb-3 mb-md-0" style={{ maxWidth: '500px' }}>
              <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Your Company Name</h5>
              <p className="mb-0 small" style={{ color: '#3D3D3D' }}>
                We need to verify the availability of your business name. <br />
                <strong>Provide 5 names at least</strong> since some names may already be in use.
              </p>
            </div>

            {/* Right side: Boxes */}
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
        </div>

        {/* Bottom border */}
        <hr className="mb-3" />

        {/* 1. Company Activity */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-0">
          <div className="pe-md-4 mb-2 mb-md-0" style={{ maxWidth: '500px' }}>
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Your Company Activity</h5>
            <p className="mb-0 small" style={{ color: '#3D3D3D' }}>
              Provide a brief overview of your company’s operations, including the industry, key services, and main activities.
            </p>
          </div>
          <div style={{ Width: "100%", minWidth: '400px' }}>
            <textarea
              className="form-control shadow-sm"
              placeholder="Your company's planned activity..."
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              style={{
                width: '100%',
                margin: '0 auto',
                borderRadius: "16px",
                border: "1px solid #79747E",
                resize: "none",
                height: "170px",
                minHeight: "170px",
                padding: "15px",
                backgroundColor: 'transparent'
              }}
              readOnly
            ></textarea>
          </div>
        </div>
        <hr className="mb-3" />

        {/* 2. Personal Address */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-0">
          <div className="pe-md-4 mb-2 mb-md-0" style={{ maxWidth: '500px' }}>
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Personal Address</h5>
            <p className="mb-0 small" style={{ color: '#3D3D3D' }}>
              Provide your current home address as it appears on official documents.
            </p>
          </div>
          <div style={{ Width: "100%", minWidth: '400px' }}>
            <textarea
              className="form-control shadow-sm"
              placeholder="Your address..."
              value={'123 Business Avenue, Suite 456, Metropolis, NY 10001, USA'}
              style={{
                width: '100%',
                margin: '0 auto',
                borderRadius: "16px",
                border: "1px solid #79747E",
                resize: "none",
                height: "80px",
                minHeight: "80px",
                padding: "15px",
                backgroundColor: 'transparent'
              }}
              readOnly
            ></textarea>
          </div>
        </div>
        <hr className="mb-3" />

        {/* 3. Capital Amount */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-0">
          <div className="pe-md-4 mb-2 mb-md-0">
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Capital Amount of Company</h5>
            <p className="mb-0 small" style={{ color: '#3D3D3D' }}>
              Specify the authorized and paid-up capital amount in the relevant currency.
            </p>
          </div>
          <div className="form-control bg-transparent w-100 w-md-50 rounded-pill d-flex align-items-center gap-2" style={{ maxWidth: '400px', border: '1px solid #79747E', padding: '10px 20px' }}>
            <span className="text-success">€</span>
            <span>500,000</span>
          </div>
        </div>
        <hr className="mb-3" />

        {/* 4. Company Shareholders */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
          <div className="pe-md-4 mb-2 mb-md-0">
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Company’s Shareholders</h5>
            <p className="mb-0 small" style={{ color: '#3D3D3D' }}>
              List all shareholders along with their ownership percentage. Ensure the information matches official company registration records.
            </p>
          </div>
          <div className="d-flex gap-2 w-100" style={{ maxWidth: '400px' }}>
            <div className="form-control bg-transparent rounded-pill flex-grow-1" style={{ border: '1px solid #79747E', padding: '10px 20px' }}>Shareholder name</div>
            <div className="form-control bg-transparent rounded-pill" style={{ width: '80px', border: '1px solid #79747E', padding: '10px 20px' }}>0.0</div>
            <span className="pt-2">%</span>
          </div>
        </div>


        <hr className="mb-3" />

        {/* 1. Company Address */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-0">
          <div className="pe-md-4">
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Company’s Address</h5>
            <p className="mb-0 small" style={{ color: '#3D3D3D' }}>
              Enter the official registered address of your company.
            </p>
          </div>
          <div className="form-control bg-transparent w-100 w-md-50 rounded-4 d-flex align-items-center gap-2" style={{ maxWidth: '400px', border: '1px solid #79747E', padding: '10px 20px' }}>
            123 Business Avenue, Suite 456, Metropolis, NY 10001, USA
          </div>
        </div>


        <hr className="mb-3" />

        {/* 2. Contact Details */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-0">
          <div className="pe-md-4">
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Contact Details</h5>
            <p className="mb-0 small" style={{ color: '#3D3D3D' }}>
              For business inquiries, enter your official email and phone number.
            </p>
          </div>
          <div className="d-flex flex-column gap-2 w-100" style={{ maxWidth: '400px' }}>
            <div className="form-control bg-transparent rounded-pill d-flex align-items-center gap-2" style={{ border: '1px solid #79747E', padding: '10px 20px' }}>
              <FaEnvelope className="text-muted" />
              example@mail.com
            </div>
            <div className="form-control bg-transparent rounded-pill d-flex align-items-center gap-2" style={{ border: '1px solid #79747E', padding: '10px 20px' }}>
              <img src="https://flagcdn.com/gb.svg" alt="flag" width="20" />
              + (406) 555-0120
            </div>
          </div>
        </div>

        <hr className="mb-3" />

        {/* 3. Passport */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-0">
          <div className="pe-md-4">
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Passport/ID Details</h5>
            <p className="mb-0 small" style={{ color: '#3D3D3D' }}>Scanned Passport/ID</p>
          </div>
         <div className='d-flex align-items-center gap-2'>
         <span className="badge d-flex align-items-center gap-2 text-dark fw-semibold rounded-pill" style={{ backgroundColor: '#EDFF8B', padding: '16px 35px' }}>
            <FaFilePdf className="text-danger" />
            document_name.pdf
            <FaCheckCircle className="text-success" />
          </span>
          <button
              className={`btn btn-sm rounded-pill mt-auto`}
              style={{
                backgroundColor: '#007C36',
                color: 'white' ,
                border: 'none',
                padding: '10px 35px'
              }}
            >
              Download
            </button>
         </div>
        </div>


        <hr className="mb-3" />

        {/* 4. Marital Status */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-0">
          <div className="pe-md-4">
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Choose your marital status</h5>
            <p className="mb-0 small" style={{ color: '#3D3D3D' }}>
              Please indicate whether you are single, married, divorced, or widowed.
            </p>
          </div>
          <label
            key={status}
            className={`border rounded-pill px-4 d-flex align-items-center w-100 ${status
              ? "border-success"
              : "border-secondary"
              }`}
            style={{ cursor: "pointer", userSelect: "none", padding: '12px', maxWidth: '400px' }}
          >
            <input
              type="radio"
              name="maritalStatus"
              value={status}
              checked={status}
              onChange={() => setStatus("Married")}
              className="form-check-input me-3"
              style={{ cursor: "pointer" }}
              readOnly
            />
            <span>{status}</span>
          </label>
        </div>

        <hr className="mb-3" />

        {/* 5. NIF Number */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-0">
          <div className="pe-md-4">
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>NIF Number</h5>
            <p className="mb-0 small" style={{ color: '#3D3D3D' }}>
              Enter your NIF (Tax Identification Number) as issued by the relevant tax authority.
            </p>
          </div>
          <div className="form-control bg-transparent w-100 w-md-50 rounded-pill d-flex align-items-center gap-2" style={{ maxWidth: '400px', border: '1px solid #79747E', padding: '10px 20px' }}>
            123 456 789
          </div>
        </div>

        <hr className="mb-3" />

        {/* 6. Payment Method */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4">
          <div className="pe-md-4">
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Payment Method</h5>
            <p className="mb-0 small" style={{ color: '#3D3D3D' }}>
              Please provide your payment details to initiate your company registration process.
            </p>
          </div>
          <div>
            <button className="btn rounded-pill px-4 py-2 fw-semibold w-100 mb-2" style={{ minWidth: '400px', backgroundColor: '#F9DEDC', color: '#B3261E' }}>
              Pending
            </button>
            <p className="mb-0 small text-center" style={{ color: '#3D3D3D' }}>Remind client for payment. Click to Send a <br /> <span className="text-success fw-semibold">Reminder Mail</span></p>
          </div>
        </div>

      </form>
    </div>
  );
};

export default CompanyRegistrationForm;
