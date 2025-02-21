import React, { useEffect, useState } from 'react';
import close from '../../../Data/ShardData/closeMenu.json';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div className='fixed inset-0 bg-[#697586] bg-opacity-10 flex items-center justify-center  '>
      <div className='bg-[#FFFFFF] rounded-[4px]  max-w-[957px]  relative py-[40px] px-[100px] flex flex-col items-center '>
        {close && (
          <img
            src={close.closeMenu.img}
            onClick={onClose}
            alt={close.closeMenu.label}
            className='w-[14px] h-[14px] cursor-pointer absolute right-4 top-4  invert'
          />
        )}

        {children}
      </div>
    </div>
  );
};
