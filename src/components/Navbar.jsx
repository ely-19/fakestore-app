import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container">
        <Link className="navbar-brand fs-4" to="/">
          <span style={{ fontWeight: "700" }}>FakeStore Pink</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="https://fakestoreapi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                API
              </a>
            </li>

            <li className="nav-item">
              <Link className="btn btn-primary px-4" to="/">
                Comprar 💖
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
