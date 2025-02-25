"use client"
import { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 ">
      <button
        className="w-full text-left p-3 lg:text-[16px] text-[12px]  font-normal text-[#383838]  leading-[27px]"
        onClick={() => setOpen(!open)}  
      >
        {question}
      </button>
      {open && <p className="p-3 leading-[22px]  font-normal font-[Montserrat] font-[16px] text-[#383838]  ">{answer}</p>}
    </div>
  );  
};

export default Accordion;
