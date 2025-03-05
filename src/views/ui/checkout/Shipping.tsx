"use client";

import React, { useState } from "react";

const Shipping = ({ onBack, onProceedToPayment }) => {
  const [selectedShipping, setSelectedShipping] = useState("fast");

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-lg font-semibold mb-4">Shipping Method</h2>

      <div className="border p-4 rounded-lg shadow-sm space-y-3">
        <div className="flex justify-between">
          <p><strong>Contact</strong> MariannaThompson93@gmail.com</p>
          <button className="text-blue-500">Change</button>
        </div>
        <div className="flex justify-between">
          <p><strong>Ship to</strong> Maidan Nezalezhnosti 2, Kyiv, 01000, Ukraine</p>
          <button className="text-blue-500">Change</button>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6">Shipping Method</h3>

      <div className="border p-4 rounded-lg shadow-sm space-y-3">
        <label className="flex justify-between items-center">
          <div>
            <input
              type="radio"
              value="courier"
              checked={selectedShipping === "courier"}
              onChange={() => setSelectedShipping("courier")}
              className="mr-2"
            />
            <span>Courier at home</span>
            <p className="text-gray-500 text-sm">Can be delivered today</p>
          </div>
          <span>$5.00</span>
        </label>

        <label className="flex justify-between items-center">
          <div>
            <input
              type="radio"
              value="fast"
              checked={selectedShipping === "fast"}
              onChange={() => setSelectedShipping("fast")}
              className="mr-2"
            />
            <span>Fast delivery by Nova Poshta</span>
            <p className="text-gray-500 text-sm">Will be delivered within one day</p>
          </div>
          <span>$2.00</span>
        </label>
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={onBack} className="bg-gray-200 py-2 px-4 rounded-lg">
          Return To Information
        </button>
        <button onClick={onProceedToPayment} className="bg-pink-500 text-white py-2 px-4 rounded-lg">
          Continue To Payment
        </button>
      </div>
    </div>
  );
};

export default Shipping;
