import React from "react";

const ShippingAddress = () => {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>
      <div className="space-y-2">
        <input type="text" className="border p-2 w-full rounded" placeholder="Maidan Nezalezhnosti 2, Kyiv, Ukraine" />
        <input type="text" className="border p-2 w-full rounded" placeholder="Ukraine" />
        <input type="text" className="border p-2 w-full rounded" placeholder="City" />
        <input type="text" className="border p-2 w-full rounded" placeholder="Postal Code" />
        <input type="text" className="border p-2 w-full rounded" placeholder="Phone" />
        <label className="flex items-center gap-2 text-gray-700">
          <input type="checkbox" className="w-4 h-4" />
          The recipient is not me
        </label>
      </div>
    </div>
  );
};

export default ShippingAddress;
