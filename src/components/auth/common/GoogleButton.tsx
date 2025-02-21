export const GoogleButton = () => {
  return (
    <button className="w-full border rounded-md py-2 flex items-center justify-center relative hover:bg-gray-50 transition-colors">
      <img src="/google.svg" alt="Google" className="w-5 h-5 absolute left-4" />
      <span className="flex-1 text-center font-[poppins] text-[16px] text-[#697586]  font-normal">Continue with Google</span>
    </button>
  );
};
