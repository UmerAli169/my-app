import React from 'react';

export const CustomCard = ({ children, className = '' }:any) => (
  <div className={`bg-[#FFFFFF] rounded-[6px] ${className}`}>
    {children}
  </div>
);