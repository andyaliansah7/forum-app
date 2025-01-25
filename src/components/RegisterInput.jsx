import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            value={name}
            onChange={onNameChange}
            placeholder="Name"
          />
        </div>
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
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary"
            onClick={() => register({ name, email, password })}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
