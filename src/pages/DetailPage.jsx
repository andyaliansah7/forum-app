import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
} from '../states/threadDetail/action';
import ThreadDetailCard from '../components/ThreadDetailCard';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';

function DetailPage() {
  const { threadId } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onNeutralizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail());
  };

  const onCommentSubmit = (content) => {
    dispatch(asyncCreateComment({ content }));
  };

  const onUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };

  const onDownVoteComment = (id) => {
    dispatch(asyncDownVoteComment(id));
  };

  const onNeutralizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };

  if (threadDetail === null) {
    return null;
  }

  return (
    <div className="container">
      <ThreadDetailCard
        {...threadDetail}
        authUser={authUser.id}
        upVote={onUpVoteThreadDetail}
        downVote={onDownVoteThreadDetail}
        neutralizeVote={onNeutralizeVoteThreadDetail}
      />
      <CommentInput createComment={onCommentSubmit} />
      <CommentList
        comments={threadDetail.comments}
        authUser={authUser.id}
        upVote={onUpVoteComment}
        downVote={onDownVoteComment}
        neutralizeVote={onNeutralizeVoteComment}
      />
    </div>
  );
}

export default DetailPage;
