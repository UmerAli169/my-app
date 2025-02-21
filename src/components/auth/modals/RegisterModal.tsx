import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { AuthModal } from '../common/AuthModal';
import { AuthForm } from '../formick/AuthForm';
import { AuthInput } from '../common/AuthInput';
import { AuthButton } from '../common/AuthButton';
import { GoogleButton } from '../common/GoogleButton';
import { OrDivider } from '../common/OrDivider';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

export const RegisterModal = ({ isOpen, onClose, onLoginClick }: RegisterModalProps) => {
  const [registerError, setRegisterError] = useState('');

  const handleRegister = (values: Record<string, string>, { setSubmitting }: any) => {
    console.log('Register form submitted:', values);
    setSubmitting(true);

    setTimeout(() => {
      if (values.email === 'test@example.com') {
        setRegisterError('Email is already registered.');
      } else {
        setRegisterError('');
        alert('Registration successful');
      }
      setSubmitting(false);
    }, 1000);
  };

  useEffect(() => {
    if (registerError) {
      const timer = setTimeout(() => {
        setRegisterError('');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [registerError]);

  return (
    <AuthModal isOpen={isOpen} onClose={onClose} title='Register' heading='Please fill in the fields below:'>
      <AuthForm
        initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('First name is required'),
          lastName: Yup.string().required('Last name is required'),
          email: Yup.string().email('Invalid email').required('Email is required'),
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required'),
        })}
        onSubmit={handleRegister}
      >
        {registerError && (
          <div className='flex items-center gap-2 p-2 text-sm rounded-md text-[#E77373] bg-[#F09A9B]/10'>
            <img src='/error.svg' alt='error' />
            {registerError}
          </div>
        )}

        <AuthInput name='firstName' type='text' placeholder='First Name' label='First Name' required />
        <AuthInput name='lastName' type='text' placeholder='Last Name' label='Last Name' required />
        <AuthInput name='email' type='email' placeholder='Email' required />
        <AuthInput name='password' type='password' placeholder='Password' required />
        <AuthInput name='confirmPassword' type='password' placeholder='Confirm Password' required />

        <div className='flex items-center gap-2'>
          <input type='checkbox' id='newsletter' className='rounded border-gray-300' />
          <label htmlFor='newsletter' className='text-sm text-gray-600'>
            Yes, I want to subscribe to the newsletter now
          </label>
        </div>

        <AuthButton type='submit'>Register</AuthButton>

        <OrDivider />

        <GoogleButton />
        <div className='text-center font-[poppins]  md:text-[16px] text-[14px]  text-[#697586] font-medium'>
          Do you already have an account?
          <button type='button' onClick={onLoginClick} className='underline'>
            Back to Log In{' '}
          </button>
        </div>
      </AuthForm>
    </AuthModal>
  );
};
