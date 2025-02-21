export const GoogleButton = () => {
  return (
    <button className="w-full border rounded-[4px] p-[10px] flex items-center justify-center relative  ">
      <img src="/google.svg" alt="Google" className="w-[24px] md:block hidden absolute left-4" />
      <span className="flex-1 text-center font-[poppins] md:text-[16px] text-[14px] text-[#697586]  font-normal">Continue with Google</span>
    </button>
  );
};
