"use client";
import { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className={`w-full text-left p-3 lg:text-[14px] text-[12px] font-medium text-[#383838] leading-[27px] flex justify-between items-center ${
          open ? "bg-[rgba(176,166,189,0.1)]" : " "
        }`}
        onClick={() => setOpen(!open)}
      >
        {question}
        <span className="text-[18px]">{open ? <img src="/svgs/Shared/OpenAndCloaed/accodionOpen.svg" alt="" /> :<img src="/svgs/Shared/OpenAndCloaed/accodionOpen.svg" alt="" /> }</span>
      </button>
      {open && (
        <p className="p-3 leading-[22px] font-normal font-[Montserrat] font-medium text-[14px] text-[#697586]">
          {answer}
        </p>
      )}
    </div>
  );
};

export default Accordion;
