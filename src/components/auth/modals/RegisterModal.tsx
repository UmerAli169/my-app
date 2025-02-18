import React from 'react';
import {AuthModal} from '../common/AuthModal';
import {AuthInput} from '../common/AuthInput';
import {AuthButton} from '../common/AuthButton';
import {GoogleButton} from '../common/GoogleButton';
import {OrDivider} from '../common/OrDivider';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

export const RegisterModal = ({ isOpen, onClose, onLoginClick }: RegisterModalProps) => {
  return (
    <AuthModal isOpen={isOpen} onClose={onClose} title="Register">
      <form className="space-y-4">
        <AuthInput label="First Name" type="text" placeholder="Enter your first name" required />
        <AuthInput label="Last Name" type="text" placeholder="Enter your last name" required />
        <AuthInput label="Email" type="email" placeholder="Enter your email" required />
        <AuthInput label="Password" type="password" placeholder="Enter your password" required />
        <AuthInput label="Confirm Password" type="password" placeholder="Confirm your password" required />

        <div className="flex items-center gap-2">
          <input type="checkbox" id="newsletter" className="rounded border-gray-300" />
          <label htmlFor="newsletter" className="text-sm text-gray-600">
            Yes, I want to subscribe to the newsletter now
          </label>
        </div>

        <AuthButton type="submit">Register</AuthButton>

        <OrDivider />

        <GoogleButton />

        <div className="text-center text-sm text-gray-600">
          Do you already have an account?{' '}
          <button type="button" onClick={onLoginClick} className="text-pink-500 hover:text-pink-600">
            Back to Log In
          </button>
        </div>
      </form>
    </AuthModal>
  );
};
