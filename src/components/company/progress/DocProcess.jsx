// pages/documents.js

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineFilePdf, AiOutlineUpload, AiOutlineCheckCircle } from "react-icons/ai";
import { BsDownload, BsPencil } from "react-icons/bs";

import FilePreview from "@assets/img/company/no-file-preview.png"; // Make sure this exists
// Track Bootstrap instance
let bootstrap;



export default function Documents() {
  const [status, setStatus] = useState("sign"); // "none", "received", "sign"
  const [showModal, setShowModal] = useState(false);
  const [signature, setSignature] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [step, setStep] = useState("list"); // "list", "signed"
  const fileInputRef = useRef();

  const documents = [
    { name: "Legal_document.pdf", size: "200 KB", url: "/sample.pdf" },
    { name: "Confidential_Agreement.pdf", size: "180 KB", url: "/sample.pdf" },
  ];

useEffect(() => {
  // Dynamically load Bootstrap JS after window is available
  import("bootstrap/dist/js/bootstrap.bundle.min.js").then((mod) => {
    bootstrap = mod;
  });
}, []);

const openModal = () => {
  if (!bootstrap) return;
  const modal = new bootstrap.Modal(document.getElementById("signatureModal"));
  modal.show();
};

const closeModal = () => {
  if (!bootstrap) return;
  const modal = bootstrap.Modal.getInstance(document.getElementById("signatureModal"));
  if (modal) modal.hide();
};


  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setSignature(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSignDocument = (doc) => {
    setSelectedDoc(doc);
    openModal();
  };

  const handleSignatureAdded = () => {
    // Handle signature addition logic here
    console.log("Signature added to document:", selectedDoc?.name, signature);
    closeModal();
    setStep("signed");
  };

  return (
    <div className="container pb-5">
    <Head>
      <title>Document Status</title>
    </Head>

    {step === "list" && (
      <>
        {status === "none" && (
          <div className="rounded text-center p-4 rounded-4" style={{ backgroundColor: '#007C360D' }}>
            <Image src={FilePreview} alt="No file preview" width={'100%'} height={'100%'} className="mb-4" />
            <h6 className="fw-bold mb-2">No documents uploaded</h6>
            <p className="text-muted small">Kindly wait till your documents are uploaded.</p>
          </div>
        )}

        {status === "received" && (
          <div className="p-4 pb-2 rounded-4" style={{ backgroundColor: '#007C360D', border: '1px solid #3D3D3D4D' }}>
            {documents.map((doc, index) => (
              <div key={index} className="d-flex align-items-center justify-content-between px-3 py-2 bg-white rounded mb-3" style={{ border: '1px solid #3D3D3D4D' }}>
                <div className="d-flex align-items-center">
                  <AiOutlineFilePdf size={24} className="text-danger me-2" />
                  <div>
                    <div>{doc.name}</div>
                    <small className="text-muted">{doc.size}</small>
                  </div>
                </div>
                <a href={doc.url} download   className="d-flex justify-content-between align-items-center bg-white rounded mb-3 px-3 py-1 border">
                  <BsDownload style={{ fontSize: 'large' }} />
                </a>
              </div>
            ))}
          </div>
        )}

        {status === "sign" && (
          <div className="p-4 pb-2 rounded-4" style={{ backgroundColor: '#007C360D' }}>
            {documents.map((doc, index) => (
              <div key={index}   className="d-flex justify-content-between align-items-center bg-white rounded mb-3 px-3 py-1 border">
                <div className="d-flex align-items-center">
                  <AiOutlineFilePdf size={24} className="text-danger me-2" />
                  <div>
                    <div>{doc.name}</div>
                    <small className="text-muted">{doc.size}</small>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <a href={doc.url} download className="btn btn-sm px-3 rounded-circle" style={{ backgroundColor: '#EDFF8B' }}>
                    <BsDownload style={{ fontSize: 'large' }} />
                  </a>
                   <button
                     className="btn btn-sm px-3 py-2 d-flex align-items-center rounded-pill text-white"
                     style={{ backgroundColor: '#007C36' }}
                     onClick={() => handleSignDocument(doc)}
                   >
                     <BsPencil className="me-1" /> Sign
                   </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    )}

    {step === "signed" && (
      <div className="rounded text-center p-4 rounded-4 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#007C360D' , minHeight: '250px' }}>
        <AiOutlineCheckCircle size={48} className="text-success mb-3" />
        <h6 className="fw-bold mb-2">Great! We have received your signed documents</h6>
        <p className="text-muted small">
          Please wait till the government has approved. You will be notified shortly.
        </p>
      </div>
    )}

    {/* Signature Modal */}
    <div className="modal fade" id="signatureModal" tabIndex="-1" aria-labelledby="signatureModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signatureModalLabel">Add Signature</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>

          <div className="modal-body text-center">
            {!signature && (
              <>
                <div
                  className="p-4 border rounded"
                  onClick={() => fileInputRef.current.click()}
                  style={{ cursor: "pointer", backgroundColor: '#007C360D' }}
                >
                  <AiOutlineUpload size={40} className="text-success mb-2" />
                  <p className="mb-1">Click to upload your signature</p>
                  <small className="text-muted">PNG, JPG - max 1MB</small>
                </div>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="d-none"
                  ref={fileInputRef}
                  onChange={handleSignatureUpload}
                />
              </>
            )}
            {signature && (
              <>
                <p className="text-success fw-bold">Signature Uploaded</p>
                <Image
                  src={signature}
                  alt="Signature Preview"
                  width={200}
                  height={70}
                  className="border rounded"
                />
              </>
            )}
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={closeModal}>
              Cancel
            </button>
             <button
               className="btn btn-success"
               onClick={handleSignatureAdded}
               disabled={!signature}
             >
               Add Signature
             </button>
          </div>
        </div>
      </div>
    </div>

    {/* Debug controls */}
    <div className="mt-5">
      <p className="fw-bold">Debug Controls:</p>
      <button className="btn btn-outline-secondary me-2" onClick={() => setStatus("none")}>No Documents</button>
      <button className="btn btn-outline-secondary me-2" onClick={() => setStatus("received")}>Documents Received</button>
      <button className="btn btn-outline-secondary" onClick={() => setStatus("sign")}>Require Signature</button>
    </div>
  </div>
  );
}
