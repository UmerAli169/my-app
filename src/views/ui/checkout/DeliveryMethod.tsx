import React from "react";

interface DeliveryMethodProps {
  selectedMethod: string;
  onChange: (method: string) => void;
}

const DeliveryMethod: React.FC<DeliveryMethodProps> = ({ selectedMethod, onChange }) => {
  return (
    <div    >
      <h2 className="text-lg font-semibold mb-2">Delivery Method</h2>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="radio"
            name="delivery"
            className="w-4 h-4"
            value="ship"
            checked={selectedMethod === "ship"}
            onChange={() => onChange("ship")}
          />
          Ship
        </label>
        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="radio"
            name="delivery"
            className="w-4 h-4"
            value="pickup"
            checked={selectedMethod === "pickup"}
            onChange={() => onChange("pickup")}
          />
          Pick Up
        </label>
      </div>
    </div>
  );
};

export default DeliveryMethod;
