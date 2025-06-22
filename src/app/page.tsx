import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-6">
        <Link
        href={ "addcontact" }
        className="text-center p-2 rounded-md border-1 hover:bg-gray-800 cursor-pointer">
          Add a New Contact
        </Link>
        <Link
        href={ "viewcontacts" }
        className="text-center p-2 rounded-md border-1 hover:bg-gray-800 cursor-pointer">
          View Contacts
        </Link>
      </div>
    </div>
  );
}
