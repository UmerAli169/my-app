import React from "react";
import * as Yup from "yup";
import { Modal } from "../model/Modal";
import { AuthInput } from "../shared/Input";
import { AuthButton } from "@/components/auth/common/AuthButton";
import { AuthForm } from "@/components/auth/formick/AuthForm";
import { GoogleButton } from "@/components/auth/common/GoogleButton";
import { OrDivider } from "@/components/auth/common/OrDivider";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal = ({ isOpen, onClose }: ReviewModalProps) => {
  const handleReviewSubmit = (values: { title: string; text: string }) => {
    console.log("Review Submitted:", values);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4 text-center">Write a Review</h2>

      <div className="flex items-center gap-4 mb-4">
        <img
          src="/product.jpg"
          alt="Product"
          className="w-16 h-16 rounded-md"
        />
        <div>
          <p className="font-medium">Floral Essence Masks Sets</p>
          <div className="flex"></div>
        </div>
      </div>

      <AuthForm
        initialValues={{ title: "", text: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          text: Yup.string().required("Review is required"),
        })}
        onSubmit={handleReviewSubmit}
      >
        <AuthInput
          type="text"
          name="title"
          placeholder="Review Title"
          required
        />
        <AuthInput
          type="text"
          name="text"
          placeholder="What did you think about Floral Essence Masks Sets?"
          required
        />

        <button
          type="button"
          className="border p-2 rounded-md w-full flex items-center gap-2"
        >
          Add Photos
        </button>

        <div className="mt-4">
          <p className="font-medium">Your Profile</p>
          <AuthInput type="text" name="name" placeholder="Name" required />
          <AuthInput
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>

        <OrDivider />
        <AuthButton type="button">Sign In</AuthButton>
        <GoogleButton />

        <p className="text-center text-sm mt-4">
          By continuing you agree to our{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </p>
        <AuthButton type="submit" className="w-full bg-pink-500 mt-2">
          Agree & Submit
        </AuthButton>
      </AuthForm>
    </Modal>
  );
};
