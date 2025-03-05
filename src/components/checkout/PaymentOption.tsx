import React from "react";

interface PaymentOptionProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  selected: string;
  onSelect: (value: string) => void;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({ value, label, icon, selected, onSelect }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="radio" value={value} checked={selected === value} onChange={() => onSelect(value)} className="mr-2" />
      {icon}
      <span>{label}</span>
    </label>
  );
};

export default PaymentOption;
