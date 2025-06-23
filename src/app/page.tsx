"use client";

import ContactCard from "@/components/ContactCard";
import { deleteAndRefresh, starAndRefresh } from "@/lib/utils";
import { Contact } from "@/model/Contact";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [allContacts, setAllContacts] = useState<Contact[]>([]);

  useEffect(() => {
      const storedData = localStorage.getItem("contacts");
      const parsed = storedData ? JSON.parse(storedData) : [];
      setAllContacts(parsed);
  }, []); 
    
  return (
    <div className="min-h-screen flex justify-between space-x-20 px-16 pt-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Large bubbles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full animate-bubble-float-1"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-amber-200/15 rounded-full animate-bubble-float-2"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-orange-100/25 rounded-full animate-bubble-float-3"></div>
        <div className="absolute bottom-20 right-12 w-28 h-28 bg-amber-100/20 rounded-full animate-bubble-float-4"></div>
        <div className="absolute top-60 left-1/2 w-36 h-36 bg-red-500/30 rounded-full animate-bubble-float-5"></div>

        {/* Medium bubbles */}
        <div className="absolute top-80 left-32 w-20 h-20 bg-orange-300/20 rounded-full animate-bubble-float-6"></div>
        <div className="absolute bottom-60 right-32 w-16 h-16 bg-amber-300/25 rounded-full animate-bubble-float-7"></div>
        <div className="absolute top-32 right-40 w-18 h-18 bg-orange-200/30 rounded-full animate-bubble-float-8"></div>
        <div className="absolute bottom-80 left-40 w-22 h-22 bg-pink-500/30 rounded-full animate-bubble-float-9"></div>

        {/* Small bubbles */}
        <div className="absolute top-16 left-60 w-12 h-12 bg-orange-400/25 rounded-full animate-bubble-float-10"></div>
        <div className="absolute bottom-40 right-60 w-10 h-10 bg-amber-400/30 rounded-full animate-bubble-float-11"></div>
        <div className="absolute top-72 left-16 w-14 h-14 bg-orange-300/20 rounded-full animate-bubble-float-12"></div>
        <div className="absolute bottom-16 left-60 w-8 h-8 bg-amber-300/35 rounded-full animate-bubble-float-13"></div>
        <div className="absolute top-48 right-20 w-12 h-12 bg-orange-200/25 rounded-full animate-bubble-float-14"></div>
        <div className="absolute bottom-72 right-80 w-16 h-16 bg-pink-500/30 rounded-full animate-bubble-float-15"></div>

        {/* Tiny bubbles */}
        <div className="absolute top-24 left-80 w-6 h-6 bg-orange-500/30 rounded-full animate-bubble-float-16"></div>
        <div className="absolute bottom-24 right-24 w-4 h-4 bg-amber-500/40 rounded-full animate-bubble-float-17"></div>
        <div className="absolute top-88 left-24 w-6 h-6 bg-orange-400/35 rounded-full animate-bubble-float-18"></div>
        <div className="absolute bottom-88 right-40 w-8 h-8 bg-amber-400/25 rounded-full animate-bubble-float-19"></div>
        <div className="absolute top-56 left-72 w-5 h-5 bg-red-500/40 rounded-full animate-bubble-float-20"></div>
      </div>
      
      <div className="z-50">
        <div className="flex flex-col gap-14 items-center w-full min-w-xl max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold">
              Welcome to 
            </h2>
            <h1 className="text-6xl mt-4 mb-8">
              PocketPal!
            </h1>
              <p className="text-justify md:text-center">
              PocketPal is your cozy digital address book — a simple, elegant way to save, search, and organise the people who matter most. Add favorite contacts, mark them with a star, and keep your connections just a tap away.
              </p>
          </div>
          <div className="flex flex-col gap-6">
            <Link
            href={ "add-contact" }
            className="text-center transition-all duration-200 py-3 px-5 rounded-full bg-gradient-to-b from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white font-bold border-2 border-orange-600 shadow-[inset_0_-6px_0_rgba(200,0,0,0.3),inset_0_6px_0_rgba(255,255,255,0.4)] hover:shadow-[inset_0_-3px_0_rgba(143,0,0,0.3),inset_0_3px_0_rgba(255,255,255,0.4)] active:shadow-[inset_0_-2px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.4)] hover:scale-[1.01] active:scale-[0.98]">
              <div className="flex justify-center items-start">
                <p className="-mt-3 pb-2 font-bold px-4">Add a New Contact</p>
              </div>
            </Link>
            <Link
            href={ "view-contacts" }
            className="text-center transition-all duration-200 py-3 px-5 rounded-full bg-gradient-to-b from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white font-bold border-2 border-orange-600 shadow-[inset_0_-6px_0_rgba(200,0,0,0.3),inset_0_6px_0_rgba(255,255,255,0.4)] hover:shadow-[inset_0_-3px_0_rgba(143,0,0,0.3),inset_0_3px_0_rgba(255,255,255,0.4)] active:shadow-[inset_0_-2px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.4)] hover:scale-[1.01] active:scale-[0.98]">
              <div className="flex justify-center items-start">
                <p className="-mt-3 pb-2 font-bold">View Contacts</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="self-start w-full min-w-xl max-w-3xl mt-10 text-center z=50">
        <h3 className="text-3xl font-semibold mb-8">Favourite Contacts</h3>
        {allContacts.length === 0 || allContacts.filter(contact => contact.isFavourite).length === 0 ? (
                <div className="mt-10 text-2xl italic">
                    No favourite contacts yet. Add some to see them here!
                </div>
                ) : (
                <div className="grid grid-cols-1 gap-4 w-full px-4">
                  {allContacts.map((contact: Contact) => (
                      contact.isFavourite
                      ? <ContactCard 
                          key={contact.id} 
                          contact={contact}
                          onDelete={() => deleteAndRefresh(contact.id, setAllContacts)}
                          onStarToggle={() => starAndRefresh(contact.id, setAllContacts)}
                      />
                      : <div className="hidden" key={contact.id}/>
                  ))}
              </div>
          )}
        </div>
      </div>
    );
}
