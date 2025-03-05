"use client";

import React, { useState } from "react";
import Button from "../shared/Button";
import ShippingOption from "./ShippingOption";

interface ShippingProps {
  email: string;
  address: string;
  onBack: () => void;
  onProceedToPayment: () => void;
}

const Shipping: React.FC<ShippingProps> = ({ email, address, onBack, onProceedToPayment }) => {
  const [selectedShipping, setSelectedShipping] = useState("fast");

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-lg font-semibold mb-4">Shipping Method</h2>

      <div className="border p-4 rounded-lg shadow-sm space-y-3">
        <div className="flex justify-between">
          <p><strong>Contact</strong> {email}</p>
          <button className="text-blue-500">Change</button>
        </div>
        <div className="flex justify-between">
          <p><strong>Ship to</strong> {address}</p>
          <button className="text-blue-500">Change</button>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6">Shipping Method</h3>

      <div className="border p-4 rounded-lg shadow-sm space-y-3">
        <ShippingOption
          value="courier"
          label="Courier at home"
          description="Can be delivered today"
          price="$5.00"
          selected={selectedShipping}
          onSelect={setSelectedShipping}
        />
        <ShippingOption
          value="fast"
          label="Fast delivery by Nova Poshta"
          description="Will be delivered within one day"
          price="$2.00"
          selected={selectedShipping}
          onSelect={setSelectedShipping}
        />
      </div>

      <div className="mt-4 flex gap-2">
        <Button onClick={onBack} className="bg-gray-200 py-2 px-4 rounded-lg">
          Return To Information
        </Button>
        <Button onClick={onProceedToPayment} className="bg-pink-500 text-white py-2 px-4 rounded-lg">
          Continue To Payment
        </Button>
      </div>
    </div>
  );
};

export default Shipping;
