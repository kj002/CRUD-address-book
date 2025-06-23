import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center pt-30 h-screen">
      <div className="flex flex-col gap-14 items-center w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <p className="text-4xl">
            Welcome to 
          </p>
          <p className="text-6xl text-bold mt-2 mb-10">
            PocketPal!
          </p>
          <p className="text-justify md:text-center">
            PocketPal is your cozy digital address book — a simple, elegant way to save, search, and organize the people who matter most. Add favorite contacts, mark them with a star, and keep your connections just a tap away.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <Link
          href={ "add-contact" }
          className="text-center p-2 rounded-md border-1 hover:bg-gray-800 cursor-pointer">
            Add a New Contact
          </Link>
          <Link
          href={ "view-contacts" }
          className="w-64 text-center p-2 rounded-md border-1 hover:bg-gray-800 cursor-pointer">
            View Contacts
          </Link>
        </div>
        
      </div>
    </div>
  );
}
