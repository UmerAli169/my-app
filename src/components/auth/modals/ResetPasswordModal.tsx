import { AuthButton } from "../common/AuthButton";
import { AuthInput } from "../common/AuthInput";
import { AuthModal } from "../common/AuthModal";

interface ResetPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    token: string;
  }
  
 export const ResetPasswordModal = ({ isOpen, onClose, token }: ResetPasswordModalProps) => {
    return (
      <AuthModal
        isOpen={isOpen}
        onClose={onClose}
        title="Reset Password"
      >
        <form className="space-y-4">
          <p className="text-gray-600 text-sm">
            Please enter your new password.
          </p>
          
          <AuthInput
            label="New Password"
            type="password"
            placeholder="Enter new password"
            required
          />
          
          <AuthInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm new password"
            required
          />
          
          <AuthButton type="submit">Reset Password</AuthButton>
        </form>
      </AuthModal>
      );
    };