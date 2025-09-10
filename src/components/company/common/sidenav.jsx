export default function SideNav(){
    return(
        <div
        className="d-flex flex-column align-items-center bg-dark text-white py-4"
        style={{ width: "70px" }}
      >
        <div className="mb-4 fw-bold" style={{ fontSize: "0.8rem" }}>
          INNOVATE360°
        </div>

        <ul className="nav flex-column text-center" style={{ gap: "20px" }}>
          <li>
            <button className="btn btn-outline-light rounded-circle p-2">
              <i className="bi bi-house"></i>
            </button>
          </li>
          <li>
            <button className="btn btn-outline-light rounded-circle p-2">
              <i className="bi bi-list-task"></i>
            </button>
          </li>
          <li>
            <button className="btn btn-outline-light rounded-circle p-2">
              <i className="bi bi-chat"></i>
            </button>
          </li>
          <li>
            <button className="btn btn-outline-light rounded-circle p-2">
              <i className="bi bi-gear"></i>
            </button>
          </li>
        </ul>
      </div>
    );
}