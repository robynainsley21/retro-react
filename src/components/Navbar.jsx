import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid p-3">
        <Link className="navbar-brand" to="/">
          <img
            src="https://robynainsley21.github.io/images/images/Portfolio logo (1).png"
            alt="logo"
            loading="lazy"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link className="navbar-brand" to="/" data-bs-dismiss="offcanvas">
              <img
                src="https://robynainsley21.github.io/images/images/Portfolio logo (1).png"
                alt="logo"
                loading="lazy"
              />
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav fw-bolder ms-auto">
              <li className="nav-item">
                <Link className="nav-link font-weight-bold" to="/" data-bs-dismiss="offcanvas">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" data-bs-dismiss="offcanvas">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume" data-bs-dismiss="offcanvas">
                  Education & Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects" data-bs-dismiss="offcanvas">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" data-bs-dismiss="offcanvas">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
