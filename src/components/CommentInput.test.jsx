/**
 * skenario testing
 *
 * - CommentInput component
 *   - should handle comment typing correctly
 *   - should call createComment function when post button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentInput from './CommentInput';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter as Router } from 'react-router-dom';

expect.extend(matchers);

describe('CommentInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle comment typing correctly', async () => {
    // Arrange
    render(
      <Router>
        <CommentInput createComment={() => {}} />
      </Router>
    );
    const commentInput = await screen.getByPlaceholderText('Comment');

    // Action
    await userEvent.type(commentInput, 'Dolor sit amet');

    // Assert
    expect(commentInput).toHaveValue('Dolor sit amet');
  });


  it('should call createComment function when post button is clicked', async () => {
    // Arrange
    const mockCreateComment = vi.fn();
    render(
      <Router>
        <CommentInput createComment={mockCreateComment} />
      </Router>
    );
    const commentInput = await screen.getByPlaceholderText('Comment');
    await userEvent.type(commentInput, 'Dolor sit amet');
    const loginButton = await screen.getByRole('button', { name: 'Post' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockCreateComment).toBeCalledWith('Dolor sit amet');
  });
});
