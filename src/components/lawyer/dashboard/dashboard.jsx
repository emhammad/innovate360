import { FaArrowUp, FaArrowDown, FaSearch } from "react-icons/fa";
import { useState } from "react";
import CaseDetail from "./CaseDetail";
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
  const [caseData, setCaseData] = useState(data);

  const handleViewClick = (id) => {
    setSetp("viewCase")
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedData = [...caseData];
    updatedData[index].status = {
      text: newStatus,
      color: newStatus === "Invoice Paid" || newStatus === "Case Closed" ? "text-success" : "text-danger",
      icon: newStatus === "Invoice Paid" || newStatus === "Case Closed" ? <FaArrowUp size={12} /> : <FaArrowDown size={12} />
    };
    setCaseData(updatedData);
  };

  const filtered = caseData.filter((item) =>
    item.caseName.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.approvalRequests.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {
    let backgroundColor, textColor;

    switch (status.text) {
      case "Name Applied":
        backgroundColor = "#FFEDEB";
        textColor = "#dc3545";
        break;
      case "Invoice Paid":
        backgroundColor = "#EDFF8B";
        textColor = "#28a745";
        break;
      case "Pending":
        backgroundColor = "#FFF4ED";
        textColor = "#dc3545";
        break;
      case "Case Closed":
        backgroundColor = "#ECFDF3";
        textColor = "#28a745";
        break;
      default:
        backgroundColor = "#FFF4ED";
        textColor = "#dc3545";
    }

    return {
      backgroundColor: backgroundColor,
      color: textColor,
      fontWeight: 500,
      fontSize: "14px",
      borderRadius: "999px",
      padding: "2px 18px",
      display: "inline-block",
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
                  placeholder="Search Cases"
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
                  onChange={(e) => setSearch(e.target.value)}
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
                    <th style={{ fontSize: '14px', padding: '12px' }}>Cases</th>
                    <th style={{ fontSize: '14px', padding: '12px' }}>Approval Requests</th>
                    <th style={{ fontSize: '14px', padding: '12px' }}>Status</th>
                    <th style={{ fontSize: '14px', padding: '12px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(({ caseName, email, approvalRequests, status, assignedTo }, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid #f2f2f2",
                        backgroundColor: i % 2 === 1 ? "#f8f9fa" : "#fff",
                        height: "48px",
                      }}
                    >
                      <td style={{ fontSize: '14px', padding: '12px' }} className="text-wrap d-flex flex-column justify-content-center">
                        <span className="mb-0" style={{ lineHeight: '1.3' }}>{caseName}</span>
                        <span className="text-muted" style={{ fontSize: '12px' }}>{email}</span>
                      </td>
                      <td style={{ fontSize: '14px', padding: '12px' }} className="text-wrap">{approvalRequests}</td>
                      <td style={{ fontSize: '14px', padding: '12px' }}>
                        <select
                          value={status.text}
                          onChange={(e) => handleStatusChange(i, e.target.value)}
                          style={{
                            ...getStatusStyle(status),
                            border: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                            appearance: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: 'right 8px center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '16px',
                            paddingRight: '32px',
                            minWidth: '120px'
                          }}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Invoice Paid">Invoice Paid</option>
                          <option value="Name Applied">Name Applied</option>
                          <option value="Case Closed">Case Closed</option>
                        </select>
                      </td>
                      <td style={{ fontSize: '14px', padding: '12px' }}>
                        <button
                          className="btn btn-link fw-semibold"
                          type="button"
                          style={{
                            color: "#28a745",
                            textDecoration: "none",
                            padding: 0,
                            fontSize: '14px',
                          }}
                          onClick={() => handleViewClick(i)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
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
