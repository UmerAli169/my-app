import React from 'react';

type ContainerProps = {
  children: React.ReactNode;

};
const wrapper: React.FC<ContainerProps> = ({ children }) => {
  return (<div className={`px-[10px] md:px-[20px] lg:px-8 max-w-[1400px] mx-auto `}>
    {children}
    </div>)
};

export default wrapper;
