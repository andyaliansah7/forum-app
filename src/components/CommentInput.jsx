import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function CommentInput({ createComment }) {
  const [comment, onCommentChange, setComment] = useInput('');
  const onCommentSubmit = () => {
    createComment(comment);
    setComment('');
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Comment"
            value={comment}
            onChange={onCommentChange}
          ></textarea>
          <label>Comments</label>
        </div>
        <button
          className="btn btn-success float-end mt-2"
          onClick={onCommentSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
}

CommentInput.propTypes = {
  createComment: PropTypes.func.isRequired,
};

export default CommentInput;
