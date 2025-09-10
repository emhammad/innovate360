"use client";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import InvoicePreview from "../../admin/dashboard/InvoicePreview";

const transactions = [
  {
    id: 1,
    item: "Maxfter Inc.",
    method: "Credit Card ****7895",
    date: "Mar 21, 2025",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 2,
    item: "Meta Inc.",
    method: "Bank Transfer ****4352",
    date: "Mar 07, 2025",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 3,
    item: "LinkedIn Inc.",
    method: "PayPal @claretask",
    date: "Feb 27, 2025",
    amount: "$3714.98",
    status: "Failed",
  },
  {
    id: 4,
    item: "Mahisy LLP",
    method: "Debit Card ****9642",
    date: "Feb 20, 2025",
    amount: "$3714.98",
    status: "Failed",
  },
  {
    id: 5,
    item: "Bima Traders",
    method: "Payoneer ****5432",
    date: "Feb 12, 2025",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 6,
    item: "Maxfter Inc.",
    method: "Debit Card ****9642",
    date: "Feb 03, 2025",
    amount: "$3714.98",
    status: "Failed",
  },
  {
    id: 7,
    item: "Bima Traders",
    method: "Credit Card ****7895",
    date: "Jan 27, 2025",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 8,
    item: "Digital Marketer",
    method: "Bank Transfer ****4352",
    date: "Jan 12, 2025",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 9,
    item: "Meta Corp",
    method: "PayPal @claretask",
    date: "Dec 24, 2024",
    amount: "$3714.98",
    status: "Success",
  },
  {
    id: 10,
    item: "Meta Inc.",
    method: "Bank Transfer ****4352",
    date: "Jan 12, 2025",
    amount: "$3714.98",
    status: "Failed",
  },
];

export default function TransactionsTable() {
  const [search, setSearch] = useState("");
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);

  const filtered = transactions.filter((txn) =>
    txn.item.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {
    return {
      backgroundColor: status === "Success" ? "#E6F4EA" : "#FEE7E6",
      color: status === "Success" ? "#28a745" : "#dc3545",
      fontWeight: 500,
      fontSize: "14px",
      borderRadius: "999px",
      padding: "6px 16px",
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
        <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Transactions</h5>
        <input
          type="text"
          placeholder="Search Invoices"
          className="form-control"
          style={{
            maxWidth: "250px",
            borderRadius: "20px",
            padding: "8px 15px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div
        className="table-responsive p-0"
        style={{
          backgroundColor: "#fff",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 0 4px rgba(0,0,0,0.05)",
        }}
      >
        <table className="table table-borderless mb-0">
          <thead>
            <tr style={{ backgroundColor: "#f8f9fa", height: "56px" }}>
              <th>Purchased Item</th>
              <th>Payment Method</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((txn,index) => (
              <tr
                key={txn.id}
                style={{
                  borderBottom: "1px solid #f2f2f2",
                  backgroundColor: index % 2 === 1 ? "#f8f9fa" : "#fff",
                  height: "56px",
                }}
              >
                <td>{txn.item}</td>
                <td>{txn.method}</td>
                <td>{txn.date}</td>
                <td>{txn.amount}</td>
                <td>
                  <span style={getStatusStyle(txn.status)}>{txn.status}</span>
                </td>
                <td>
                  <button
                    className="btn btn-link fw-semibold"
                    onClick={handleViewInvoice}
                    style={{
                      color: "#28a745",
                      textDecoration: "none",
                      padding: 0,
                    }}
                  >
                    View Invoice
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-link d-flex align-items-center fw-semibold"
                    style={{
                      color: "#28a745",
                      textDecoration: "none",
                      padding: 0,
                      gap: "6px",
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
        </div>
      )}
    </>
  );
}
