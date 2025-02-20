import React from 'react';

type ContainerProps = {
  children: React.ReactNode;

};

const wrapper: React.FC<ContainerProps> = ({ children }) => {
  return (<div className={`px-[20px] container mx-auto mycontainer`}>
    {children}
    </div>)
};

export default wrapper;
