import React, { useState } from "react";
import Button from "../shared/Button";
import InputField from "../shared/InputField";

const ShippingAddress = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>

      {isLoggedIn ? (
        <div className="space-y-2">
          <InputField value="Maidan Nezalezhnosti 2, Kyiv, Ukraine" readOnly />
          <InputField value="Ukraine" readOnly />
          <InputField placeholder="Address" />

          <div className="flex gap-2">
            <InputField placeholder="City" className="w-1/2" />
            <InputField placeholder="Postal Code" className="w-1/2" />
          </div>

          <InputField value="+380661231232" readOnly />

          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="w-4 h-4" />
            The recipient is not me
          </label>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex gap-2">
            <InputField placeholder="First Name" className="w-1/2" />
            <InputField placeholder="Last Name" className="w-1/2" />
          </div>
          <InputField placeholder="Country" />
          <InputField placeholder="Address" />

          <div className="flex gap-2">
            <InputField placeholder="City" className="w-1/2" />
            <InputField placeholder="Postal Code" className="w-1/2" />
          </div>

          <InputField placeholder="Phone" />
        </div>
      )}

      <Button className="max-w-[285px] w-full py-[10px] px-[33px]">
        Continue to Shipping
      </Button>
    </div>
  );
};

export default ShippingAddress;
