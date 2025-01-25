/**
 * skenario test
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import { asyncReceiveThreadDetail, receiveThreadDetailActionCreator } from './action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const fakeThreadDetailResponse = {
  'id': 'thread-1',
  'title': 'Thread Pertama',
  'body': 'Ini adalah thread pertama',
  'category': 'General',
  'createdAt': '2021-06-21T07:00:00.000Z',
  'owner': {
    'id': 'users-1',
    'name': 'John Doe',
    'avatar': 'https://generated-image-url.jpg'
  },
  'upVotesBy': [],
  'downVotesBy': [],
  'comments': [
    {
      'id': 'comment-1',
      'content': 'Ini adalah komentar pertama',
      'createdAt': '2021-06-21T07:00:00.000Z',
      'owner': {
        'id': 'users-1',
        'name': 'John Doe',
        'avatar': 'https://generated-image-url.jpg'
      },
      'upVotesBy': [],
      'downVotesBy': []
    }
  ]
};

const fakeErrorResponse = new Error('Ups, Something went wrong!');

describe('asyncReceiveThreadDetail thunk', () => {
  beforeEach(() => {
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    api.getThreadDetail = api._getThreadDetail;

    // delete backup data
    delete api._getThreadDetail;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadDetailActionCreator(fakeThreadDetailResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});