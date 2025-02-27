import React from 'react';

type ContainerProps = {
  children: React.ReactNode;

};

const wrapper: React.FC<ContainerProps> = ({ children }) => {
  return (<div className={`px-[20px] sm:px-0 container mx-auto `}>
    {children}
    </div>)
};

export default wrapper;
