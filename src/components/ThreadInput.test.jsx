/**
 * skenario testing
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle content typing correctly
 *   - should call createThread function when post button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadInput from './ThreadInput';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter as Router } from 'react-router-dom';

expect.extend(matchers);

describe('ThreadInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(
      <Router>
        <ThreadInput createThread={() => {}} />
      </Router>
    );
    const titleInput = await screen.getByPlaceholderText('Title');

    // Action
    await userEvent.type(titleInput, 'Judul');

    // Assert
    expect(titleInput).toHaveValue('Judul');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(
      <Router>
        <ThreadInput createThread={() => {}} />
      </Router>
    );
    const categoryInput = await screen.getByPlaceholderText('Category');

    // Action
    await userEvent.type(categoryInput, 'General');

    // Assert
    expect(categoryInput).toHaveValue('General');
  });

  it('should handle content typing correctly', async () => {
    // Arrange
    render(
      <Router>
        <ThreadInput createThread={() => {}} />
      </Router>
    );
    const contentInput = await screen.getByPlaceholderText('Content');

    // Action
    await userEvent.type(contentInput, 'Lorem ipsum');

    // Assert
    expect(contentInput).toHaveValue('Lorem ipsum');
  });

  it('should call createThread function when post button is clicked', async () => {
    // Arrange
    const mockCreateThread = vi.fn();
    render(
      <Router>
        <ThreadInput createThread={mockCreateThread} />
      </Router>
    );
    const titleInput = await screen.getByPlaceholderText('Title');
    await userEvent.type(titleInput, 'Judul');
    const categoryInput = await screen.getByPlaceholderText('Category');
    await userEvent.type(categoryInput, 'General');
    const contentInput = await screen.getByPlaceholderText('Content');
    await userEvent.type(contentInput, 'Lorem ipsum');
    const postButton = await screen.getByRole('button', { name: 'Post' });

    // Action
    await userEvent.click(postButton);

    // Assert
    expect(mockCreateThread).toBeCalledWith(
      {
        title: 'Judul',
        category: 'General',
        body: 'Lorem ipsum'
      }
    );
  });
});
