import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center pt-12 h-screen">
      <div className="flex flex-col gap-14 items-center w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold">
            Welcome to 
          </h2>
          <h1 className="text-6xl mt-4 mb-8">
            PocketPal!
          </h1>
            <p className="text-justify md:text-center">
            PocketPal is your cozy digital address book — a simple, elegant way to save, search, and organize the people who matter most. Add favorite contacts, mark them with a star, and keep your connections just a tap away.
            </p>
        </div>
        <div className="flex flex-col gap-6">
          <Link
          href={ "add-contact" }
          className="text-center transition-all duration-200 py-3 px-5 rounded-full bg-gradient-to-b from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white font-bold border-2 border-orange-600 shadow-[inset_0_-6px_0_rgba(200,0,0,0.3),inset_0_6px_0_rgba(255,255,255,0.4)] hover:shadow-[inset_0_-3px_0_rgba(0,0,0,0.3),inset_0_3px_0_rgba(255,255,255,0.4)] active:shadow-[inset_0_-2px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.4)] hover:scale-[1.01] active:scale-[0.98]">
            <div className="flex justify-center items-start">
              <p className="-mt-3 pb-2 font-bold px-4">Add a New Contact</p>
            </div>
          </Link>
          <Link
          href={ "view-contacts" }
          className="text-center transition-all duration-200 py-3 px-5 rounded-full bg-gradient-to-b from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white font-bold border-2 border-orange-600 shadow-[inset_0_-6px_0_rgba(200,0,0,0.3),inset_0_6px_0_rgba(255,255,255,0.4)] hover:shadow-[inset_0_-3px_0_rgba(0,0,0,0.3),inset_0_3px_0_rgba(255,255,255,0.4)] active:shadow-[inset_0_-2px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.4)] hover:scale-[1.01] active:scale-[0.98]">
            <div className="flex justify-center items-start">
              <p className="-mt-3 pb-2 font-bold">View Contacts</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
