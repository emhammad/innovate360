import { FaDownload } from "react-icons/fa";

export function PaymentHistory() {
    return (
        <div className="bg-light rounded p-4 mt-4">
            <h5 className="fw-bold mb-3">Payment History</h5>
            <div className="table-responsive">
                <table className="table table-borderless align-middle">
                    <thead className="table-light">
                        <tr>
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
                        <tr>
                            <td>Maxfter Inc.</td>
                            <td>Credit Card<br /><small className="text-muted">****7865</small></td>
                            <td>Mar 21, 2025</td>
                            <td>$3714.98</td>
                            <td>
                                <span className="badge bg-success">Success</span>
                            </td>
                            <td>
                                <button
                                    className="btn btn-link text-decoration-none text-success fw-bold p-0"
                                    onClick={handleViewInvoice}
                                    style={{ border: 'none', background: 'none' }}
                                >
                                    View Invoice
                                </button>
                            </td>
                            <td>
                                <a href="#" className="text-decoration-none text-success fw-bold">
                                    <FaDownload /> Download
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}