"use client"
import { useState } from "react";
import { ResetPasswordModal } from "../components/auth/modals/ResetPasswordModal"; // Adjust path as needed
import { AuthButton } from "../components/auth/common/AuthButton";

export default function Home() {
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <AuthButton onClick={() => setIsResetModalOpen(true)}>Open Reset Password Modal</AuthButton>

      <ResetPasswordModal 
        isOpen={isResetModalOpen} 
        onClose={() => setIsResetModalOpen(false)} 
        token="test-token" 
      />
    </div>
  );
}
