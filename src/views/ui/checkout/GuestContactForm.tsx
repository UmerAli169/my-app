"use client";

import React from "react";

const GuestContactForm = ({ email, isLoggedIn, onLogout }: { email?: string; isLoggedIn: boolean; onLogout: () => void }) => {
  return (
    <div >
      <h2 className="text-lg font-semibold mb-2">Enter Contact Information</h2>

      {isLoggedIn ? (
        <div className="flex justify-between items-center bg-[#B9A6BD1A]/10 p-2 w-full rounded">
            <span>Contact</span>
          <span>{email}</span>
          <button className="text-red-500 hover:underline" onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <input type="email" className="border p-2 w-full rounded" placeholder="Enter your email" />
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
