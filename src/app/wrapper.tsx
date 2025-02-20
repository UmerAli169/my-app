import React from 'react';

type ContainerProps = {
  children: React.ReactNode;

};

const wrapper: React.FC<ContainerProps> = ({ children }) => {
  return (<div className={` container mx-auto `}>
    {children}
    </div>)
};

export default wrapper;
//lg:px-[120px] xl:px-[252px]  2xl:px-[352px] sm:px-[20px] 