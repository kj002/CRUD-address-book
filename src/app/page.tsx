import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center pt-30 h-screen">
      <div className="flex flex-col gap-14 items-center w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl">
            Welcome to 
          </h2>
          <h1 className="text-6xl mt-2 mb-10 t-heading">
            PocketPal!
          </h1>
          <p className="text-justify md:text-center">
            PocketPal is your cozy digital address book — a simple, elegant way to save, search, and organize the people who matter most. Add favorite contacts, mark them with a star, and keep your connections just a tap away.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <Link
          href={ "add-contact" }
          className="flex justify-center items-center h-12 w-64 text-center p-2 rounded-md border-1 hover:bg-gray-800 cursor-pointer">
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
