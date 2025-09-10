// pages/documents.js

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineFilePdf, AiOutlineUpload, AiOutlineCheckCircle } from "react-icons/ai";
import { BsDownload, BsPencil } from "react-icons/bs";

import FilePreview from "@assets/img/company/no-file-preview.png"; // Make sure this exists
// Track Bootstrap instance




export default function Documents() {
  const [status, setStatus] = useState("none"); // "none", "received"
  const [step, setStep] = useState("list"); // "list", "signed"
  

  const documents = [
    { name: "Legal_document.pdf", size: "200 KB", url: "/sample.pdf" },
    { name: "Confidential_Agreement.pdf", size: "180 KB", url: "/sample.pdf" },
  ];


  return (
    <div className="container py-5">
      <Head>
        <title>Document Status</title>
      </Head>

      {step === "list" && (
        <>
          {status === "none" && (
            <div className="rounded-4 text-center p-5" style={{backgroundColor : '#007C360D'}}>
              <Image src={FilePreview} alt="No documents" width={200} height={150} className="mb-4" />
              <h6 className="mb-2"style={{ fontSize: '18px', color: '#3D3D3D', fontWeight: '600' }}>No documents uploaded</h6>
              <p style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '400' }}>Kindly wait till your documents are uploaded.</p>
            </div>
          )}

          {status === "received" && (
            <div className="p-3 rounded-4" style={{backgroundColor : '#007C360D'}}>
              {documents.map((doc, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center p-2 py-1 bg-white rounded mb-2">
                  <div className="d-flex align-items-center">
                    <AiOutlineFilePdf size={24} className="text-danger me-2" />
                    <div>
                      <div style={{color: '#3D3D3D', fontWeight: '600'}}>{doc.name}</div>
                      <small className="text-muted">{doc.size}</small>
                    </div>
                  </div>
                  <a href={doc.url} download className="btn btn-sm rounded-circle pb-2" style={{backgroundColor : '#EDFF8B'}}>
                    <BsDownload style={{fontSize : 'large'}} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </>
      )}



      {/* Debug controls */}
      <div className="mt-4">
        <p className="fw-bold">Debug Controls:</p>
        <button className="btn btn-outline-secondary me-2" onClick={() => setStatus("none")}>No Documents</button>
        <button className="btn btn-outline-secondary me-2" onClick={() => setStatus("received")}>Documents Received</button>
      </div>
    </div>
  );
}
