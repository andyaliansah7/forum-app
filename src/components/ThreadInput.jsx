import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function ThreadInput({ createThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <div className="card">
      <div className="card-body">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={onTitleChange}
          />
          <label>Title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            value={category}
            onChange={onCategoryChange}
          />
          <label>Category</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Content"
            value={body}
            onChange={onBodyChange}
          ></textarea>
          <label>Content</label>
        </div>
        <button
          className="btn btn-success float-end"
          onClick={() => createThread({ title, category, body })}
        >
          Post
        </button>
      </div>
    </div>
  );
}

ThreadInput.propTypes = {
  createThread: PropTypes.func.isRequired,
};

export default ThreadInput;
