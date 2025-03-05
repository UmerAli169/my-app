import React from "react";
import Button from "../../ui/shared/Button";

const ContactInfo = () => {
  return (
    <div >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Contact Information</h2>
        <p className="text-sm text-gray-600">
          Do you already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Login</span>
        </p>
      </div>

      <div className="mt-3">
        <input
          type="email"
          className="border p-2 w-full rounded"
          placeholder="Enter your email"
        />
      </div>

      <div className="mt-2">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" className="w-4 h-4" />
          Yes, I want to subscribe to the newsletter.
        </label>
      </div>

      
    </div>
  );
};

export default ContactInfo;
