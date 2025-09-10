// pages/documents.js

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineFilePdf, AiOutlineUpload, AiOutlineCheckCircle } from "react-icons/ai";
import { FaUpload, FaFileUpload, FaFileDownload } from 'react-icons/fa';
import { BsDownload, BsPencil } from "react-icons/bs";

import FilePreview from "@assets/img/company/no-file-preview.png"; // Make sure this exists
// Track Bootstrap instance
let bootstrap;



export default function Documents() {

  const [activeTab, setActiveTab] = useState('upload');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [receivedFiles, setReceivedFiles] = useState([
    { 
      id: 1,
      name: "Legal_document.pdf", 
      size: "200 KB", 
      url: "/sample.pdf"
    },
    { 
      id: 2,
      name: "Confidential_Agreement.pdf", 
      size: "180 KB", 
      url: "/sample.pdf"
    }
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [showDocumentViewer, setShowDocumentViewer] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log('Dropped file:', file);
    // Add validation and processing logic here
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const newFile = {
        id: Date.now() + Math.random(),
        name: file.name,
        size: formatFileSize(file.size),
        progress: 0,
        status: 'uploading'
      };
      setUploadedFiles(prev => [...prev, newFile]);
      simulateUpload(newFile.id);
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const simulateUpload = (fileId) => {
    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        // Keep completed file in uploaded files AND add to received files
        setUploadedFiles(prev => {
          const updatedFiles = prev.map(file =>
            file.id === fileId
              ? { ...file, progress: 100, status: 'completed' }
              : file
          );

          // Add completed file to received files
          const completedFile = prev.find(file => file.id === fileId);
          if (completedFile) {
            setReceivedFiles(prevReceived => [...prevReceived, {
              id: completedFile.id,
              name: completedFile.name,
              size: completedFile.size,
              url: `/uploads/${completedFile.name}`
            }]);
          }

          return updatedFiles;
        });
        clearInterval(interval);
        setIsUploading(false);
      } else {
        setUploadedFiles(prev =>
          prev.map(file =>
            file.id === fileId
              ? { ...file, progress: Math.round(progress) }
              : file
          )
        );
      }
    }, 200);
  };

  const handleUploadMore = () => {
    // Try the main file input first, then the received documents one
    const fileInput = document.getElementById('fileInput') || document.getElementById('fileInputReceived');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleViewDocument = (doc) => {
    setSelectedDocument(doc);
    setShowDocumentViewer(true);
  };

  const closeDocumentViewer = () => {
    setShowDocumentViewer(false);
    setSelectedDocument(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-5">
      <Head>
        <title>Document Status</title>
      </Head>

      <div className="d-flex" style={{ gap: '20px' }}>
        {/* Left Sidebar */}
        <div className="d-flex flex-column" style={{ width: '215px' }}>
          <button
            className={`btn d-flex align-items-center gap-2 mb-3 ${activeTab === 'upload' ? 'btn-success' : 'btn-outline-secondary'}`}
            onClick={() => setActiveTab('upload')}
            style={{
              padding: '12px 16px',
              borderRadius: '12px',
              border: activeTab === 'upload' ? 'none' : '1px solid #dee2e6',
              backgroundColor: activeTab === 'upload' ? '#007C36' : 'white',
              color: activeTab === 'upload' ? 'white' : '#495057',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            <FaFileUpload size={20} />
            Upload Documents
          </button>

          <button
            className={`btn d-flex align-items-center gap-2 ${activeTab === 'received' ? 'btn-success' : 'btn-outline-secondary'}`}
            onClick={() => setActiveTab('received')}
            style={{
              padding: '12px 16px',
              borderRadius: '12px',
              border: activeTab === 'received' ? 'none' : '1px solid #dee2e6',
              backgroundColor: activeTab === 'received' ? '#007C36' : 'white',
              color: activeTab === 'received' ? 'white' : '#495057',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            <FaFileDownload size={20} />
            Received Documents
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow-1">
          {/* Upload Documents */}
          {activeTab === 'upload' && (
            <div
              className="p-4"
              style={{
                borderRadius: '16px',
                backgroundColor: '#F3F9F6',
                minHeight: '400px'
              }}
            >
              {/* Show uploaded files if any, otherwise show dropzone */}
              {uploadedFiles.length > 0 ? (
                <div>
                  {uploadedFiles.map((file) => (
                    <div
                      key={file.id}
                      className="d-flex align-items-center p-3 bg-white rounded-3 mb-3"
                      style={{
                        borderRadius: '12px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      {/* File Icon */}
                      <div className="me-3">
                        <AiOutlineFilePdf size={24} style={{ color: '#6c757d' }} />
                      </div>

                      {/* File Info */}
                      <div className="flex-grow-1 d-flex justify-content-between align-items-center">
                        <div>
                          <div style={{
                            fontWeight: '500',
                            color: '#3D3D3D',
                            fontSize: '14px',
                            marginBottom: '4px'
                          }}>
                            {file.name}
                          </div>
                          <div style={{
                            color: '#6c757d',
                            fontSize: '12px',
                            marginBottom: '8px'
                          }}>
                            {file.size}
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div
                          className="progress"
                          style={{
                            height: '4px',
                            backgroundColor: '#e9ecef',
                            borderRadius: '2px',
                            minWidth: '300px'
                          }}
                        >
                          <div
                            className="progress-bar"
                            style={{
                              width: `${file.progress}%`,
                              backgroundColor: '#007C36',
                              borderRadius: '2px',
                              transition: 'width 0.3s ease'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Upload More Button */}
                  <button
                    onClick={handleUploadMore}
                    className="btn btn-link p-0"
                    style={{
                      color: '#007C36',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    + Upload more
                  </button>
                </div>
              ) : (
                /* Upload Dropzone - shown by default */
                <div
                  className="d-flex flex-column justify-content-center align-items-center text-center"
                  style={{
                    height: '400px',
                    borderRadius: '16px',
                    backgroundColor: '#F3F9F6',
                    cursor: 'pointer',
                    padding: '40px'
                  }}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => {
                    const fileInput = document.getElementById('fileInput');
                    if (fileInput) {
                      fileInput.click();
                    }
                  }}
                >
                  <div
                    className="text-white rounded-circle d-flex justify-content-center align-items-center mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#007C36'
                    }}
                  >
                    <FaUpload size={32} />
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontSize: '18px', color: '#3D3D3D', fontWeight: '500' }}>
                      Click to upload or drag and drop
                    </p>
                    <small style={{ color: '#6c757d', fontSize: '14px' }}>
                      PDF or DOCX (max. 10MB)
                    </small>
                  </div>
                </div>
              )}

              {/* File Input - Always available */}
              <input
                type="file"
                id="fileInput"
                hidden
                onChange={handleFileSelect}
                accept=".pdf,.docx"
                multiple
              />
            </div>
          )}

          {/* Received Documents */}
          {activeTab === 'received' && (
            <div
              className="p-4"
              style={{
                borderRadius: '16px',
                backgroundColor: '#F3F9F6',
                minHeight: '400px'
              }}
            >
              <h5 className="mb-4" style={{ color: '#3D3D3D' }}>Received Documents</h5>
              {receivedFiles.map((doc, index) => (
                <div key={doc.id || index} className="d-flex justify-content-between align-items-center p-2 bg-white rounded-3 border mb-3" style={{ borderRadius: '12px' }}>
                  <div className="d-flex align-items-center">
                    <AiOutlineFilePdf size={24} className="text-danger me-3" />
                    <div>
                      <div style={{ fontWeight: '600', color: '#3D3D3D', fontSize: '14px' }}>{doc.name}</div>
                      <small className="text-muted">{doc.size}</small>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      onClick={() => handleViewDocument(doc)}
                      className="btn btn-sm rounded-pill px-3"
                      style={{
                        backgroundColor: '#007C36',
                        color: 'white',
                        border: 'none',
                        fontSize: '12px'
                      }}
                    >
                      View
                    </button>
                    <a href={doc.url} download className="btn btn-sm rounded-circle pb-2" style={{ backgroundColor: '#EDFF8B' }}>
                      <BsDownload style={{ fontSize: 'large' }} />
                    </a>
                  </div>
                </div>
              ))}

              {/* File Input for Received Documents */}
              <input
                type="file"
                id="fileInputReceived"
                hidden
                onChange={handleFileSelect}
                accept=".pdf,.docx"
                multiple
              />
            </div>
          )}
        </div>
      </div>

      {/* Document Viewer Modal */}
      {showDocumentViewer && selectedDocument && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999
          }}
          onClick={closeDocumentViewer}
        >
          <div
            className="bg-white rounded-3 position-relative"
            style={{
              width: '90%',
              maxWidth: '800px',
              maxHeight: '90%',
              overflow: 'auto',
              border: '3px solid #007C36'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Document Content */}
            <div className="p-4">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0" style={{ color: '#3D3D3D', fontWeight: '600' }}>
                  {selectedDocument.name}
                </h4>
                <button
                  onClick={closeDocumentViewer}
                  className="btn btn-sm"
                  style={{
                    backgroundColor: '#007C36',
                    color: 'white',
                    border: 'none'
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Document Body */}
              <div
                className="border rounded p-4"
                style={{
                  borderColor: '#007C36',
                  backgroundColor: '#f8f9fa',
                  minHeight: '500px'
                }}
              >
                <div className="text-center mb-4">
                  <h2 style={{ color: '#3D3D3D', fontWeight: 'bold', fontSize: '24px' }}>
                    NON-DISCLOSURE AGREEMENT
                  </h2>
                  <p style={{ color: '#6c757d', fontSize: '14px', marginTop: '10px' }}>
                    Provide a brief overview of your company's operations, including the industry, key services, and main activities.
                  </p>
                </div>

                <div className="mb-4">
                  <h5 style={{ color: '#3D3D3D', fontWeight: 'bold', marginBottom: '15px' }}>PARTIES</h5>
                  <p style={{ color: '#3D3D3D', fontSize: '14px', lineHeight: '1.6' }}>
                    This Non-Disclosure Agreement ("Agreement") is entered into on <strong>Effective Date: _______________</strong> between:
                  </p>
                  <div className="ms-3">
                    <p style={{ color: '#3D3D3D', fontSize: '14px', lineHeight: '1.6' }}>
                      <strong>Disclosing Party:</strong> [Company Name]<br />
                      Address: [Company Address]
                    </p>
                    <p style={{ color: '#3D3D3D', fontSize: '14px', lineHeight: '1.6' }}>
                      <strong>Receiving Party:</strong> [Client Name]<br />
                      Address: [Client Address]
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 style={{ color: '#3D3D3D', fontWeight: 'bold', marginBottom: '15px' }}>CONFIDENTIAL INFORMATION</h5>
                  <p style={{ color: '#3D3D3D', fontSize: '14px', lineHeight: '1.6' }}>
                    For purposes of this Agreement, "Confidential Information" shall include all data, information (oral or written),
                    business and industry-related information, discoveries, processes, techniques, programs, knowledge bases, customer lists,
                    potential customers, business partners, affiliated partners, leads, know-how, and other related services.
                  </p>
                  <p style={{ color: '#3D3D3D', fontSize: '14px', lineHeight: '1.6' }}>
                    The Receiving Party agrees not to disclose, copy, clone, modify, or use such information without the express written
                    consent of the Disclosing Party.
                  </p>
                </div>

                <div className="mb-4">
                  <h5 style={{ color: '#3D3D3D', fontWeight: 'bold', marginBottom: '15px' }}>RETURN OF CONFIDENTIAL INFORMATION</h5>
                  <p style={{ color: '#3D3D3D', fontSize: '14px', lineHeight: '1.6' }}>
                    Upon termination of this Agreement, the Receiving Party agrees to return all Confidential Information to the Disclosing Party.
                  </p>
                </div>

                <div className="mb-4">
                  <h5 style={{ color: '#3D3D3D', fontWeight: 'bold', marginBottom: '15px' }}>OWNERSHIP</h5>
                  <p style={{ color: '#3D3D3D', fontSize: '14px', lineHeight: '1.6' }}>
                    This Agreement is not transferable and may only be transferred with written consent from both parties.
                  </p>
                </div>

                <div className="mb-4">
                  <h5 style={{ color: '#3D3D3D', fontWeight: 'bold', marginBottom: '15px' }}>GOVERNING LAW</h5>
                  <p style={{ color: '#3D3D3D', fontSize: '14px', lineHeight: '1.6' }}>
                    This Agreement shall be construed under the laws of: <strong>_________________</strong>
                  </p>
                </div>

                <div className="mb-4">
                  <h5 style={{ color: '#3D3D3D', fontWeight: 'bold', marginBottom: '15px' }}>SIGNATURE AND DATE</h5>
                  <p style={{ color: '#3D3D3D', fontSize: '14px', lineHeight: '1.6' }}>
                    The parties agree to the terms and conditions as demonstrated by their signatures below.
                  </p>
                </div>

                {/* Signature Section */}
                <div className="mt-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="border-bottom mb-2" style={{ height: '40px' }}></div>
                      <p style={{ color: '#3D3D3D', fontSize: '14px', margin: 0 }}>John Doe</p>
                      <p style={{ color: '#6c757d', fontSize: '12px', margin: 0 }}>Disclosing Party</p>
                    </div>
                    <div className="col-md-6">
                      <div className="border-bottom mb-2" style={{ height: '40px' }}></div>
                      <p style={{ color: '#3D3D3D', fontSize: '14px', margin: 0 }}>Receiving Party</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="border-bottom mb-2" style={{ height: '40px', width: '200px' }}></div>
                    <p style={{ color: '#6c757d', fontSize: '12px', margin: 0 }}>Date</p>
                  </div>
                </div>
              </div>

              {/* Back Button */}
              <div className="mt-4">
                <button
                  onClick={closeDocumentViewer}
                  className="btn"
                  style={{
                    backgroundColor: '#007C36',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px'
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}