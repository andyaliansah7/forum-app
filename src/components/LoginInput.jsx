import React from 'react';
import useInput from '../hooks/useInput';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <label className="form-check-label">
            <div className="form-text text-inline">
              Don&apos;t have an account? &nbsp;
              <Link to="/register">Register</Link>
            </div>
          </label>
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary"
            onClick={() => login({ email, password })}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
