'use client'; // If using Next.js 13+ app directory

import { useState, useRef } from 'react';
import Image from 'next/image';
import logo_img from "@assets/img/logo/innovate360.png";
import WalletImage from "@assets/img/icon/payment-success.png";
import InvoicePreview from '../../../admin/dashboard/InvoicePreview';
import {
  FaDownload
} from 'react-icons/fa';
export default function InvoiceFlow() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null); // 'card' or 'bank'
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);

  const handleViewInvoice = () => {
    setShowInvoicePreview(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoicePreview(false);
  };

  return (
    <>
      {showInvoicePreview ? (
        <InvoicePreview onClose={handleCloseInvoice} />
      ) : (
        <div>
          {step === 1 && <InvoiceSummary onNext={() => setStep(2)} />}
          {step === 2 && (
        <PaymentMethodSelector
          selected={paymentMethod}
          onSelect={setPaymentMethod}
          onNext={() => {
            if (paymentMethod) {
              // redirect or move to next step based on method
              if (paymentMethod === 'card') {
                setStep(3)
              } else {
                setStep(4)
              }
            }
          }}
        />
      )}
      {step === 3 && <CardPayment onBack={() => setStep(2)} onSuccess={() => setStep(6)} />}
      {step === 4 && <BankDetails onBack={() => setStep(2)} onNext={() => setStep(5)} />}
      {step === 5 && <UploadReceipt onNext={() => setStep(6)} />}
      {step === 6 && <PaymentSuccess onDone={() => setStep(6)} />}
      {step === 7 && <PaymentHistory />}

        </div>
      )}
    </>
  );
}
function PaymentSuccess({ onDone }) {
  return (
    <div className="text-center py-5 w-100 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '80vh' }}>
      <Image src={WalletImage} alt="Success" style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="mb-4" />
      <h5 style={{ color: '#3D3D3D', fontSize: '24px', fontWeight: '600' }}>Payment Successful</h5>
      <p className="mx-auto mt-2" style={{ maxWidth: '600px', fontSize: '16px', color: '#3D3D3D' }}>
        Payment receipt has been submitted. It usually takes 24 hours to review. In case of a weekend, we’ll review on the next working day.
      </p>
      <button onClick={onDone} className="btn btn-success rounded-pill px-5 mt-3" style={{
        height: '42px',
        fontSize: '16px',
        fontWeight: '600',
        minWidth: '350px',
        cursor: 'pointer',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none'
      }}>
        Done
      </button>
    </div>
  );
}
function PaymentHistory() {
  return (
    <div className="bg-light rounded p-4 mt-4">
      <h5 className="fw-bold mb-3">Payment History</h5>
      <div className="table-responsive">
        <table className="table table-borderless align-middle">
          <thead className="table-light">
            <tr>
              <th>Purchased Item</th>
              <th>Payment Method</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maxfter Inc.</td>
              <td>Credit Card<br /><small className="text-muted">****7865</small></td>
              <td>Mar 21, 2025</td>
              <td>$3714.98</td>
              <td>
                <span className="badge bg-success">Success</span>
              </td>
              <td>
                <button 
                  className="btn btn-link text-decoration-none text-success fw-bold p-0"
                  onClick={handleViewInvoice}
                  style={{ border: 'none', background: 'none' }}
                >
                  View Invoice
                </button>
              </td>
              <td>
                <a href="#" className="text-decoration-none text-success fw-bold">
                  <FaDownload /> Download
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UploadReceipt({ onNext }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setIsUploaded(true);
      console.log("File selected:", file.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleNext = () => {
    if (isUploaded) {
      onNext();
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh', backgroundColor: 'white' }}>
      <div className="text-center" style={{ padding: '40px' }}>

        {/* Title */}
        <h4 className="mb-3" style={{ color: '#3D3D3D', fontSize: '24px' }}>
          Upload Receipt
        </h4>

        {/* Subtitle */}
        <p className="text-muted mb-5" style={{ fontSize: '16px', color: '#3D3D3D', maxWidth: '500px' }}>
          Please upload the image of invoice you paid for your company registration process.
        </p>

        {/* Upload Area */}
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            width: '100%',
            height: '130px',
            margin: '50px auto 10px auto',
            border: '2px dashed #e0e0e0',
            borderRadius: '12px',
            backgroundColor: '#fafafa',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onClick={handleUploadClick}
          onMouseEnter={(e) => {
            e.target.style.borderColor = '#28a745';
            e.target.style.backgroundColor = '#f8fff8';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = '#e0e0e0';
            e.target.style.backgroundColor = '#fafafa';
          }}
        >
          {/* Upload Icon */}
          <div
            className="d-flex align-items-center justify-content-center mb-2"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#28a745',
              color: 'white'
            }}
          >
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              <path d="M12,11L8,15H11V19H13V15H16L12,11Z" />
            </svg>
          </div>

          {/* Upload Text */}
          <div className="text-center">
            <p className="mb-0" style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '500' }}>
              Click to upload <span style={{ color: '#28a745' }}>receipt</span>
            </p>
            <p className="text-muted mb-0" style={{ fontSize: '12px', color: '#666' }}>
              PNG or JPG (max. 1mb)
            </p>
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
        </div>

        {/* File Preview */}
        {selectedFile && (
          <div className="p-3" style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            marginBottom: '50px'
          }}>
            <p className="mb-0" style={{ fontSize: '14px', color: '#28a745', fontWeight: '500' }}>
              ✓ {selectedFile.name} uploaded successfully
            </p>
          </div>
        )}

        {/* Next Button */}
        {isUploaded && (
          <div className="text-center mt-4">
            <button
              type="button"
              className="btn"
              style={{
                height: '48px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: '#007C36',
                color: '#fff',
                border: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                minWidth: '100px'
              }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

function BankDetails({ onBack, onNext }) {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setIsPromoApplied(true);
      console.log("Promo code applied:", promoCode);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '600px', marginTop: '30px', marginBottom: '50px' }}>

        {/* Bank Details Section */}
        <div className="mb-4">
          <div
            className="card"
            style={{
              borderRadius: '16px',
              border: 'none',
              backgroundColor: 'white',
              boxShadow: '0px 0px 24.8px 0px #00000026'
            }}
          >
            <div className="card-body p-4">
              {/* Logo */}
              <div className="text-start mb-1">
                <Image
                  src={logo_img}
                  alt="INNOVATE 360°"
                  width={180}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Title */}
              <h4 className="text-start mb-2" style={{ color: '#3D3D3D', fontSize: '24px', fontWeight: '600' }}>
                Bank Details
              </h4>

              {/* Subtitle */}
              <p className="text-start mb-4" style={{ fontSize: '14px', color: '#3D3D3D' }}>
                Please pay your invoice to initiate your company registration process.
              </p>

              {/* Bank Information */}
              <div className="mb-4">
                <div className="mb-3 p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <label className="form-label mb-1" style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>
                    Account Holder
                  </label>
                  <div style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                    Innovate360 LDA
                  </div>
                </div>

                <div className="mb-3 p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <label className="form-label mb-1" style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>
                    IBAN
                  </label>
                  <div style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                    PT50001000006191052000153
                  </div>
                </div>

                <div className="mb-3 p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <label className="form-label mb-1" style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>
                    BIC/SWIFT
                  </label>
                  <div style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                    BBPIPTPL
                  </div>
                </div>

                <div className="mb-3 p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <label className="form-label mb-1" style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>
                    Bank Name
                  </label>
                  <div style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                    Banco BPI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Promo Code Section */}
        <div className="mb-4">
          <div
            className="card"
            style={{
              borderRadius: '16px',
              border: 'none',
              backgroundColor: 'white',
              boxShadow: '0px 0px 24.8px 0px #00000026'
            }}
          >
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4" style={{ color: '#3D3D3D', fontSize: '18px' }}>
                Apply Promo Code
              </h5>

              <div className="d-flex gap-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo Code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  style={{
                    height: '54px',
                    borderRadius: '50px',
                    paddingTop: '15px',
                    paddingRight: '20px',
                    paddingBottom: '15px',
                    paddingLeft: '20px',
                    opacity: 1,
                    borderWidth: '1px',
                    border: '1px solid #3D3D3D40',
                    background: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                <button
                  type="button"
                  className="btn"
                  style={{
                    height: '54px',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '600',
                    backgroundColor: isPromoApplied ? '#28a745' : '#1D1B201F',
                    color: isPromoApplied ? '#fff' : '#1D1B20',
                    border: 'none',
                    minWidth: '200px'
                  }}
                  onClick={handleApplyPromo}
                  disabled={!promoCode.trim()}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Download Invoice Button */}
        <div className="text-center">
          <button
            type="button"
            className="btn"
            style={{
              height: '48px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              minWidth: '200px'
            }}
            onClick={onNext}
          >
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
function CardPayment({ onBack, onSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    fullName: "",
    country: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSuccess) {
      onSuccess(formData);
    }
  };

  const isFormValid = formData.email && formData.cardNumber && formData.expiryDate &&
    formData.cvv && formData.fullName && formData.country;

  return (
    <div className="d-flex flex-column flex-lg-row" style={{ minHeight: '100vh' }}>
      {/* Left Section - Logo and Price */}
      <div
        className="d-flex flex-column justify-content-start align-items-start col-12 col-lg-5 px-3 px-lg-5"
        style={{
          backgroundColor: 'white',
          paddingTop: '80px',
          paddingLeft: '60px',
        }}
      >
        {/* Back Arrow and Logo */}
        <div className="d-flex align-items-center mb-3 mb-lg-5" style={{ width: '100%' }}>
          <button
            onClick={onBack}
            className="btn btn-link p-0 me-3"
            style={{
              color: '#28a745',
              textDecoration: 'none',
              fontSize: '24px'
            }}
          >
            ←
          </button>
          <Image
            src={logo_img}
            alt="INNOVATE 360°"
            width={180}
            height={80}
            style={{ objectFit: 'contain', maxWidth: '100%' }}
            className="img-fluid"
          />
        </div>

        {/* Subscribe Text */}
        <div className="text-center text-lg-start mb-2 ms-4 ps-3">
          <p style={{ color: '#3D3D3D', fontSize: '16px', margin: 0 }}>
            Subscribe to Plan Name
          </p>
        </div>

        {/* Price */}
        <div className="text-center text-lg-start ms-4 ps-3">
          <span style={{ color: '#007C36', fontSize: 'clamp(28px, 8vw, 36px)', fontWeight: '600' }}>
            €540
          </span>
          <span style={{ color: '#3D3D3D', fontSize: 'clamp(14px, 3vw, 16px)', marginLeft: '8px' }}>
            per month
          </span>
        </div>
      </div>

      {/* Line - Hidden on mobile */}
      <div className="d-none d-lg-block" style={{ width: '0.5%', backgroundColor: '#f8f9fa' }}></div>

      {/* Right Section - Payment Form */}
      <div
        className="d-flex flex-column justify-content-center col-12 col-lg-6 px-3 px-lg-5"
        style={{
          backgroundColor: 'transparent',
          paddingTop: '80px'
        }}
      >
        <div className="w-100" style={{ maxWidth: '500px', margin: '0 auto' }}>
          {/* Title */}
          <h4 className="fw-bold mb-2" style={{ color: '#3D3D3D', fontSize: 'clamp(20px, 4vw, 24px)' }}>
            Pay with Card
          </h4>

          {/* Subtitle */}
          <p className="text-muted mb-4" style={{ fontSize: 'clamp(14px, 3vw, 16px)' }}>
            Please add your card details
          </p>

          {/* Payment Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Address */}
            <div className="mb-3 position-relative">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '54px',
                  borderRadius: '50px',
                  paddingTop: '15px',
                  paddingRight: '20px',
                  paddingBottom: '15px',
                  paddingLeft: '50px',
                  opacity: 1,
                  borderWidth: '1px',
                  border: '1px solid #3D3D3D40',
                  background: 'transparent',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <Image
                src="/assets/img/icon/sms.png"
                alt="Email Icon"
                width={20}
                height={20}
                className="position-absolute"
                style={{
                  top: '50%',
                  left: '20px',
                  transform: 'translateY(-50%)',
                  zIndex: 10
                }}
              />
            </div>

            {/* Card Number */}
            <div className="mb-3 position-relative">
              <input
                type="text"
                name="cardNumber"
                className="form-control"
                placeholder="1234 1234 1234 1234"
                value={formData.cardNumber}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '54px',
                  borderRadius: '50px',
                  paddingTop: '15px',
                  paddingRight: '200px',
                  paddingBottom: '15px',
                  paddingLeft: '20px',
                  opacity: 1,
                  borderWidth: '1px',
                  border: '1px solid #3D3D3D40',
                  background: 'transparent',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              {/* Payment Method Logos - Inside the input field */}
              <div
                className="position-absolute d-flex align-items-center"
                style={{
                  top: '50%',
                  right: '15px',
                  transform: 'translateY(-50%)',
                  gap: '8px',
                  pointerEvents: 'none'
                }}
              >
                {/* VISA */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    padding: '4px 6px',
                    minWidth: '20px',
                    height: '20px',
                    border: 'none'
                  }}
                >
                  <span style={{ fontSize: '8px', fontWeight: 'bold', color: '#1A1F71' }}>VISA</span>
                </div>

                {/* Mastercard */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: '#000',
                    borderRadius: '3px',
                    padding: '4px 6px',
                    minWidth: '20px',
                    height: '20px'
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#EB001B',
                        marginRight: '-2px',
                        zIndex: 2
                      }}
                    ></div>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#F79E1B',
                        zIndex: 1
                      }}
                    ></div>
                  </div>
                </div>

                {/* JCB */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    padding: '4px 6px',
                    minWidth: '20px',
                    height: '20px',
                    border: 'none'
                  }}
                >
                  <div className="d-flex">
                    <div style={{ width: '2px', height: '12px', backgroundColor: '#0066CC', marginRight: '1px' }}></div>
                    <div style={{ width: '2px', height: '12px', backgroundColor: '#CC0000', marginRight: '1px' }}></div>
                    <div style={{ width: '2px', height: '12px', backgroundColor: '#00AA44' }}></div>
                  </div>
                </div>

                {/* PayPal */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: '#0070BA',
                    borderRadius: '3px',
                    padding: '4px 6px',
                    minWidth: '20px',
                    height: '20px'
                  }}
                >
                  <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'white' }}>PayPal</span>
                </div>
              </div>
            </div>

            {/* Expiry Date and CVV */}
            <div className="row mb-3 g-3">
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  name="expiryDate"
                  className="form-control"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    height: '54px',
                    borderRadius: '50px',
                    paddingTop: '15px',
                    paddingRight: '20px',
                    paddingBottom: '15px',
                    paddingLeft: '20px',
                    opacity: 1,
                    borderWidth: '1px',
                    border: '1px solid #3D3D3D40',
                    background: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  name="cvv"
                  className="form-control"
                  placeholder="CVV/CVC"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    height: '54px',
                    borderRadius: '50px',
                    paddingTop: '15px',
                    paddingRight: '20px',
                    paddingBottom: '15px',
                    paddingLeft: '20px',
                    opacity: 1,
                    borderWidth: '1px',
                    border: '1px solid #3D3D3D40',
                    background: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Full Name on Card */}
            <div className="mb-3">
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Full Name on Card"
                value={formData.fullName}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '54px',
                  borderRadius: '50px',
                  paddingTop: '15px',
                  paddingRight: '20px',
                  paddingBottom: '15px',
                  paddingLeft: '20px',
                  opacity: 1,
                  borderWidth: '1px',
                  border: '1px solid #3D3D3D40',
                  background: 'transparent',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Country or Region */}
            <div className="mb-4 position-relative">
              <input
                type="text"
                name="country"
                className="form-control"
                placeholder="Country or Region"
                value={formData.country}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '54px',
                  borderRadius: '50px',
                  paddingTop: '15px',
                  paddingRight: '50px',
                  paddingBottom: '15px',
                  paddingLeft: '20px',
                  opacity: 1,
                  borderWidth: '1px',
                  border: '1px solid #3D3D3D40',
                  background: 'transparent',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <div
                className="position-absolute"
                style={{
                  top: '50%',
                  right: '20px',
                  transform: 'translateY(-50%)',
                  color: '#3D3D3D',
                  fontSize: '16px',
                  pointerEvents: 'none'
                }}
              >
                ▼
              </div>
            </div>

            {/* Subscribe Button */}
            <button
              type="submit"
              className="btn w-100 mb-3"
              style={{
                height: '48px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: isFormValid ? '#28a745' : '#1D1B201F',
                color: isFormValid ? '#fff' : '#1D1B20',
                border: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              disabled={!isFormValid}
            >
              Subscribe
            </button>

            {/* Disclaimer */}
            <p className="text-center mb-4 mt-2" style={{ fontSize: '12px', lineHeight: '1.4', color: '#3D3D3D' }}>
              By confirming you allow Innovate360 to charge you for future payments in accordance with their terms. You can always cancel your subscription.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// ------------------- Invoice Summary -------------------
function InvoiceSummary({ onNext }) {
  return (
    <div className="d-flex align-items-center justify-content-center w-100" style={{ minHeight: '90vh' }}>
      <div className="container" style={{ maxWidth: '600px', marginTop: '30px', marginBottom: '50px' }}>

        {/* Invoice Section */}
        <div className="mb-4">
          <div
            className="card"
            style={{
              borderRadius: '16px',
              border: 'none',
              backgroundColor: 'white',
              boxShadow: '0px 0px 24.8px 0px #00000026'
            }}
          >
            <div className="card-body p-4">
              {/* Logo */}
              <div className="text-start mb-1">
                <Image
                  src={logo_img}
                  alt="INNOVATE 360°"
                  width={180}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Invoice Title */}
              <h4 className="text-start mb-2" style={{ color: '#3D3D3D', fontSize: '24px', fontWeight: '600' }}>
                Invoice
              </h4>

              {/* Invoice Number */}
              <div className="mb-4 d-flex gap-2">
                <label className="form-label" style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '500' }}>
                  Invoice Number
                </label>
                <div style={{ fontSize: '15px', color: '#3D3D3D', fontWeight: '600' }}>
                  UYWD9813GJHW
                </div>
              </div>

              {/* NIF Number */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3" style={{ color: '#3D3D3D', fontSize: '18px' }}>
                  NIF Number
                </h6>
                <div className="d-flex justify-content-between align-items-center" style={{ position: 'relative' }}>
                  <span style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '400' }}>
                    Tax Identification Number
                  </span>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'repeating-linear-gradient(to right, #3D3D3D 0px, #3D3D3D 4px, transparent 4px, transparent 8px)',
                    margin: '0 10px'
                  }}></div>
                  <span style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                    €50
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Amount Section */}
        <div className="mb-4">
          <div
            className="card"
            style={{
              borderRadius: '16px',
              border: 'none',
              backgroundColor: 'white',
              boxShadow: '0px 0px 24.8px 0px #00000026'
            }}
          >
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4" style={{ color: '#3D3D3D', fontSize: '18px' }}>
                Total Amount
              </h5>

              {/* Total */}
              <div className="d-flex justify-content-between align-items-center mb-3" style={{ position: 'relative' }}>
                <span style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                  Total
                </span>
                <div style={{
                  flex: 1,
                  height: '1px',
                  background: 'repeating-linear-gradient(to right, #3D3D3D 0px, #3D3D3D 4px, transparent 4px, transparent 8px)',
                  margin: '0 10px'
                }}></div>
                <span style={{ fontSize: '16px', color: '#28a745', fontWeight: '600' }}>
                  €175
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <div className="text-center">
          <button
            type="button"
            className="btn"
            style={{
              height: '48px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              minWidth: '100px'
            }}
            onClick={onNext}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

// ------------------- Payment Method Selector -------------------
function PaymentMethodSelector({ selected, onSelect, onNext }) {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div style={{ marginTop: '30px', marginBottom: '60px' }}>
        {/* Title */}
        <h4 className="fw-bold mb-2 text-center" style={{ color: '#3D3D3D', fontSize: '1.5rem' }}>
          Payment Method
        </h4>

        {/* Subtitle */}
        <p className="mb-2 text-center mx-auto" style={{ fontSize: '16px', color: '#3D3D3D', width: '500px' }}>
          Please select a payment method to initiate your company registration process.
        </p>

        {/* Payment Card */}
        <div
          className="card mx-auto"
          style={{
            width: '100%',
            maxWidth: '600px',
            minHeight: '450px',
            borderRadius: '24px',
            border: 'none',
            backgroundColor: 'white',
            boxShadow: '0px 0px 8.4px 0px #00000026',
            marginTop: '20px'
          }}
        >
          <div className="card-body p-4 d-flex flex-column justify-content-between">
            <div>
              {/* Payment System Header */}
              <h5 className="fw-bold mb-3 text-left" style={{ color: '#28a745', fontSize: '1.2rem' }}>
                Payment System
              </h5>

              {/* Description */}
              <p className=" mb-1 text-left" style={{ fontSize: '14px', color: '#3D3D3D' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet.
              </p>
              <p className="text-left" style={{ fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>
                Choose the method you prefer to continue.
              </p>

              <hr className="mb-4 " />

              {/* Payment Options */}
              <div className="d-flex flex-column gap-3">
                {/* Pay via Bank */}
                <label
                  className={`border rounded-pill d-flex align-items-center ${selected === "bank"
                    ? "border-success"
                    : "border-secondary"
                    }`}
                  style={{
                    cursor: "pointer",
                    padding: '10px 20px',
                    userSelect: "none",
                    borderWidth: selected === "bank" ? '2px' : '1px',
                    borderColor: selected === "bank" ? '#28a745' : '#e0e0e0',
                    backgroundColor: selected === "bank" ? '#f8fff8' : 'transparent'
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={selected === "bank"}
                    onChange={() => onSelect("bank")}
                    className="form-check-input me-3"
                    style={{
                      cursor: "pointer",
                      width: '20px',
                      height: '20px',
                      border: selected === "bank" ? '2px solid #28a745' : '2px solid #e0e0e0',
                      backgroundColor: selected === "bank" ? '#28a745' : 'white'
                    }}
                  />
                  <span style={{
                    color: '#3D3D3D',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}>
                    Pay via Bank
                  </span>
                </label>

                {/* Pay via Card */}
                <label
                  className={`border rounded-pill d-flex align-items-center ${selected === "card"
                    ? "border-success"
                    : "border-secondary"
                    }`}
                  style={{
                    cursor: "pointer",
                    padding: '10px 20px',
                    userSelect: "none",
                    borderWidth: selected === "card" ? '2px' : '1px',
                    borderColor: selected === "card" ? '#28a745' : '#e0e0e0',
                    backgroundColor: selected === "card" ? '#f8fff8' : 'transparent'
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={selected === "card"}
                    onChange={() => onSelect("card")}
                    className="form-check-input me-3"
                    style={{
                      cursor: "pointer",
                      width: '20px',
                      height: '20px',
                      border: selected === "card" ? '2px solid #28a745' : '2px solid #e0e0e0',
                      backgroundColor: selected === "card" ? '#28a745' : 'white'
                    }}
                  />
                  <span style={{
                    color: '#3D3D3D',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}>
                    Pay via Card
                  </span>
                </label>
              </div>
            </div>

            {/* Next Button */}
            <div className="d-flex justify-content-end mt-4">
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  minWidth: '80px'
                }}
                onClick={onNext}
                disabled={!selected}
              >
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
