import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { commentShape } from './CommentItem';

function CommentList({ comments, authUser, upVote, downVote, neutralizeVote }) {
  return (
    <div className="container p-5">
      <h3>Comments</h3>
      {comments.length ? (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            {...comment}
            authUser={authUser}
            upVote={upVote}
            downVote={downVote}
            neutralizeVote={neutralizeVote}
          />
        ))
      ) : (
        <p>Comment is Empty</p>
      )}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
};

export default CommentList;
