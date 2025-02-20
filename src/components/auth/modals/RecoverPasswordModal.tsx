import { AuthButton } from "../common/AuthButton";
import { AuthInput } from "../common/AuthInput";
import { AuthModal } from "../common/AuthModal";

interface RecoverPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginClick: () => void;
  }
  
  export const RecoverPasswordModal = ({ isOpen, onClose, onLoginClick }: RecoverPasswordModalProps) => {
    return (
      <AuthModal
        isOpen={isOpen}
        onClose={onClose}
        title="Recover Password"
      >
        <form className="space-y-4">
          <p className="text-gray-600 text-sm">
            Please enter your email address and we'll send you a link to reset your password.
          </p>
          
          <AuthInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          
          <AuthButton type="submit">Send Recovery Link</AuthButton>
  
          <div className="text-center text-sm text-gray-600">
            Remember your password?{' '}
            <button
              type="button"
              onClick={onLoginClick}
              className="text-pink-500 hover:text-pink-600"
            >
              Back to Log In
            </button>
          </div>
        </form>
      </AuthModal>
    );
  };
  