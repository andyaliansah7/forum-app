import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import CreateThreadPage from './pages/CreateThreadPage';
import DetailPage from './pages/DetailPage';
import LeaderboardPage from './pages/LeaderbordPage';
import NotFoundPage from './pages/NotFoundPage';

import Navigation from './components/Navigation';
import Loading from './components/Loading';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <div className="container-fluid mt-2">
          <h3 className="text-center mb-4">
            <b className="text-primary">Forum</b>App
          </h3>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />

      <div className="container-fluid mt-2">
        <Navigation authUser={authUser} logout={onLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<CreateThreadPage />} />
          <Route path="/thread/:threadId" element={<DetailPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
