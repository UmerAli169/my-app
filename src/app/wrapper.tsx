import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const wrapper: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={` lg:px-[120px] xl:px-[252px]  2xl:px-[352px] sm:px-[20px]  ${className}`}>{children}</div>;
};

export default wrapper;
