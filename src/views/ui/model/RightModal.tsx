import React from "react";
import { motion } from "framer-motion";
import { CartItem } from "@/components/cart/Items";
import { SampleSelection } from "@/components/cart/sample";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
}) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-6 overflow-y-auto z-50"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          ✕
        </button>
      </div>
      <img src="/svgs/cart/stright.svg" alt="" />
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <SampleSelection />
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>${"122$"}</span>
            </div>
            <button className="w-full bg-pink-500 text-white py-2 mt-4 rounded">
              Check Out
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </motion.div>
  );
};
