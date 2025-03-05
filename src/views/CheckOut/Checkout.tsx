"use client";
import React, { useState } from "react";
import DeliveryMethod from "../../components/checkout/DeliveryMethod";
import ShippingAddress from "../../components/checkout/ShippingAddress";
import GuestContactForm from "../../components/checkout/GuestContactForm";
import Wrapper from "@/app/wrapper";
import Shipping from "../../components/checkout/Shipping";
import Payment from "../../components/checkout/Payment";
import OrderSummary from "@/components/shared/OrderSummary";
const orders = [
  {
    id: 1,
    name: "Dewy Glow Jelly Cream",
    price: 19.6,
    quantity: 3,
    image: "/cart/cart1.png",
  },
  {
    id: 2,
    name: "Soft Finish",
    price: 19.6,
    quantity: 1,
    image: "/cart/cart1.png",
  },
];

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("ship");
  const [showShipping, setShowShipping] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const isLoggedIn = true;
  const userEmail = "MariannaThompson93@gmail.com (Marianna Thompson)";
  const handleLogout = () => {
    console.log("User logged out");
  };
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row gap-[20px] py-[40px]">
        <div className="flex-1 space-y-[40px] bg-white py-[20px] px-[30px]">
          {showPayment ? (
            <Payment
              onBack={() => setShowPayment(false)}
              onPayNow={() => console.log("Payment successful!")}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          ) : showShipping ? (
            <Shipping
              email={userEmail}
              address="Maidan Nezalezhnosti 2, Kyiv, 01000, Ukraine"
              onBack={() => setShowShipping(false)}
              onProceedToPayment={() => setShowPayment(true)}
            />
          ) : (
            <>
              {isLoggedIn ? (
                <GuestContactForm
                  email={userEmail}
                  isLoggedIn={true}
                  onLogout={handleLogout}
                />
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
          <OrderSummary orders={orders} shipping={5.0} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
