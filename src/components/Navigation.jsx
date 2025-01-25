import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ authUser, logout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h3 className="text-center">
            <b className="text-primary">Forum</b>App
          </h3>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <Link to="/" className="nav-link text-decoration-none">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/leaderboard" className="nav-link text-decoration-none">
                Leaderboard
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={authUser.avatar}
                  alt="User"
                  width={30}
                  className="rounded-circle me-3"
                />
                <span>{authUser.name}</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userDropdown"
              >
                <li>
                  <button className="dropdown-item" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  logout: PropTypes.func.isRequired,
};

export { userShape };

export default Navigation;
