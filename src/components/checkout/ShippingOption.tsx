import React from "react";

interface ShippingOptionProps {
  value: string;
  label: string;
  description: string;
  price: string;
  selected: string;
  onSelect: (value: string) => void;
}

const ShippingOption: React.FC<ShippingOptionProps> = ({ value, label, description, price, selected, onSelect }) => {
  return (
    <label className="flex justify-between items-center">
      <div>
        <input
          type="radio"
          value={value}
          checked={selected === value}
          onChange={() => onSelect(value)}
          className="mr-2"
        />
        <span>{label}</span>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <span>{price}</span>
    </label>
  );
};

export default ShippingOption;
