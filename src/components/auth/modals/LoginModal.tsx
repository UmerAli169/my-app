import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { AuthModal } from '../common/AuthModal';
import { AuthForm } from '../formick/AuthForm';
import { AuthInput } from '../../../views/ui/shared/Input';
import { AuthButton } from '../common/AuthButton';
import { GoogleButton } from '../common/GoogleButton';
import { OrDivider } from '../common/OrDivider';
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRecoverPassword: () => void;
  onCreateAccount: () => void;
}

export const LoginModal = ({ isOpen, onClose, onRecoverPassword, onCreateAccount }: LoginModalProps) => {
  const [loginError, setLoginError] = useState('');

  const handleLogin = (values: Record<string, string>, { setSubmitting }: any) => {
    console.log('Form submitted with values:', values);
    setSubmitting(true);

    setTimeout(() => {
      if (values.email !== 'test@example.com' || values.password !== 'password123') {
        setLoginError('Incorrect email or password.');
      } else {
        setLoginError('');
        alert('Login successful');
      }
      setSubmitting(false);
    }, 1000);
  };

  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => {
        setLoginError('');
      }, 1500);

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [loginError]);
  return (
    <AuthModal isOpen={isOpen} onClose={onClose} title='Log In' heading='Please enter your e-mail and password:'>
      <AuthForm
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={handleLogin}
      >
        {loginError && (
          <div className='flex items-center gap-2 p-[10px] text-[14px] rounded-[4px] text-[#E77373] bg-[#F09A9B]/10'>
            <img src='/error.svg' alt='error' />
            {loginError}
          </div>
        )}

        <AuthInput type='email' name='email' placeholder='Email' required />
        <AuthInput type='password' name='password' placeholder='Password' required />

        <AuthButton type='submit'>Log In</AuthButton>

        <OrDivider />
        <GoogleButton />

        <div className='text-center   md:text-[16px] text-[14px] text-[#697586] font-medium'>
          <button type='button' onClick={onRecoverPassword}>
            Forgot your password? <span className='underline'> Recover password </span>
          </button>
        </div>

        <div className='text-center   md:text-[16px] text-[14px]  text-[#697586] font-medium'>
          New to Bloom Beauty?{' '}
          <button type='button' onClick={onCreateAccount} className='underline'>
            Create an Account
          </button>
        </div>
      </AuthForm>
    </AuthModal>
  );
};
