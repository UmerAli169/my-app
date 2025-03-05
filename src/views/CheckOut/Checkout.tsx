"use client";

import React, { useState } from "react";
import ContactInfo from "../../components/checkout/ContactInfo";
import DeliveryMethod from "../../components/checkout/DeliveryMethod";
import ShippingAddress from "../../components/checkout/ShippingAddress";
import OrderSummary from "../../components/checkout/OrderSummary";
import GuestContactForm from "../../components/checkout/GuestContactForm";
import Wrapper from "@/app/wrapper";
import Shipping from "../../components/checkout/Shipping"; 
import Payment from "../../components/checkout/Payment"; // Import Payment Component

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("ship");
  const [showShipping, setShowShipping] = useState(true);
  const [showPayment, setShowPayment] = useState(false); // Payment State

  const isLoggedIn = true;
  const userEmail = "MariannaThompson93@gmail.com (Marianna Thompson)";

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row gap-[20px] py-[40px]">
        <div className="flex-1 space-y-[40px] bg-white py-[20px] px-[30px]">
          {showPayment ? ( 
            <Payment onBack={() => setShowPayment(false)} />
          ) : showShipping ? (
            <Shipping 
              onBack={() => setShowShipping(false)}
              onProceedToPayment={() => setShowPayment(true)} 
            />
          ) : (
            <>
              {isLoggedIn ? (
                <GuestContactForm email={userEmail} isLoggedIn={true} onLogout={handleLogout} />
              ) : (
                <GuestContactForm isLoggedIn={false} onLogout={() => {}} />
              )}
              <DeliveryMethod
                selectedMethod={deliveryMethod}
                onChange={setDeliveryMethod}
                onEdit={() => setShowShipping(true)} 
              />
              <ShippingAddress />
            </>
          )}
        </div>

        <div className="w-full lg:w-1/3">
          <OrderSummary />
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
