import { useState, useEffect } from "react";
import * as Yup from "yup"; // Import Yup
import { AuthModal } from "../common/AuthModal";
import { AuthForm } from "../formick/AuthForm";
import { AuthInput } from "../common/AuthInput";
import { AuthButton } from "../common/AuthButton";
import { GoogleButton } from "../common/GoogleButton";
import { OrDivider } from "../common/OrDivider";

interface RecoverPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  heading?: string; // Fixed type definition (optional)
}

export const RecoverPasswordModal = ({ isOpen, onClose, onLoginClick, heading }: RecoverPasswordModalProps) => {
  const [resetError, setResetError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleRecover = (values: { email: string }, { setSubmitting, resetForm }: any) => {
    console.log("Password recovery request:", values);
    setSubmitting(true);

    setTimeout(() => {
      if (values.email === "test@example.com") {
        setResetError("This email is not registered.");
        setSuccessMessage(false);
      } else {
        setResetError("");
        setSuccessMessage(true);
        resetForm();
      }
      setSubmitting(false);
    }, 1000);
  };

  useEffect(() => {
    if (resetError) {
      const timer = setTimeout(() => {
        setResetError("");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [resetError]);

  return (
    <AuthModal isOpen={isOpen} onClose={onClose} title="Recover password" heading={heading || "Please enter your email"}>
      {successMessage ? (
        <div className="flex flex-col items-center gap-[10px]">
          <div className="p-[10px] bg-[#E9F6EE] text-[#1E4620] rounded-[4px] flex flex-col max-w-[398px] ">
            <img src="/check.svg" alt="Success" className="w-[24px] mb-2" />
            <p className="font-[poppins] text-[14px] text-[#1E4620] font-medium">
            An e-mail has been sent to your address with instructions to recover your password.            </p>
          </div>

          <AuthButton type="submit"> Recover </AuthButton>

        </div>
      ) : (
        <AuthForm
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
          })}
          onSubmit={handleRecover}
        >
          {resetError && (
            <div className="flex items-center gap-2 p-2 text-sm rounded-md text-[#E77373] bg-[#F09A9B]/10">
              <img src="/error.svg" alt="error" />
              {resetError}
            </div>
          )}

          <AuthInput name="email" type="email" placeholder="Enter your email" required />

          <AuthButton type="submit">Send Recovery Link</AuthButton>

          <OrDivider />

          <GoogleButton />
          <div className="text-center font-[poppins] md:text-[16px] text-[14px] text-[#697586] font-medium">
            Remember your password?
            <button type="button" onClick={onLoginClick} className="underline">
              Back to Log In
            </button>
          </div>
        </AuthForm>
      )}
    </AuthModal>
  );
};
