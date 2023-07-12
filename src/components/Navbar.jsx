import { Link, useLocation } from "react-router-dom";
import { mapURL } from "../config/constants";
function Navbar() {
  const location = useLocation();
  const selected = mapURL.get(location.pathname);

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          CRUD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={
                  selected === 1
                    ? "nav-link text-secondary"
                    : "nav-link text-light"
                }
                to="/sales"
              >
                SaleOrderItem
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  selected === 2
                    ? "nav-link text-secondary"
                    : "nav-link text-light"
                }
                to="/items"
              >
                Item
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  selected === 3
                    ? "nav-link text-secondary"
                    : "nav-link text-light"
                }
                to="/orders"
              >
                Order
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
