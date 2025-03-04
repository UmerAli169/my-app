import React from "react";

const DeliveryMethod = () => {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Delivery Method</h2>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2 text-gray-700">
          <input type="radio" name="delivery" className="w-4 h-4" defaultChecked />
          Ship
        </label>
        <label className="flex items-center gap-2 text-gray-700">
          <input type="radio" name="delivery" className="w-4 h-4" />
          Pick Up
        </label>
      </div>
    </div>
  );
};

export default DeliveryMethod;
