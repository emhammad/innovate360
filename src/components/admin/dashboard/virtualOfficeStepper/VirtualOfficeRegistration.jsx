import React from 'react';
import { FaDownload } from 'react-icons/fa';

const virtualOfficeData = [
  {
    id: 1,
    name: "Mark",
    email: "Mark@gmail.com",
    phone: "+60 666 886 335",
    date: "28 Sep,2025",
    documentUrl: "/Legal_document.pdf"
  }
];

export default function VirtualOfficeRegistration() {
  const handleView = (doc) => {
    // Show document modal or redirect
    window.open(doc.documentUrl, "_blank");
  };

  const handleDownload = (doc) => {
    // Download document
    window.open(doc.documentUrl, "_blank");
  };

  return (
    <div className="container-fluid pb-4 pt-4">
      <div className="row">
        <div className="col-12">
          <div className="p-3 rounded-4" style={{ backgroundColor: '#007C360D' }}>
            <div className="table-responsive">
              <table className="table table-borderless mb-0" style={{ background: 'white', borderRadius: '12px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ backgroundColor: "#F7FAF7" }}>
                    <th style={{ fontSize: '14px', padding: '12px' }}>Sr#</th>
                    <th style={{ fontSize: '14px', padding: '12px' }}>Name</th>
                    <th style={{ fontSize: '14px', padding: '12px' }}>Email</th>
                    <th style={{ fontSize: '14px', padding: '12px' }}>Phone</th>
                    <th style={{ fontSize: '14px', padding: '12px' }}>Date</th>
                    <th style={{ fontSize: '14px', padding: '12px' }}>Action</th>
                    <th style={{ fontSize: '14px', padding: '12px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {virtualOfficeData.map((row, idx) => (
                    <tr key={row.id} style={{ background: '#fff', height: '48px' }}>
                      <td style={{ fontSize: '14px', padding: '12px' }}>{idx + 1}</td>
                      <td style={{ fontSize: '14px', padding: '12px' }}>{row.name}</td>
                      <td style={{ fontSize: '14px', padding: '12px' }}>{row.email}</td>
                      <td style={{ fontSize: '14px', padding: '12px' }}>{row.phone}</td>
                      <td style={{ fontSize: '14px', padding: '12px' }}>{row.date}</td>
                      <td style={{ fontSize: '14px', padding: '12px' }}>
                        <button
                          className="btn fw-semibold"
                          style={{
                            color: "#007C36",
                            background: "#fff",
                            borderRadius: "25px",
                            fontWeight: "600",
                            fontSize: "14px",
                            padding: "6px 24px",
                            border: "none",
                            boxShadow: "none"
                          }}
                          onClick={() => handleView(row)}
                        >
                          View
                        </button>
                      </td>
                      <td style={{ fontSize: '14px', padding: '12px' }}>
                        <button
                          className="btn d-flex align-items-center fw-semibold gap-2"
                          style={{
                            color: "#007C36",
                            // background: "#EDFF8B",
                            borderRadius: "50%",
                            fontWeight: "600",
                            fontSize: "12px",
                            padding: "8px",
                            border: "none",
                            boxShadow: "none"
                          }}
                          onClick={() => handleDownload(row)}
                          title="Download"
                        >
                          <FaDownload />
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}