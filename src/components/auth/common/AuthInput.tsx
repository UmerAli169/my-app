interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
 
    error?: string;
  }
  
  export  const AuthInput = ({  error, ...props }: AuthInputProps) => {
    return (
      <div className=" w-full ">
        <input
          {...props}
          className=" max-w-[392px] w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  };



