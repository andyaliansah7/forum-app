import React from 'react';
import PropTypes from 'prop-types';

function CommentButton({ totalComments, toThreadDetail }) {
  return (
    <button
      type="button"
      className="btn btn-outline-success btn-sm position-relative"
      onClick={() => toThreadDetail()}
    >
      Comment
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {totalComments}
      </span>
    </button>
  );
}

CommentButton.propTypes = {
  totalComments: PropTypes.number.isRequired,
  toThreadDetail: PropTypes.func.isRequired,
};

export default CommentButton;
