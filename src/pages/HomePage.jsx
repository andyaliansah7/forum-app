import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
} from '../states/threads/action';
import { Link } from 'react-router-dom';
import ThreadList from '../components/ThreadList';

function HomePage() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const {
    users = [],
    threads = [],
    authUser,
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralizeVoteThread = (id) => {
    dispatch(asyncNeutralizeVoteThread(id));
  };

  const categories = new Set(threads.map((thread) => thread.category));
  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="row my-4">
          <div className="col-6">
            {Array.from(categories).map((category) => {
              if (filter === category) {
                return (
                  <span
                    key={category}
                    onClick={() => setFilter('')}
                    className="badge rounded-pill text-bg-success me-2"
                  >
                    #{category}
                  </span>
                );
              }
              return (
                <span
                  key={category}
                  onClick={() => setFilter(category)}
                  className="badge rounded-pill text-bg-light me-2"
                >
                  #{category}
                </span>
              );
            })}
          </div>
          <div className="col-6">
            <Link to="/add">
              <button type="button" className="btn btn-primary float-end">
                Create Thread
              </button>
            </Link>
          </div>
        </div>

        <ThreadList
          threads={
            filter
              ? threadList.filter((thread) => thread.category === filter)
              : threadList
          }
          upVote={onUpVoteThread}
          downVote={onDownVoteThread}
          neutralizeVote={onNeutralizeVoteThread}
        />
      </div>
    </div>
  );
}

export default HomePage;
