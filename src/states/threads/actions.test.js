/**
 * skenario test
 *
 * - asyncCreateThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import { asyncCreateThread, createThreadActionCreator } from './action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const fakeThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeErrorResponse = new Error('Ups, Something went wrong!');

describe('asyncCreateThread thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread;
  });

  afterEach(() => {
    api.createThread = api._createThread;

    // delete backup data
    delete api._createThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.resolve(fakeThreadResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncCreateThread({
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      createThreadActionCreator(fakeThreadResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncCreateThread({
      title: 'Judul-judulan',
      body: 'Isi',
      category: 'react',
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
