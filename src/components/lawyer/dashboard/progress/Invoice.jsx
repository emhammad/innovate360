import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import InvoicePreview from '../../../admin/dashboard/InvoicePreview';

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
        <div style={{ backgroundColor: '#F3F9F6', borderRadius: '24px', padding: '30px', margin: 'auto 30px' }}>
          {/* Table */}
          <div
            className="table-responsive p-0"
            style={{
              fontSize: '16px',
              backgroundColor: "#fff",
              borderRadius: "15px",
              overflow: "hidden",
              border: '1px solid rgba(61, 61, 61, 0.15)',
              boxShadow: "0 0 4px rgba(0,0,0,0.05)",
            }}
          >
            <table className="table table-borderless mb-0">
              <thead>
                <tr style={{ backgroundColor: "#3D3D3D0D" }}>
                  <th style={{ fontSize: '14px', padding: '12px ', backgroundColor: "#3D3D3D0D" }}>Purchased Item</th>
                  <th style={{ fontSize: '14px', padding: '12px ', backgroundColor: "#3D3D3D0D" }}>Payment Method</th>
                  <th style={{ fontSize: '14px', padding: '12px ', backgroundColor: "#3D3D3D0D" }}>Date</th>
                  <th style={{ fontSize: '14px', padding: '12px ', backgroundColor: "#3D3D3D0D" }}>Amount</th>
                  <th style={{ fontSize: '14px', padding: '12px ', backgroundColor: "#3D3D3D0D" }}>Status</th>
                  <th style={{ fontSize: '14px', padding: '12px ', backgroundColor: "#3D3D3D0D" }}>Action</th>
                  <th style={{ fontSize: '14px', padding: '12px ', backgroundColor: "#3D3D3D0D" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom">
                  <td>Maxfter Inc.</td>
                  <td>
                    Credit Card<br />
                    <small className="text-muted">****7865</small>
                  </td>
                  <td>Mar 21, 2025</td>
                  <td><strong>$3714.98</strong></td>
                  <td>
                    <span style={{
                      backgroundColor: "#E6F4EA",
                      color: "#28a745",
                      fontWeight: 500,
                      fontSize: "14px",
                      borderRadius: "999px",
                      padding: "4px 18px",
                      display: "inline-block",
                      width: "fit-content",
                    }}>Success</span>
                  </td>
                  <td>
                    <button
                      className="btn btn-link text-success text-decoration-none fw-semibold p-0"
                      onClick={handleViewInvoice}
                      style={{ border: 'none', background: 'none' }}
                    >
                      View Invoice
                    </button>
                  </td>
                  <td>
                    <a href="#" className="text-success text-decoration-none fw-semibold d-flex align-items-center gap-1">
                      <FaDownload size={14} />
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default InvoiceCard;
