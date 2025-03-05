import React from "react";
import {OrderItem} from "./OrderItem";
import Button from "../shared/Button";

const orders = [
  { id: 1, name: "Dewy Glow Jelly Cream", price: 19.6, quantity: 3, image: "/cart/cart1.png" }, 
  { id: 2, name: "Soft Finish", price: 19.6, quantity: 1, image: "/cart/cart1.png"},
];

const OrderSummary = () => {
  const subtotal = orders.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Your Order</h2>
      <div className="space-y-3">
        {orders.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-700">
        <p>Subtotal: <span className="float-right">${subtotal.toFixed(2)}</span></p>
        <p>Shipping: <span className="float-right">${shipping.toFixed(2)}</span></p>
        <p className="font-semibold">Estimated Total: <span className="float-right">${total.toFixed(2)}</span></p>
      </div>
    </div>
  );
};

export default OrderSummary;
