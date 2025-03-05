"use client";

import React from "react";
import { FaCcVisa, FaGooglePay, FaPaypal } from "react-icons/fa";
import Button from "../shared/Button";
import PaymentOption from "./PaymentOption";

interface PaymentProps {
  onBack: () => void;
  onPayNow: () => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const Payment: React.FC<PaymentProps> = ({ onBack, onPayNow, paymentMethod, setPaymentMethod }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4">Payment</h2>

      <div className="border p-4 rounded-lg shadow-sm space-y-3">
        <div className="text-lg font-semibold">Payment Method</div>

        <PaymentOption value="credit-card" label="Credit Card" icon={<FaCcVisa size={24} className="text-blue-600" />} selected={paymentMethod} onSelect={setPaymentMethod} />
        <PaymentOption value="gpay" label="G Pay" icon={<FaGooglePay size={24} className="text-gray-600" />} selected={paymentMethod} onSelect={setPaymentMethod} />
        <PaymentOption value="paypal" label="PayPal" icon={<FaPaypal size={24} className="text-blue-500" />} selected={paymentMethod} onSelect={setPaymentMethod} />
      </div>

      {paymentMethod === "credit-card" && (
        <div className="mt-4 space-y-3">
          <input type="text" placeholder="Card Number" className="w-full border p-2 rounded-lg" />
          <input type="text" placeholder="Card Name" className="w-full border p-2 rounded-lg" />
          <div className="flex gap-2">
            <input type="text" placeholder="Expiration Date (MM/YY)" className="w-1/2 border p-2 rounded-lg" />
            <input type="text" placeholder="Security Code" className="w-1/2 border p-2 rounded-lg" />
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <Button onClick={onBack} className="text-blue-500 underline bg-transparent">Return To Shipping</Button>
        <Button onClick={onPayNow} className="bg-pink-500 text-white w-full">Pay Now</Button>
      </div>
    </div>
  );
};

export default Payment;
