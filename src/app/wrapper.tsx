import React from 'react';

type ContainerProps = {
  children: React.ReactNode;

};
const wrapper: React.FC<ContainerProps> = ({ children }) => {
  return (<div className={`px-[10px] md:px-[20px] lg:px-8  mx-auto  container`}>
    {children}
    </div>)
};

export default wrapper;