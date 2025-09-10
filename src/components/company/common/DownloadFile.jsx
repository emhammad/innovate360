import { FaFileAlt, FaDownload } from 'react-icons/fa';

export default function NifCompletedDocument({ file }) {
  return (
    <div className="bg-success bg-opacity-10 rounded p-3">
      <div className="d-flex justify-content-between align-items-center border rounded px-3 py-2 bg-white">
        <div className="d-flex align-items-center gap-3">
          <FaFileAlt className="text-muted" />
          <div>
            <div className="fw-semibold">{file?.name || 'Name_document.pdf'}</div>
            <div className="text-muted small">{file?.size || '200 KB'}</div>
          </div>
        </div>

        <a
          href={file?.url || '#'}
          download
          className="btn btn-link p-0 text-decoration-none"
          title="Download"
        >
          <FaDownload className="text-success" />
        </a>
      </div>
    </div>
  );
}
