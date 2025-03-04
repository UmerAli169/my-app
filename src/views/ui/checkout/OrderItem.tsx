import React from "react";

const OrderItem = ({ item }: { item: any }) => {
  return (
    <div className="flex items-center gap-3 border-b pb-2">
      <img src={item.image} alt={item.name} className="w-14 h-14 rounded" />
      <div className="flex-1">
        <p className="text-gray-800">{item.name}</p>
        <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
      </div>
      <p className="text-gray-800">x{item.quantity}</p>
    </div>
  );
};

export default OrderItem;
