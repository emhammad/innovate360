import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { 
  AiOutlineFilePdf, 
  AiOutlineUpload, 
  AiOutlineCheckCircle,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineRotateRight,
  AiOutlineArrowLeft
} from "react-icons/ai";
import { BsDownload, BsPencil } from "react-icons/bs";

export default function DocumentViewerPage() {
  const router = useRouter();
  const [showSignatureBox, setShowSignatureBox] = useState(false);
  const [signature, setSignature] = useState(null);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [document, setDocument] = useState(null);

  useEffect(() => {
    // Get document data from URL params or localStorage
    const { docName, docSize, docUrl } = router.query;
    if (docName) {
      setDocument({
        name: docName,
        size: docSize || "200 KB",
        url: docUrl || "/sample.pdf"
      });
    } else {
      // Fallback to sample document
      setDocument({
        name: "Legal_document.pdf",
        size: "200 KB",
        url: "/sample.pdf"
      });
    }
  }, [router.query]);

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setSignature(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddSignature = () => {
    if (signature) {
      // Handle signature addition logic here
      console.log("Signature added to document:", document?.name, signature);
      // Close the signature modal
      setShowSignatureBox(false);
      setSignature(null);
      // You can add logic here to save the signature or navigate back
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 300));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleGoBack = () => {
    // Close the current tab/window
    window.close();
    // If window.close() doesn't work (some browsers block it), navigate back
    if (window.history.length > 1) {
      router.back();
    } else {
      // Fallback: navigate to the main page
      router.push('/');
    }
  };

  return (
    <>
      <Head>
        <title>Document Viewer - {document?.name || 'Document'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="document-viewer-page" style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Top Bar */}
        <div className="topbar" style={{
          backgroundColor: 'white',
          borderBottom: '1px solid #e0e0e0',
          padding: '15px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-outline-secondary btn-sm me-3"
              onClick={handleGoBack}
              style={{ border: 'none', backgroundColor: 'transparent' }}
            >
              <AiOutlineArrowLeft size={20} />
            </button>
            <div className="d-flex align-items-center">
              <AiOutlineFilePdf size={24} className="text-danger me-3" />
              <div>
                <h5 className="mb-0 fw-bold">{document?.name}</h5>
                <small className="text-muted">{document?.size}</small>
              </div>
            </div>
          </div>
          
          <div className="d-flex align-items-center gap-3">
            {/* Document Controls */}
            <div className="d-flex align-items-center gap-2">
              <button 
                className="btn btn-outline-secondary btn-sm"
                onClick={handleZoomOut}
                title="Zoom Out"
              >
                <AiOutlineZoomOut />
              </button>
              <span className="text-muted small">{zoom}%</span>
              <button 
                className="btn btn-outline-secondary btn-sm"
                onClick={handleZoomIn}
                title="Zoom In"
              >
                <AiOutlineZoomIn />
              </button>
              <button 
                className="btn btn-outline-secondary btn-sm"
                onClick={handleRotate}
                title="Rotate"
              >
                <AiOutlineRotateRight />
              </button>
            </div>

            <a 
              href={document?.url} 
              download 
              className="btn btn-outline-primary btn-sm"
            >
              <BsDownload className="me-1" /> Download
            </a>
            
            <button 
              className="btn btn-success btn-sm"
              onClick={() => setShowSignatureBox(true)}
            >
              <BsPencil className="me-1" /> Add Signature
            </button>
          </div>
        </div>

        {/* Document Content */}
        <div className="document-content" style={{
          flex: 1,
          padding: '40px',
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#f8f9fa'
        }}>
          <div 
            className="document-preview"
            style={{
              transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
              transformOrigin: 'center top',
              transition: 'transform 0.3s ease',
              backgroundColor: 'white',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              overflow: 'hidden',
              width: '100%',
              maxWidth: '800px',
              minHeight: '1000px',
              position: 'relative'
            }}
          >
            {/* Document Content */}
            <div style={{
              width: '100%',
              height: '100%',
              padding: '60px',
              fontFamily: 'Arial, sans-serif',
              lineHeight: '1.6',
              color: '#333'
            }}>
              {/* Document Header */}
              <div className="text-center mb-5">
                <h1 className="fw-bold text-uppercase mb-4" style={{ 
                  fontSize: '28px', 
                  letterSpacing: '2px',
                  color: '#2c3e50'
                }}>
                  NON-DISCLOSURE AGREEMENT
                </h1>
                <p className="text-muted" style={{ fontSize: '16px' }}>
                  This is a brief overview of your company's relationship, including the products/services, and their activities.
                </p>
              </div>

              {/* Document Body */}
              <div className="mb-5">
                <h3 className="fw-bold mb-3" style={{ color: '#2c3e50', fontSize: '18px' }}>Key Terms</h3>
                <div className="mb-4">
                  <p><strong>Non-Disclosure Agreement:</strong> This agreement governs the confidential information shared between the parties.</p>
                  <p><strong>Agreement:</strong> This Non-Disclosure Agreement ("Agreement") is entered into on the date of execution.</p>
                  <p><strong>Confidential Information:</strong> Any and all information disclosed by one party to the other.</p>
                  <p><strong>Effective Date:</strong> The date this agreement becomes effective.</p>
                  <p><strong>Disclosing Party:</strong> The party sharing confidential information.</p>
                  <p><strong>Receiving Party:</strong> The party receiving confidential information.</p>
                </div>

                <h3 className="fw-bold mb-3" style={{ color: '#2c3e50', fontSize: '18px' }}>Confidential Information</h3>
                <div className="mb-4">
                  <p>The term "Confidential Information" includes, but is not limited to:</p>
                  <ul className="ps-4">
                    <li>Commercial relations and business strategies</li>
                    <li>Financial information and business plans</li>
                    <li>Marketing plans and customer lists</li>
                    <li>Trade secrets and proprietary technology</li>
                    <li>Any other information marked as confidential</li>
                  </ul>
                </div>

                <h3 className="fw-bold mb-3" style={{ color: '#2c3e50', fontSize: '18px' }}>Return of Confidential Information</h3>
                <div className="mb-4">
                  <p>Upon termination of this agreement, the Receiving Party agrees to return all confidential information to the Disclosing Party or destroy such information as directed by the Disclosing Party.</p>
                </div>

                <h3 className="fw-bold mb-3" style={{ color: '#2c3e50', fontSize: '18px' }}>Governing Law</h3>
                <div className="mb-5">
                  <p>This agreement shall be governed by and construed in accordance with the laws of the applicable jurisdiction.</p>
                </div>
              </div>

              {/* Signature Section */}
              <div className="mt-5 pt-4" style={{ borderTop: '2px solid #e9ecef' }}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="mb-3">
                      <label className="fw-bold mb-2">Disclosing Party</label>
                      <div className="border-bottom pb-2" style={{ minHeight: '40px' }}>
                        {signature && (
                          <Image
                            src={signature}
                            alt="Signature"
                            width={120}
                            height={40}
                            style={{ objectFit: 'contain' }}
                          />
                        )}
                      </div>
                      <small className="text-muted">Signature</small>
                    </div>
                    <div>
                      <div className="border-bottom pb-1" style={{ minHeight: '30px' }}></div>
                      <small className="text-muted">Printed Name</small>
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-4">
                    <div className="mb-3">
                      <label className="fw-bold mb-2">Receiving Party</label>
                      <div className="border-bottom pb-2" style={{ minHeight: '40px' }}></div>
                      <small className="text-muted">Signature</small>
                    </div>
                    <div>
                      <div className="border-bottom pb-1" style={{ minHeight: '30px' }}></div>
                      <small className="text-muted">Printed Name</small>
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <div className="border-bottom pb-1" style={{ minHeight: '30px' }}></div>
                      <small className="text-muted">Date</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Box Modal */}
        {showSignatureBox && (
          <div className="signature-modal-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}>
            <div className="signature-modal" style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '40px',
              maxWidth: '600px',
              width: '90%',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
              border: '1px solid #e9ecef'
            }}>
              <div className="text-center mb-4">
                <div className="mb-3">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#28a745',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <BsPencil size={24} className="text-white" />
                  </div>
                </div>
                <h4 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>Add Your Signature</h4>
                <p className="text-muted">Upload your signature to complete the document</p>
              </div>

              <div className="text-center">
                {!signature ? (
                  <>
                    <div
                      className="p-5 border rounded"
                      onClick={() => document.getElementById('signature-upload').click()}
                      style={{ 
                        cursor: "pointer", 
                        backgroundColor: '#f8f9fa',
                        border: '2px dashed #28a745',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#e8f5e8';
                        e.target.style.borderColor = '#1e7e34';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#f8f9fa';
                        e.target.style.borderColor = '#28a745';
                      }}
                    >
                      <AiOutlineUpload size={60} className="text-success mb-3" />
                      <h6 className="mb-2 fw-bold">Upload Your Signature</h6>
                      <p className="text-muted mb-2">Click here to upload your signature image</p>
                      <small className="text-muted">PNG, JPG - max 1MB</small>
                    </div>
                    <input
                      id="signature-upload"
                      type="file"
                      accept="image/png, image/jpeg"
                      className="d-none"
                      onChange={handleSignatureUpload}
                    />
                  </>
                ) : (
                  <>
                    <div className="mb-4">
                      <div style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#28a745',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}>
                        <AiOutlineCheckCircle size={24} className="text-white" />
                      </div>
                      <h6 className="text-success fw-bold mb-2">Signature Ready!</h6>
                      <p className="text-muted">Preview your signature below</p>
                    </div>
                    <div className="border rounded p-4 mb-4" style={{ 
                      backgroundColor: '#f8f9fa',
                      border: '2px solid #28a745'
                    }}>
                      <Image
                        src={signature}
                        alt="Signature Preview"
                        width={250}
                        height={100}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="d-flex gap-3 justify-content-center mt-4">
                <button 
                  className="btn btn-outline-secondary px-4 py-2"
                  onClick={() => {
                    setShowSignatureBox(false);
                    setSignature(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-success px-4 py-2"
                  onClick={handleAddSignature}
                  disabled={!signature}
                  style={{
                    backgroundColor: signature ? '#28a745' : '#6c757d',
                    borderColor: signature ? '#28a745' : '#6c757d'
                  }}
                >
                  Add Signature to Document
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
