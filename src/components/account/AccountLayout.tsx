import { ReactNode } from "react";
import AccountSidebar from "./AccountSidebar";
import Wrapper from "@/app/wrapper";

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>

    <div className="flex gap-6 ">
      <AccountSidebar />
      <div className="flex-1 bg-white p-6 rounded-lg shadow">{children}</div>
    </div>
    </Wrapper>
  );
};

export default AccountLayout;
