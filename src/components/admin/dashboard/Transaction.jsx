"use client";
import { useState } from "react";
import { FaDownload, FaSearch } from "react-icons/fa";
import InvoicePreview from "./InvoicePreview";

const transactions = [
  {
    id: 1,
    item: "Maxfter Inc.",
    method: "Credit Card",
    methodDetail: "****7865",
    date: "Mar 21, 2025",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 2,
    item: "Meta Inc.",
    method: "Bank Transfer",
    methodDetail: "****4532",
    date: "Mar 07, 2025",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 3,
    item: "LinkedIn Inc.",
    method: "PayPal",
    methodDetail: "@clairetak",
    date: "Feb 27, 2025",
    amount: "$3714.98",
    status: "Failed",
  },
  {
    id: 4,
    item: "Mahisy LLP",
    method: "Debit Card",
    methodDetail: "***6542",
    date: "Feb 20, 2025",
    amount: "$3714.98",
    status: "Failed",
  },
  {
    id: 5,
    item: "Bima Traders",
    method: "Payoneer",
    methodDetail: "****5432",
    date: "Feb 12, 2025",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 6,
    item: "Maxfter Inc.",
    method: "Debit Card",
    methodDetail: "****9642",
    date: "Feb 03, 2025",
    amount: "$3714.98",
    status: "Failed",
  },
  {
    id: 7,
    item: "Bima Traders",
    method: "Credit Card",
    methodDetail: "****7895",
    date: "Jan 27, 2025",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 8,
    item: "Digital Marketer",
    method: "Bank Transfer",
    methodDetail: "****4352",
    date: "Jan 12, 2025",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 9,
    item: "Meta Corp",
    method: "PayPal",
    methodDetail: "@claretask",
    date: "Dec 24, 2024",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 10,
    item: "Meta Inc.",
    method: "Bank Transfer",
    methodDetail: "****4352",
    date: "Jan 12, 2025",
    amount: "$3714.98",
    status: "Failed",
  },
  {
    id: 11,
    item: "Bima Traders",
    method: "Credit Card",
    methodDetail: "****7895",
    date: "Jan 27, 2025",
    amount: "$3714.98",
    status: "Success",
  },
];

export default function AdminTransactionsTable() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);

  const filtered = transactions.filter((txn) =>
    txn.item.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = filtered.slice(startIndex, endIndex);

  // Reset to first page when search changes
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getStatusStyle = (status) => {
    return {
      backgroundColor: status === "Success" ? "#E6F4EA" : "#FEE7E6",
      color: status === "Success" ? "#28a745" : "#dc3545",
      fontWeight: 500,
      fontSize: "14px",
      borderRadius: "999px",
      padding: "4px 18px",
      display: "inline-block",
      width: "fit-content",
    };
  };

  const handleViewInvoice = () => {
    setShowInvoicePreview(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoicePreview(false);
  };

  return (
    <>
      {showInvoicePreview ? (
        <InvoicePreview onClose={handleCloseInvoice} />
      ) : (
        <div style={{ padding: '35px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 style={{ fontWeight: '600', color: '#3D3D3D' }}>Transactions</h5>
        <div className="position-relative" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            placeholder="Search Transactions"
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

      {/* Table */}
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
              <th style={{ fontSize: '14px', padding: '12px ' }}>Client Company</th>
              <th style={{ fontSize: '14px', padding: '12px ' }}>Payment Method</th>
              <th style={{ fontSize: '14px', padding: '12px ' }}>Date</th>
              <th style={{ fontSize: '14px', padding: '12px ' }}>Amount</th>
              <th style={{ fontSize: '14px', padding: '12px ' }}>Status</th>
              <th style={{ fontSize: '14px', padding: '12px ' }}>Action</th>
              <th style={{ fontSize: '14px', padding: '12px ' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((txn, index) => (
              <tr
                key={txn.id}
                style={{
                  borderBottom: "1px solid #f2f2f2",
                  backgroundColor: index % 2 === 1 ? "#f8f9fa" : "#fff",
                  height: "48px",
                }}
              >
                <td style={{ fontSize: '14px', padding: '12px ' }} className="text-wrap">{txn.item}</td>
                <td style={{ fontSize: '14px', padding: '12px ' }} className="text-wrap d-flex flex-column justify-content-center">
                  <span className="mb-0" style={{ lineHeight: '1.3' }}>{txn.method}</span><span className="text-muted" style={{ fontSize: '12px' }}>{txn.methodDetail}</span>
                </td>
                <td style={{ fontSize: '14px', padding: '12px ' }}>{txn.date}</td>
                <td style={{ fontSize: '14px', padding: '12px ' }}>{txn.amount}</td>
                <td style={{ fontSize: '14px', padding: '12px ' }}>
                  <span style={getStatusStyle(txn.status)}>{txn.status}</span>
                </td>
                <td style={{ fontSize: '14px', padding: '12px ' }}>
                  <button
                    className="btn btn-link fw-semibold"
                    type="button"
                    onClick={handleViewInvoice}
                    style={{
                      color: "#007C36",
                      textDecoration: "none",
                      padding: 0,
                      fontSize: '14px',
                    }}
                  >
                    View Invoice
                  </button>
                </td>
                <td style={{ fontSize: '14px', padding: '12px ' }}>
                  <button
                    className="btn btn-link d-flex align-items-center fw-semibold"
                    type="button"
                    style={{
                      color: "#007C36",
                      textDecoration: "none",
                      padding: 0,
                      gap: "6px",
                      fontSize: '14px',
                    }}
                  >
                    <FaDownload size={14} />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div style={{ fontSize: '14px', color: '#666' }}>
            Showing {startIndex + 1} to {Math.min(endIndex, filtered.length)} of {filtered.length} entries
          </div>

          <div className="d-flex align-items-center gap-2">
            {/* Previous Button */}
            <button
              className="btn btn-outline-secondary"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              style={{
                padding: '6px 12px',
                fontSize: '14px',
                borderRadius: '6px',
                border: '1px solid #dee2e6',
                backgroundColor: currentPage === 1 ? '#f8f9fa' : 'white',
                color: currentPage === 1 ? '#6c757d' : '#495057',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="d-flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className="btn"
                  onClick={() => handlePageChange(page)}
                  style={{
                    padding: '6px 12px',
                    fontSize: '14px',
                    borderRadius: '6px',
                    border: '1px solid #dee2e6',
                    backgroundColor: currentPage === page ? '#007C36' : 'white',
                    color: currentPage === page ? 'white' : '#495057',
                    cursor: 'pointer',
                    minWidth: '40px'
                  }}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              className="btn btn-outline-secondary"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{
                padding: '6px 12px',
                fontSize: '14px',
                borderRadius: '6px',
                border: '1px solid #dee2e6',
                backgroundColor: currentPage === totalPages ? '#f8f9fa' : 'white',
                color: currentPage === totalPages ? '#6c757d' : '#495057',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
              }}
            >
              Next
            </button>
          </div>
        </div>
        )}
        </div>
      )}
    </>
  );
}
