import React from 'react';
import { AuthModal } from '../common/AuthModal';
import { AuthInput } from '../common/AuthInput';
import { AuthButton } from '../common/AuthButton';
import { GoogleButton } from '../common/GoogleButton';
import { OrDivider } from '../common/OrDivider';
import Link from 'next/link';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRecoverPassword: () => void;
  onCreateAccount: () => void;
}

export const LoginModal = ({ isOpen, onClose, onRecoverPassword, onCreateAccount }: LoginModalProps) => {
  return (
    <AuthModal isOpen={isOpen} onClose={onClose} title='Log In' heading='Please enter your e-mail and password:'>
      <form className='flex flex-col gap-4'>
        <AuthInput type='email' placeholder='Email' required />
        <AuthInput type='password' placeholder='Password' required />
        <AuthButton type='submit'>Log In</AuthButton>
        <OrDivider />
        <GoogleButton />
        <div className='text-center font-[poppins] text-[16px] text-[#383838]  font-medium'>
          <button type='button' onClick={onRecoverPassword}>
            Forgot your password? <span className='underline'> Recover password </span>
          </button>
        </div>
        <div className='text-center font-[poppins] text-[16px] text-[#383838]  font-medium'>
          New to Bloom Beauty?{' '}
          <button type='button' onClick={onCreateAccount} className='underline  '>
            Create an Account
          </button>
        </div>
      </form>
    </AuthModal>
  );
};
