import React, { useState } from 'react';

const VirtualOfficeCompletedDocument = ({ file }) => {
  const [virtualAddress, setVirtualAddress] = useState("123 Business Avenue, Suite 456, Metropolis, NY 10001, USA");

  const handleSave = () => {
    // Handle save functionality
    console.log('Virtual address saved:', virtualAddress);
    window.location.href = '/admin/dashboard';
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card" style={{ borderRadius: '16px', border: 'none', boxShadow: 'none' }}>
            <div className="card-body p-4">
              {/* Virtual Address Panel - Matching the image exactly */}
              <div
                className="p-4 mb-4"
                style={{
                  backgroundColor: '#E6F4EA',
                  borderRadius: '12px',
                  border: 'none'
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0" style={{ color: '#3D3D3D', fontWeight: '600' }}>
                    Virtual Address
                  </h5>
                  <textarea
                    className="form-control"
                    value={virtualAddress}
                    rows={4}
                    onChange={(e) => setVirtualAddress(e.target.value)}
                    style={{
                      width: '400px',
                      height: '100px',
                      minHeight: '100px',
                      borderRadius: '16px',
                      border: '1px solid rgb(146, 146, 146)',
                      backgroundColor: 'transparent',
                      fontSize: '14px',
                      color: '#3D3D3D',
                      padding: '8px 12px',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>

              {/* Save Button - Bottom Right */}
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-success"
                  onClick={handleSave}
                  style={{
                    borderRadius: '25px',
                    padding: '12px 24px',
                    fontWeight: '500',
                    fontSize: '16px',
                    backgroundColor: '#007C36',
                    border: 'none'
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualOfficeCompletedDocument;