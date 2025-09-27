import React, { useState } from 'react';
import Image from 'next/image';

const VirtualOfficeInvoiceFlow = ({ onBackToStep0, onBackToSummary, onNextToStep2 }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onNextToStep2();
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value) => {
    return value.replace(/\D/g, '').replace(/(.{2})/, '$1/');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card" style={{ borderRadius: '16px', border: '1px solid #e9ecef' }}>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="card-title mb-0" style={{ color: '#3D3D3D', fontWeight: '600' }}>
                  Payment Processing
                </h5>
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={onBackToSummary}
                    style={{ borderRadius: '20px', fontSize: '14px' }}
                  >
                    Back to Summary
                  </button>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={onBackToStep0}
                    style={{ borderRadius: '20px', fontSize: '14px' }}
                  >
                    Cancel
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <div className="payment-form">
                    <h6 className="mb-3" style={{ color: '#3D3D3D', fontWeight: '500' }}>
                      Payment Method
                    </h6>
                    
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-check">
                          <input 
                            className="form-check-input" 
                            type="radio" 
                            name="paymentMethod" 
                            id="credit"
                            value="credit"
                            checked={paymentMethod === 'credit'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="credit">
                            <Image
                              src="/assets/img/icon/credit-card.png"
                              alt="Credit Card"
                              width={20}
                              height={20}
                              className="me-2"
                            />
                            Credit Card
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input 
                            className="form-check-input" 
                            type="radio" 
                            name="paymentMethod" 
                            id="debit"
                            value="debit"
                            checked={paymentMethod === 'debit'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="debit">
                            <Image
                              src="/assets/img/icon/debit-card.png"
                              alt="Debit Card"
                              width={20}
                              height={20}
                              className="me-2"
                            />
                            Debit Card
                          </label>
                        </div>
                      </div>
                    </div>

                    {paymentMethod === 'credit' || paymentMethod === 'debit' ? (
                      <div className="card-details">
                        <div className="row">
                          <div className="col-12 mb-3">
                            <label className="form-label" style={{ fontSize: '14px', fontWeight: '500' }}>
                              Card Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="1234 5678 9012 3456"
                              value={cardDetails.number}
                              onChange={(e) => handleInputChange('number', formatCardNumber(e.target.value))}
                              maxLength={19}
                              style={{ fontSize: '14px' }}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label" style={{ fontSize: '14px', fontWeight: '500' }}>
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/YY"
                              value={cardDetails.expiry}
                              onChange={(e) => handleInputChange('expiry', formatExpiry(e.target.value))}
                              maxLength={5}
                              style={{ fontSize: '14px' }}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label" style={{ fontSize: '14px', fontWeight: '500' }}>
                              CVV
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="123"
                              value={cardDetails.cvv}
                              onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                              maxLength={4}
                              style={{ fontSize: '14px' }}
                            />
                          </div>
                          <div className="col-12 mb-3">
                            <label className="form-label" style={{ fontSize: '14px', fontWeight: '500' }}>
                              Cardholder Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="John Doe"
                              value={cardDetails.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              style={{ fontSize: '14px' }}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bank-transfer-info">
                        <div className="alert alert-info" style={{ borderRadius: '12px' }}>
                          <h6 className="alert-heading" style={{ color: '#0c5460' }}>
                            Bank Transfer Details
                          </h6>
                          <p className="mb-2" style={{ fontSize: '14px' }}>
                            Please transfer the amount to the following account:
                          </p>
                          <div className="row">
                            <div className="col-md-6">
                              <strong>Account Name:</strong> Innovate360 Ltd<br/>
                              <strong>IBAN:</strong> PT50 0033 0000 0000 1234 5678 9<br/>
                              <strong>BIC:</strong> BCOMPTPL
                            </div>
                            <div className="col-md-6">
                              <strong>Amount:</strong> €{total.toFixed(2)}<br/>
                              <strong>Reference:</strong> VO-2024-001
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card" style={{ backgroundColor: '#f8f9fa', border: 'none' }}>
                    <div className="card-body">
                      <h6 className="card-title mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>
                        Order Summary
                      </h6>
                      
                      <div className="d-flex justify-content-between mb-2">
                        <span style={{ fontSize: '14px', color: '#6c757d' }}>Virtual Office Setup:</span>
                        <span style={{ fontSize: '14px', color: '#3D3D3D' }}>€150.00</span>
                      </div>
                      
                      <div className="d-flex justify-content-between mb-2">
                        <span style={{ fontSize: '14px', color: '#6c757d' }}>Mail Forwarding (12 months):</span>
                        <span style={{ fontSize: '14px', color: '#3D3D3D' }}>€300.00</span>
                      </div>
                      
                      <div className="d-flex justify-content-between mb-2">
                        <span style={{ fontSize: '14px', color: '#6c757d' }}>Address Registration:</span>
                        <span style={{ fontSize: '14px', color: '#3D3D3D' }}>€75.00</span>
                      </div>
                      
                      <div className="d-flex justify-content-between mb-2">
                        <span style={{ fontSize: '14px', color: '#6c757d' }}>Processing Fee:</span>
                        <span style={{ fontSize: '14px', color: '#3D3D3D' }}>€50.00</span>
                      </div>
                      
                      <hr style={{ margin: '12px 0' }} />
                      
                      <div className="d-flex justify-content-between mb-3">
                        <span style={{ fontSize: '16px', fontWeight: '600', color: '#3D3D3D' }}>
                          Total:
                        </span>
                        <span style={{ fontSize: '16px', fontWeight: '600', color: '#007C36' }}>
                          €{total.toFixed(2)}
                        </span>
                      </div>

                      <button 
                        className="btn btn-success w-100"
                        onClick={handlePayment}
                        disabled={isProcessing || (paymentMethod !== 'bank' && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name))}
                        style={{
                          borderRadius: '25px',
                          padding: '12px',
                          fontWeight: '500',
                          fontSize: '16px'
                        }}
                      >
                        {isProcessing ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Processing Payment...
                          </>
                        ) : (
                          `Pay €${total.toFixed(2)}`
                        )}
                      </button>

                      <div className="mt-3 text-center">
                        <small className="text-muted">
                          <Image
                            src="/assets/img/icon/secure.png"
                            alt="Secure"
                            width={16}
                            height={16}
                            className="me-1"
                          />
                          Secure payment processing
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualOfficeInvoiceFlow;
