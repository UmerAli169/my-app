import React, { useState } from "react";
import Button from "../shared/Button";

const ShippingAddress = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div >
      <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>

      {isLoggedIn ? (
        <div className="space-y-2">
          <input
            type="text"
            className="border p-2 w-full rounded "
            value="Maidan Nezalezhnosti 2, Kyiv, Ukraine"
            readOnly
          />
          <input
            type="text"
            className="border p-2 w-full rounded "
            value="Ukraine"
            readOnly
          />
          <input
            type="text"
            className="border p-2 w-full rounded"
            placeholder="Address"
          />

          <div className="flex gap-2">
            <input
              type="text"
              className="border p-2 w-1/2 rounded"
              placeholder="City"
            />
            <input
              type="text"
              className="border p-2 w-1/2 rounded"
              placeholder="Postal Code"
            />
          </div>
          <input
            type="text"
            className="border p-2 w-full rounded "
            value="+380661231232"
            readOnly
          />
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="w-4 h-4" />
            The recipient is not me
          </label>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              className="border p-2 w-1/2 rounded"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border p-2 w-1/2 rounded"
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            className="border p-2 w-full rounded"
            placeholder="Country"
          />
          <input
            type="text"
            className="border p-2 w-full rounded"
            placeholder="Address"
          />
          <div className="flex gap-2">
            <input
              type="text"
              className="border p-2 w-1/2 rounded"
              placeholder="City"
            />
            <input
              type="text"
              className="border p-2 w-1/2 rounded"
              placeholder="Postal Code"
            />
          </div>
          <input
            type="text"
            className="border p-2 w-full rounded"
            placeholder="Phone"
          />
        </div>
      )}

      <Button className="max-w-[285px] w-full py-[10px] px-[33px]">
        Continue to Shipping
      </Button>
    </div>
  );
};

export default ShippingAddress;
