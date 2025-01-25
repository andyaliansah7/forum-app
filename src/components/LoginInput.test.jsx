/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter as Router } from 'react-router-dom';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <Router>
        <LoginInput login={() => {}} />
      </Router>
    );
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'abc@mail.com');

    // Assert
    expect(emailInput).toHaveValue('abc@mail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(
      <Router>
        <LoginInput login={() => {}} />
      </Router>
    );
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, '123456');

    // Assert
    expect(passwordInput).toHaveValue('123456');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(
      <Router>
        <LoginInput login={mockLogin} />
      </Router>
    );
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'abc@mail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '123456');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith(
      {
        email: 'abc@mail.com',
        password: '123456'
      }
    );
  });
});
