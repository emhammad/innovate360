import React from 'react';
import Image from 'next/image';

const VirtualOfficeInvoiceSummary = ({ onPayNow }) => {
  const invoiceItems = [
    {
      id: 1,
      description: 'Virtual Office Setup Fee',
      amount: 150.00,
      quantity: 1
    },
    {
      id: 2,
      description: 'Mail Forwarding Service (Monthly)',
      amount: 25.00,
      quantity: 12
    },
    {
      id: 3,
      description: 'Business Address Registration',
      amount: 75.00,
      quantity: 1
    },
    {
      id: 4,
      description: 'Document Processing Fee',
      amount: 50.00,
      quantity: 1
    }
  ];

  const subtotal = invoiceItems.reduce((sum, item) => sum + (item.amount * item.quantity), 0);
  const taxRate = 0.23; // 23% VAT
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card" style={{ borderRadius: '16px', border: '1px solid #e9ecef' }}>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="card-title mb-0" style={{ color: '#3D3D3D', fontWeight: '600' }}>
                  Virtual Office Invoice Summary
                </h5>
                <div className="d-flex align-items-center">
                  <Image
                    src="/assets/img/icon/invoice.png"
                    alt="Invoice"
                    width={24}
                    height={24}
                    className="me-2"
                  />
                  <span className="text-muted" style={{ fontSize: '14px' }}>
                    Invoice #VO-2024-001
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr style={{ backgroundColor: '#f8f9fa' }}>
                          <th style={{ fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>
                            Description
                          </th>
                          <th style={{ fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>
                            Qty
                          </th>
                          <th style={{ fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>
                            Unit Price
                          </th>
                          <th style={{ fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoiceItems.map((item) => (
                          <tr key={item.id}>
                            <td style={{ fontSize: '14px', color: '#3D3D3D' }}>
                              {item.description}
                            </td>
                            <td style={{ fontSize: '14px', color: '#6c757d' }}>
                              {item.quantity}
                            </td>
                            <td style={{ fontSize: '14px', color: '#6c757d' }}>
                              €{item.amount.toFixed(2)}
                            </td>
                            <td style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '500' }}>
                              €{(item.amount * item.quantity).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card" style={{ backgroundColor: '#f8f9fa', border: 'none' }}>
                    <div className="card-body">
                      <h6 className="card-title mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>
                        Payment Summary
                      </h6>
                      
                      <div className="d-flex justify-content-between mb-2">
                        <span style={{ fontSize: '14px', color: '#6c757d' }}>Subtotal:</span>
                        <span style={{ fontSize: '14px', color: '#3D3D3D' }}>€{subtotal.toFixed(2)}</span>
                      </div>
                      
                      <div className="d-flex justify-content-between mb-2">
                        <span style={{ fontSize: '14px', color: '#6c757d' }}>VAT (23%):</span>
                        <span style={{ fontSize: '14px', color: '#3D3D3D' }}>€{tax.toFixed(2)}</span>
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

                      <div className="mb-3">
                        <label className="form-label" style={{ fontSize: '14px', fontWeight: '500', color: '#3D3D3D' }}>
                          Payment Method
                        </label>
                        <select className="form-select" style={{ fontSize: '14px' }}>
                          <option value="credit">Credit Card</option>
                          <option value="debit">Debit Card</option>
                          <option value="bank">Bank Transfer</option>
                        </select>
                      </div>

                      <button 
                        className="btn btn-success w-100"
                        onClick={onPayNow}
                        style={{
                          borderRadius: '25px',
                          padding: '12px',
                          fontWeight: '500',
                          fontSize: '16px'
                        }}
                      >
                        Pay Now - €{total.toFixed(2)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top">
                <div className="row">
                  <div className="col-md-6">
                    <h6 style={{ color: '#3D3D3D', fontWeight: '500', fontSize: '14px' }}>
                      Service Details
                    </h6>
                    <ul className="list-unstyled" style={{ fontSize: '13px', color: '#6c757d' }}>
                      <li className="mb-1">• Professional business address in Lisbon</li>
                      <li className="mb-1">• Mail forwarding service included</li>
                      <li className="mb-1">• 24/7 online portal access</li>
                      <li className="mb-1">• Document scanning and digital delivery</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 style={{ color: '#3D3D3D', fontWeight: '500', fontSize: '14px' }}>
                      Terms & Conditions
                    </h6>
                    <p style={{ fontSize: '13px', color: '#6c757d', marginBottom: '8px' }}>
                      By proceeding with payment, you agree to our terms of service and privacy policy.
                    </p>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="termsCheck" />
                      <label className="form-check-label" htmlFor="termsCheck" style={{ fontSize: '13px' }}>
                        I agree to the terms and conditions
                      </label>
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

export default VirtualOfficeInvoiceSummary;
