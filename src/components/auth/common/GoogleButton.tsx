// components/auth/common/GoogleButton.tsx
export const GoogleButton = () => {
    return (
      <button className="w-full border rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
        <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
        Continue with Google
      </button>
    );
  };