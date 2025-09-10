"use client";
import { useState } from "react";
import UploadFile from "@assets/img/step_content/upload_file.png";
import Image from "next/image";

export default function UploadIdDetails({ onNext, onBack }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);

      if (selectedFile.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setPreviewUrl(null);
      }
    } else {
      alert("Please upload a file smaller than 5MB.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div className="text-center" style={{ marginTop: '60px' , maxWidth: '600px' }}>
        {/* Title */}
        <h4 className="mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>Add Passport/ID Details</h4>

        {/* Subtitle */}
        <p className="mx-auto mb-2" style={{color: '#3D3D3D', fontSize: '16px' }}>
          Please upload a clear, high-quality scan of your passport or government-issued ID.
          Ensure the document is not cropped, blurred, or affected by glare.
          <br />
          If you’re uploading a passport, include the page that contains your signature.
        </p>

        <p className="text-muted mx-auto mb-4 small" style={{ maxWidth: "500px", fontSize: '16px' }}>
          Accepted formats: <span className="text-primary fw-semibold">.JPG, PNG, or PDF</span>.
          Maximum file size: <span className="fw-semibold">5MB</span>.
        </p>

        {/* Upload Area */}
        <div
          className="mx-auto d-flex align-items-center justify-content-center mb-4 mt-4"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "10px",
            backgroundColor: "#fafafa",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
          }}
          onClick={() => document.getElementById("id-upload-input").click()}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
            />
          ) : file ? (
            <p className="small text-truncate px-2">{file.name}</p>
          ) : (
            <Image
              src={UploadFile} // Replace with your actual placeholder
              alt="Upload"
              style={{ opacity: 0.5 }}
            />
          )}
        </div>

        {/* Hidden File Input */}
        <input
          id="id-upload-input"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          style={{ display: "none" }}
          onChange={handleUpload}
        />

        {/* Upload Button */}
        <button
          type="button"
          className="btn btn-success px-4 py-2 mb-3"
          style={{ width: "70%", borderRadius: "25px", marginTop: '60px' }}
          disabled={!file}
          onClick={() => onNext(file)}
        >
          Upload
        </button>

        {/* Go Back */}
        <div>
          <button
            type="button"
            className="btn btn-link text-success fw-bold text-decoration-none"
            onClick={onBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
