export const AuthButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button
        {...props}
        className="w-full bg-pink-400 text-white py-2 rounded-md hover:bg-pink-500 transition-colors"
      >
        {children}
      </button>
    );
  };
  
  