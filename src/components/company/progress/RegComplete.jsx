// pages/company-documents.js

import { useState } from 'react';
import Head from 'next/head';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import Image from 'next/image';

import SuccessIcon from '@assets/img/industry/check.svg'; // ✅ High-quality SVG check icon with transparent background

export default function CompanyDocuments() {
  const [status, setStatus] = useState("documents"); // "documents" | "registered"

  const documents = [
    { name: "Legal_document.pdf", size: "200 KB", url: "/sample.pdf" },
    { name: "Legal_document.pdf", size: "200 KB", url: "/sample.pdf" },
    { name: "Legal_document.pdf", size: "200 KB", url: "/sample.pdf" },
  ];

  return (
    <>
      <Head>
        <title>Company Documents</title>
      </Head>

      <div className="container pb-5" style={{ minHeight: '400px' }}>

        {/* Documents Display Section */}
        {status === "documents" && (
          <div className="p-4 pb-2 rounded-4" style={{ backgroundColor: '#007C360D' }}>
            {documents.map((doc, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center bg-white rounded mb-3 px-3 py-1 border"
              >
                <div className="d-flex align-items-center">
                  <AiOutlineFilePdf size={22} className="text-danger me-2" />
                  <div>
                    <div>{doc.name}</div>
                    <small className="text-muted">{doc.size}</small>
                  </div>
                </div>
                <a
                  href={doc.url}
                  download
                  className="btn btn-sm px-3 py-2 rounded-circle" style={{ backgroundColor: '#EDFF8B' }}
                >
                  <BsDownload style={{ fontSize: 'large' }} />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Success Confirmation Section */}
        {status === "registered" && (
          <div className="rounded text-center p-4 rounded-4" style={{ backgroundColor: '#007C360D' }}>
            <Image
              src={SuccessIcon} // Replace with your correct success image in /public
              alt="Success"
              width={150}
              height={150}
              className="mb-4"
            />
            <h5 className="mb-2" style={{ color: '#3D3D3D', fontWeight: '600' }}>Great! Your company is successfully registered</h5>
            <p className="small" style={{ color: '#3D3D3D' }}>This case is closed</p>
          </div>
        )}

        {/* Debugging Buttons (Optional) */}
        <div className="mt-4">
          <button className="btn btn-outline-secondary me-2" onClick={() => setStatus("documents")}>
            Show Documents
          </button>
          <button className="btn btn-outline-success" onClick={() => setStatus("registered")}>
            Show Confirmation
          </button>
        </div>
      </div>
    </>
  );
}
