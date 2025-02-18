import React from 'react';
import {AuthModal} from '../common/AuthModal';
import {AuthInput} from '../common/AuthInput';
import {AuthButton} from '../common/AuthButton';
import {GoogleButton} from '../common/GoogleButton';
import {OrDivider} from '../common/OrDivider';
import Link from 'next/link';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRecoverPassword: () => void;
  onCreateAccount: () => void;
}

export const LoginModal = ({ 
  isOpen, 
  onClose, 
  onRecoverPassword, 
  onCreateAccount 
}: LoginModalProps) => {
  return (
    <AuthModal
      isOpen={isOpen}
      onClose={onClose}
      title="Log In"
    >
      <form className="space-y-4">
        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          required
        />
        
        <AuthButton type="submit">Log In</AuthButton>
        
        <div className="text-center">
          <button
            type="button"
            onClick={onRecoverPassword}
            className="text-gray-600 hover:text-gray-800 text-sm"
          >
            Forgot your password? Recover password
          </button>
        </div>

        <OrDivider />
        
        <GoogleButton />

        <div className="text-center text-sm text-gray-600">
          New to Bloom Beauty?{' '}
          <button
            type="button"
            onClick={onCreateAccount}
            className="text-pink-500 hover:text-pink-600"
          >
            Create an Account
          </button>
        </div>
      </form>
    </AuthModal>
  );
};

