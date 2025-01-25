import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncCreateThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';

function CreateThreadPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCreateThread = ({ title, category, body }) => {
    dispatch(asyncCreateThread({ title, category, body }));
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-center m-4">Create Thread</h3>
          <ThreadInput createThread={onCreateThread} />
        </div>
      </div>
    </div>
  );
}

export default CreateThreadPage;
