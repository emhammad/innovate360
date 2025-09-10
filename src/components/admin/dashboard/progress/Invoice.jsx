import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import InvoicePreview from '../InvoicePreview';

const InvoiceCard = () => {
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
    <div className="py-5">
      <div className="p-4" style={{ backgroundColor: '#F3F9F6', borderRadius: '16px' }}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4">
          <div className="pe-md-4 mb-3 mb-md-0">
            <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Invoice Management</h5>
            <p className="text-muted mb-0 small">
              Review and manage client invoices and payment transactions.
            </p>
          </div>
        </div>

        <div className="table-responsive bg-white rounded-3" style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <table className="table table-borderless align-middle mb-0">
            <thead className="text-muted border-bottom" style={{ backgroundColor: '#f8f9fa' }}>
              <tr>
                <th style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>Purchased Item</th>
                <th style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>Payment Method</th>
                <th style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>Date</th>
                <th style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>Amount</th>
                <th style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>Status</th>
                <th style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>Action</th>
                <th style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-bottom">
                <td style={{ padding: '16px', fontSize: '14px', color: '#3D3D3D' }}>Maxfter Inc.</td>
                <td style={{ padding: '16px', fontSize: '14px', color: '#3D3D3D' }}>
                  Credit Card<br />
                  <small className="text-muted">****7865</small>
                </td>
                <td style={{ padding: '16px', fontSize: '14px', color: '#3D3D3D' }}>Mar 21, 2025</td>
                <td style={{ padding: '16px', fontSize: '14px', color: '#3D3D3D', fontWeight: '600' }}>$3714.98</td>
                <td style={{ padding: '16px' }}>
                  <span className="badge px-3 py-2" style={{ backgroundColor: '#E6F4EA', color: '#28a745', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>
                    Success
                  </span>
                </td>
                <td style={{ padding: '16px' }}>
                  <button 
                    className="btn btn-link text-decoration-none fw-semibold p-0"
                    onClick={handleViewInvoice}
                    style={{ color: '#007C36', fontSize: '14px', border: 'none', background: 'none' }}
                  >
                    View Invoice
                  </button>
                </td>
                <td style={{ padding: '16px' }}>
                  <a href="#" className="text-decoration-none fw-semibold d-flex align-items-center gap-1" style={{ color: '#007C36', fontSize: '14px' }}>
                    <FaDownload size={14} />
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
      )}
    </>
  );
};

export default InvoiceCard;
