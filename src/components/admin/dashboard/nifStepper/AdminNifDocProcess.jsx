// pages/documents.js

import Head from "next/head";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";

export default function Documents() {

  const documents = [
    { name: "Legal_document.pdf", size: "200 KB", url: "/sample.pdf" },
    { name: "Confidential_Agreement.pdf", size: "180 KB", url: "/sample.pdf" },
  ];

  return (
    <div className="py-3 px-2">
      <Head>
        <title>Document Status</title>
      </Head>

      <div className="p-3 rounded-4" style={{ backgroundColor: '#007C360D' }}>
        {documents.map((doc, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center p-2 py-1 bg-white rounded mb-2">
            <div className="d-flex align-items-center">
              <Image src={'/assets/img/icon/document-text.png'} alt="No documents" width={20} height={20} className="mb-4 me-2" />
              <div>
                <div style={{ color: '#3D3D3D', fontWeight: '600' }}>{doc.name}</div>
                <small className="text-muted">{doc.size}</small>
              </div>
            </div>
            <a href={doc.url} download className="btn btn-sm rounded-circle pb-2" style={{ backgroundColor: '#EDFF8B' }}>
              <BsDownload style={{ fontSize: 'large' }} />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
