"use client";
import ContactCard from "@/components/ContactCard";
import { useEffect, useState } from "react";
import { Contact } from '../../model/Contact';
import { searchContact } from '../../lib/utils';
import { FilterIcon, SortAscIcon, SortDescIcon } from "lucide-react";
import { deleteAndRefresh, starAndRefresh } from "@/lib/utils";

export default function ViewContactsPage() {
    const [allContacts, setAllContacts] = useState<Contact[]>([]);
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [search, setSearch] = useState("");
    const [sortAsc, setSortAsc] = useState(true);

    useEffect(() => {
        const storedData = localStorage.getItem("contacts");
        const parsed = storedData ? JSON.parse(storedData) : [];
        setAllContacts(parsed);
    }, []);

    useEffect(() => {
        let filtered = allContacts;

        // Filter
        if (search.trim() !== "") {
            filtered = searchContact(search)
        }

        // Sort
        const sorted = sortAsc
            ? filtered.toSorted((a, b) => a.firstName.localeCompare(b.firstName))
            : filtered.toSorted((a, b) => b.firstName.localeCompare(a.firstName));

        setContacts(sorted);
    }, [allContacts, search, sortAsc]);

    return (
        <div className="flex flex-col items-center p-6 gap-6">
            <h2 className="text-4xl font-bold sticky top-0 z-10 py-4 w-full text-center">
                Saved Contacts
            </h2>
            <div className="flex flex-col w-full max-w-4xl gap-6">
                <div className="flex gap-2">
                    <input 
                        name="search"
                        placeholder="Search for contact" 
                        value={ search }
                        onChange={ (e) => setSearch(e.target.value) }
                        className="w-full py-2 px-4 border rounded-full"
                    />
                    <button
                    onClick={() => setSortAsc(!sortAsc)}
                    className="">
                        {sortAsc ? <SortDescIcon strokeWidth={1.25}/> : <SortAscIcon strokeWidth={1.25}/>}
                    </button>
                </div>

                { contacts.length === 0 ? (
                <div className="mt-10 text-gray-700 text-lg italic">
                    No contacts saved.
                </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {contacts.map((contact: Contact) => (
                            contact.firstName === "" 
                            ? <div className="hidden" key={contact.id}/>
                            : <ContactCard 
                                key={contact.id} 
                                contact={contact}
                                onDelete={() => deleteAndRefresh(contact.id, setAllContacts)}
                                onStarToggle={() => starAndRefresh(contact.id, setAllContacts)}
                            />
                        ))}
                    </div>
                )} 
            </div>
        </div>
    );
}