import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3 className="text-center mb-4">Login</h3>
          <LoginInput login={onLogin} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
