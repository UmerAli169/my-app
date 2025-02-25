import Link from "next/link";

const AccountSidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">My Account</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/account/contactinformation" className="block py-2 px-3 hover:bg-gray-200 rounded">Contact Information</Link>
        </li>
        <li>
          <Link href="/account/changepassword" className="block py-2 px-3 hover:bg-gray-200 rounded">Change Password</Link>
        </li>
        <li>
          <Link href="/account/addresses" className="block py-2 px-3 hover:bg-gray-200 rounded">Addresses</Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
