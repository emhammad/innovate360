"use client";
import { useState } from "react";

export default function CompanyActivity({ onNext }) {
  const [activity, setActivity] = useState("");

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div className="text-center" style={{ maxWidth: '500px' }}>
        {/* Title */}
        <h4 className="mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>Describe your company activity</h4>

        {/* Subtitle */}
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "500px", fontSize: '14px' }}>
          Provide a brief overview of your company’s operations, including the
          industry, key services, and main activities.
        </p>

        {/* Textarea */}
        <div className="mx-auto" style={{ maxWidth: "500px", margin: '60px auto 40px auto' }}>
          <textarea
            className="form-control shadow-sm"
            placeholder="Your company's planned activity..."
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            style={{
              width: '90%',
              margin: '0 auto',
              borderRadius: "16px",
              border: "1px solid #79747E",
              resize: "none",
              height: "170px",
              minHeight: "170px",
              padding: "15px"
            }}
          ></textarea>
        </div>

        {/* Next Button */}
        <button
          type="button"
          className="btn px-4 py-2 mt-4"
          style={{ 
            width: '90%', 
            maxWidth: '500px', 
            minWidth: "180px", 
            borderRadius: "25px",
            backgroundColor: activity.trim() ? '#28a745' : '#1D1B201F',
            color: activity.trim() ? '#fff' : '#1D1B20',
            border: 'none'
          }}
          disabled={!activity.trim()}
          onClick={() => {
            // Store the activity data and proceed to next step
            console.log("Activity saved:", activity);
            onNext && onNext(activity);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
