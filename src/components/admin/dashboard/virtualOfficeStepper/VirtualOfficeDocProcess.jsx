import React from 'react';
import { FaDownload } from 'react-icons/fa';

export default function InvoiceSummary({ onPayNow }) {
    // Mock transaction data
    const transaction = {
        id: 1,
        item: 'NIF Registration Service',
        method: 'Bank Transfer',
        methodDetail: 'Pending',
        date: '2023-10-26',
        amount: '€150.00',
        status: 'Pending'
    };

    const getStatusStyle = (status) => {
        switch (status.toLowerCase()) {
            case 'success':
                return {
                    backgroundColor: '#28a745',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                };
            case 'pending':
                return {
                    backgroundColor: '#ffc107',
                    color: '#212529',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                };
            case 'failed':
                return {
                    backgroundColor: '#dc3545',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                };
            default:
                return {
                    backgroundColor: '#6c757d',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                };
        }
    };

    const handleViewInvoice = () => {
        // Handle view invoice action
        console.log('View invoice clicked');
    };

    return (
        <div className="container-fluid pb-4 pt-4">
            <div className="row">
                <div className="col-12">
                    <div className="p-3 rounded-4" style={{ backgroundColor: '#007C360D' }}>
                        {/* Transaction History Table */}
                        <div className="card" style={{
                            borderRadius: '16px',
                            border: 'none',
                            backgroundColor: 'white',
                            boxShadow: '0px 0px 24.8px 0px #00000026',
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}>

                            <div className="card-body" style={{ padding: '24px' }}>
                                <div className="table-responsive">
                                    <table className="table table-borderless table-striped mb-0">
                                        <thead>
                                            <tr style={{ backgroundColor: "#3D3D3D0D" }}>
                                                <th style={{ fontSize: '14px', padding: '12px ' }}>Purchased Item</th>
                                                <th style={{ fontSize: '14px', padding: '12px ' }}>Payment Method</th>
                                                <th style={{ fontSize: '14px', padding: '12px ' }}>Date</th>
                                                <th style={{ fontSize: '14px', padding: '12px ' }}>Amount</th>
                                                <th style={{ fontSize: '14px', padding: '12px ' }}>Status</th>
                                                <th style={{ fontSize: '14px', padding: '12px ' }}>Action</th>
                                                <th style={{ fontSize: '14px', padding: '12px ' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                style={{
                                                    borderBottom: "1px solid #f2f2f2",
                                                    backgroundColor: "#fff",
                                                    height: "48px",
                                                }}
                                            >
                                                <td style={{ fontSize: '14px', padding: '12px ' }} className="text-wrap">{transaction.item}</td>
                                                <td style={{ fontSize: '14px', padding: '12px ' }} className="text-wrap d-flex flex-column justify-content-center">
                                                    <span className="mb-0" style={{ lineHeight: '1.3' }}>{transaction.method}</span><span className="text-muted" style={{ fontSize: '12px' }}>{transaction.methodDetail}</span>
                                                </td>
                                                <td style={{ fontSize: '14px', padding: '12px ' }}>{transaction.date}</td>
                                                <td style={{ fontSize: '14px', padding: '12px ' }}>{transaction.amount}</td>
                                                <td style={{ fontSize: '14px', padding: '12px ' }}>
                                                    <span style={getStatusStyle(transaction.status)}>{transaction.status}</span>
                                                </td>
                                                <td style={{ fontSize: '14px', padding: '12px ' }}>
                                                    <button
                                                        className="btn btn-link fw-semibold"
                                                        type="button"
                                                        onClick={handleViewInvoice}
                                                        style={{
                                                            color: "#28a745",
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
                                                            color: "#28a745",
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
