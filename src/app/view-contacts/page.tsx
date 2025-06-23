"use client";
import ContactCard from "@/components/ContactCard";
import { useEffect, useState } from "react";
import { Contact } from '../../model/Contact';

export default function ViewContactsPage() { 
    const [ contacts, setContacts ] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("contacts");
        setContacts( storedData ? JSON.parse( storedData ) : []);
    }, [])

    return (
        <div className="flex flex-col items-center p-6 gap-6">

            <p className="text-2xl text-bold sticky top-0 bg-black z-10 py-4 w-full text-center">
                Saved Contacts
            </p>
            { contacts.length === 0 ? (
                <div className="mt-10 text-gray-700 text-lg italic">
                    No contacts saved.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
                    {contacts.map((contact: Contact) => (
                        contact.firstName === "" 
                        ? <></> 
                        : <ContactCard key={contact.id} contact={contact}/>
                    ))}
                </div>
            )
            } 
            
        </div>
    );
}