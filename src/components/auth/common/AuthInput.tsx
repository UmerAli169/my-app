interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
  }
  
  export  const AuthInput = ({ label, error, ...props }: AuthInputProps) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-600 text-sm mb-2">{label}</label>
        <input
          {...props}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  };



