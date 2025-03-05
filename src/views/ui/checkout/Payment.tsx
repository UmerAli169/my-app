"use client";

import React, { useState } from "react";
import { FaCcVisa, FaGooglePay, FaPaypal } from "react-icons/fa";

const Payment = ({ onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4">Payment</h2>

      <div className="border p-4 rounded-lg shadow-sm space-y-3">
        <div className="text-lg font-semibold">Payment Method</div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="credit-card"
            checked={paymentMethod === "credit-card"}
            onChange={() => setPaymentMethod("credit-card")}
            className="mr-2"
          />
          <FaCcVisa size={24} className="text-blue-600" />
          <span>Credit Card</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="gpay"
            checked={paymentMethod === "gpay"}
            onChange={() => setPaymentMethod("gpay")}
            className="mr-2"
          />
          <FaGooglePay size={24} className="text-gray-600" />
          <span>G Pay</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="mr-2"
          />
          <FaPaypal size={24} className="text-blue-500" />
          <span>PayPal</span>
        </label>
      </div>

      {paymentMethod === "credit-card" && (
        <div className="mt-4 space-y-3">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Card Name"
            className="w-full border p-2 rounded-lg"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              className="w-1/2 border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Security Code"
              className="w-1/2 border p-2 rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button onClick={onBack} className="text-blue-500 underline">
          Return To Shipping
        </button>
        <button className="bg-pink-500 text-white py-2 px-6 rounded-lg w-full">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
