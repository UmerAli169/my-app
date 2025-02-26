import { ReactNode } from "react";
import AccountSidebar from "./AccountSidebar";
import Wrapper from "@/app/wrapper";

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-[40px]">

    <Wrapper>

    <div className="flex gap-[20px] ">
      <AccountSidebar />
      <div className="flex-1 bg-white p-6 rounded-lg ">{children}</div>
    </div>
    </Wrapper></div>
  );
};

export default AccountLayout;
