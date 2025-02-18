import { Modal } from "@/views/ui/model/Modal";

// interface AuthModalProps extends ModalProps {
//     title: string;
//   }
  
  export const AuthModal = ({ title, children, ...modalProps }: any) => {
    return (
      <Modal {...modalProps}>
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
        {children}
      </Modal>
    );
  };