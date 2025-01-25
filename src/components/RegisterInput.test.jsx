/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter as Router } from 'react-router-dom';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // Arrange
    render(
      <Router>
        <RegisterInput register={() => {}} />
      </Router>
    );
    const nameInput = await screen.getByPlaceholderText('Name');

    // Action
    await userEvent.type(nameInput, 'ABC');

    // Assert
    expect(nameInput).toHaveValue('ABC');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <Router>
        <RegisterInput register={() => {}} />
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
        <RegisterInput register={() => {}} />
      </Router>
    );
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, '123456');

    // Assert
    expect(passwordInput).toHaveValue('123456');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(
      <Router>
        <RegisterInput register={mockRegister} />
      </Router>
    );
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'ABC');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'abc@mail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '123456');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith(
      {
        name: 'ABC',
        email: 'abc@mail.com',
        password: '123456'
      }
    );
  });
});
