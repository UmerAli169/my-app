"use client";

import React from "react";
import InputField from "../shared/InputField";
import Button from "../shared/Button";

interface GuestContactFormProps {
  email?: string;
  isLoggedIn: boolean;
  onLogout: () => void;
  onEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GuestContactForm: React.FC<GuestContactFormProps> = ({ email, isLoggedIn, onLogout, onEmailChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Enter Contact Information</h2>

      {isLoggedIn ? (
        <div className="flex justify-between items-center bg-[#B9A6BD1A]/10 p-2 w-full rounded">
          <span>Contact</span>
          <span>{email}</span>
          <Button className="text-red-500 hover:underline px-2 py-1 text-sm" onClick={onLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <InputField type="email" placeholder="Enter your email" value={email} onChange={onEmailChange} />
      )}

      <div className="mt-2">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" className="w-4 h-4" />
          Yes, I want to subscribe to the newsletter.
        </label>
      </div>
    </div>
  );
};

export default GuestContactForm;
