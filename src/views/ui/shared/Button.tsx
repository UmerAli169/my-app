const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`lg:w-full w-[179px] bg-[#F5A3B7] text-[#FFFFFF]   lg:text-[16px] text-[14px]  font-normal rounded-[4px] ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
// lg:p-[10px] px-[10px] py-[8px]