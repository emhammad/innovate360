import { FaArrowUp, FaArrowDown, FaSearch } from "react-icons/fa";
import { useState } from "react";
import AnalyticsIcon from "@assets/img/icon/chart.png";
import CardIconActive from "@assets/img/icon/card.png";
import CaseDetail from "./CaseDetail";
import Image from "next/image";
const data = [
  {
    caseName: "John Doe",
    email: "olivia@untitledui.com",
    approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
    status: { text: "Pending", color: "text-danger", icon: <FaArrowDown size={12} /> },
    assignedTo: "Matthew Anderson",
  },
  {
    caseName: "John Doe",
    email: "olivia@untitledui.com",
    approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
    status: { text: "Invoice Paid", color: "text-success", icon: <FaArrowUp size={12} /> },
    assignedTo: "Jane Cooper",
  },
  {
    caseName: "John Doe",
    email: "olivia@untitledui.com",
    approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
    status: { text: "Name Applied", color: "text-danger", icon: <FaArrowDown size={12} /> },
    assignedTo: "Wade Warren",
  },
  {
    caseName: "John Doe",
    email: "olivia@untitledui.com",
    approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
    status: { text: "Invoice Paid", color: "text-success", icon: <FaArrowUp size={12} /> },
    assignedTo: "Brooklyn Simmons",
  },
  {
    caseName: "John Doe",
    email: "olivia@untitledui.com",
    approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
    status: { text: "Case Closed", color: "text-success", icon: <FaArrowUp size={12} /> },
    assignedTo: "Jenny Wilson",
  },
  {
    caseName: "John Doe",
    email: "olivia@untitledui.com",
    approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
    status: { text: "Case Closed", color: "text-success", icon: <FaArrowUp size={12} /> },
    assignedTo: "Esther Howard",
  },
  {
    caseName: "John Doe",
    email: "olivia@untitledui.com",
    approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
    status: { text: "Name Applied", color: "text-danger", icon: <FaArrowDown size={12} /> },
    assignedTo: "Leslie Alexander",
  },
  {
    caseName: "John Doe",
    email: "olivia@untitledui.com",
    approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
    status: { text: "Case Closed", color: "text-success", icon: <FaArrowUp size={12} /> },
    assignedTo: "Guy Hawkins",
  },
];


export default function Dashboard() {
  const [step, setSetp] = useState('caseList');
  const [Id, setId] = useState(0);
  const [search, setSearch] = useState("");

  const handleViewClick = (id) => {
    setSetp("viewCase")
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter data based on search term
  const filteredData = data.filter(item => 
    item.caseName.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.approvalRequests.toLowerCase().includes(search.toLowerCase()) ||
    item.assignedTo.toLowerCase().includes(search.toLowerCase()) ||
    item.status.text.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {
    const isSuccess = status.text === "Invoice Paid" || status.text === "Case Closed";
    return {
      backgroundColor: isSuccess ? "#E6F4EA" : "#FEE7E6",
      color: isSuccess ? "#28a745" : "#dc3545",
      fontWeight: 500,
      fontSize: "14px",
      borderRadius: "999px",
      padding: "4px 18px",
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      width: "fit-content",
    };
  };
  return (
    <>
      {step == 'caseList'
        && (
          <div style={{ padding: '35px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 style={{ fontWeight: '600', color: '#3D3D3D' }}>Dashboard</h5>
              <div className="position-relative" style={{ maxWidth: "300px" }}>
                <input
                  type="text"
                  placeholder="Search here"
                  className="form-control"
                  style={{
                    width: "100%",
                    borderRadius: "25px",
                    padding: "6px 20px 6px 50px",
                    height: '42px',
                    fontSize: '16px',
                    backgroundColor: 'transparent',
                    border: '1px solid #3D3D3D',
                  }}
                  value={search}
                  onChange={handleSearchChange}
                />
                <FaSearch
                  style={{
                    position: 'absolute',
                    left: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#3D3D3D',
                    fontSize: '16px',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>

            <div className="d-flex gap-4 mb-4">
              {/* Total Cases Card */}
              <div
                className="flex-fill rounded-3 px-4 py-2"
                style={{
                  backgroundColor: '#E6F4EA',
                  borderRadius: '16px',
                  position: 'relative'
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: '42px',
                      height: '42px',
                      backgroundColor: '#28a745',
                      color: 'white'
                    }}
                  >
                    <Image
                      src={AnalyticsIcon}
                      alt="Analytics Icon"
                      width={20}
                      height={20}
                      style={{
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </div>
                  <h6 className="mb-0 fw-bold" style={{ color: '#3D3D3D', fontSize: '14px' }}>
                    Total Cases
                  </h6>
                </div>
                <div className="mb-2">

                  <h2 className="mb-0 fw-bold" style={{ color: '#3D3D3D', fontSize: '28px' }}>
                    1,274
                  </h2>
                </div>
                <div className="d-flex align-items-center">
                  <FaArrowUp
                    size={12}
                    style={{ color: '#28a745', marginRight: '4px' }}
                  />
                  <small style={{ color: '#28a745', fontSize: '12px', fontWeight: '500' }}>
                    12% increase from last month
                  </small>
                </div>
              </div>

              {/* Invoice Paid Card */}
              <div
                className="flex-fill rounded-3 px-4 py-2"
                style={{
                  backgroundColor: '#FFF3CD',
                  borderRadius: '16px',
                  position: 'relative'
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: '42px',
                      height: '42px',
                      backgroundColor: '#FFC107',
                      color: '#3D3D3D'
                    }}
                  >
                    <Image
                      src={CardIconActive}
                      alt="Card Icon"
                      width={20}
                      height={20}
                      style={{
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </div>
                  <h6 className="mb-0 fw-bold" style={{ color: '#3D3D3D', fontSize: '14px' }}>
                    Invoice Paid
                  </h6>
                </div>
                <div className="mb-2">
                  <h2 className="mb-0 fw-bold" style={{ color: '#3D3D3D', fontSize: '28px' }}>
                    $53,00932
                  </h2>
                </div>
                <div className="d-flex align-items-center">
                  <FaArrowDown
                    size={12}
                    style={{ color: '#dc3545', marginRight: '4px' }}
                  />
                  <small style={{ color: '#dc3545', fontSize: '12px', fontWeight: '500' }}>
                    10% decrease from last month
                  </small>
                </div>
              </div>
            </div>

            <div
              className="table-responsive p-0"
              style={{
                marginTop: '35px',
                fontSize: '16px',
                backgroundColor: "#fff",
                borderRadius: "15px",
                overflow: "hidden",
                border: '1px solid rgba(61, 61, 61, 0.15)',
                boxShadow: "0 0 4px rgba(0,0,0,0.05)",
              }}
            >
              <table className="table table-borderless table-striped mb-0">
                <thead>
                  <tr style={{ backgroundColor: "#3D3D3D0D" }}>
                    <th style={{ fontSize: '14px', padding: '12px ' }}>Cases</th>
                    <th style={{ fontSize: '14px', padding: '12px ' }}>Approval Requests</th>
                    <th style={{ fontSize: '14px', padding: '12px ' }}>Status</th>
                    <th style={{ fontSize: '14px', padding: '12px ' }}>Assigned To</th>
                    <th style={{ fontSize: '14px', padding: '12px ' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map(({ caseName, email, approvalRequests, status, assignedTo }, i) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom: "1px solid #f2f2f2",
                          backgroundColor: i % 2 === 1 ? "#f8f9fa" : "#fff",
                          height: "48px",
                        }}
                      >
                        <td style={{ fontSize: '14px', padding: '12px ' }}>
                          <div className="fw-semibold" style={{ color: "#3D3D3D" }}>{caseName}</div>
                          <div style={{ color: "#6c757d", fontSize: "12px" }}>{email}</div>
                        </td>
                        <td style={{ fontSize: '14px', padding: '12px ' }}>{approvalRequests}</td>
                        <td style={{ fontSize: '14px', padding: '12px ' }}>
                          <span style={getStatusStyle(status)}>
                            {status.icon} {status.text}
                          </span>
                        </td>
                        <td style={{ fontSize: '14px', padding: '12px ' }}>{assignedTo}</td>
                        <td style={{ fontSize: '14px', padding: '12px ' }}>
                          <button
                            className="btn btn-link fw-semibold"
                            type="button"
                            onClick={() => handleViewClick(i)}
                            style={{
                              color: "#007C36",
                              textDecoration: "none",
                              padding: 0,
                              fontSize: '14px',
                            }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4" style={{ color: '#6c757d' }}>
                        No cases found matching your search criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      {
        step == 'viewCase' &&
        (
          <CaseDetail CaseId={Id} />
        )
      }
    </>
  );
}
