import React from "react";
import {OrderItem} from "./OrderItem";
import Button from "../shared/Button";

interface OrderSummaryProps {
  orders: { id: number; name: string; price: number; quantity: number; image: string }[];
  shipping?: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ orders, shipping = 5.0 }) => {
  const subtotal = orders.reduce((acc, item) => acc + item.price * item.quantity, 0);
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
