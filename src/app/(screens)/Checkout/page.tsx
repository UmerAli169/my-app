import React from "react";
import ContactInfo from "../../../views/ui/checkout/ContactInfo";
import DeliveryMethod from "../../../views/ui/checkout/DeliveryMethod";
import ShippingAddress from "../../../views/ui/checkout/ShippingAddress";
import OrderSummary from "../../../views/ui/checkout/OrderSummary";

const Checkout = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      {/* Left Side - Form */}
      <div className="flex-1 space-y-6">
        <ContactInfo />
        <DeliveryMethod />
        <ShippingAddress />
      </div>

      {/* Right Side - Order Summary */}
      <div className="w-full lg:w-1/3">
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
