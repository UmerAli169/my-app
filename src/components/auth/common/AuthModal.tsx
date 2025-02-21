import { Modal } from "@/views/ui/model/Modal";

  
  export const AuthModal = ({ title,heading, children, ...modalProps }: any) => {
    return (
      <Modal {...modalProps}>
        <div className="text-center ">

          
        <p className="font-[poppins] text-[26px] text-[#383838]  font-medium ">{title}</p>  
              <p className="font-[poppins] text-[16px] text-[#B0A6BD]  font-normal pb-[20px]">{heading}</p>
        </div >

        {children}
      </Modal>
    );
  };