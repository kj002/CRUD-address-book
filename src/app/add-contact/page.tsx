"use client";

import { useRouter } from "next/router";
import React, { useState } from "react";
import { Contact } from "../../model/Contact";

export default function AddContactPage() {
    const [ fname, setFname ] = useState<string>('');
    const [ lname, setLname ] = useState<string>('');
    const [ phone, setPhone ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ address, setAddress ] = useState<string>('');

    const handleAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        const storedData = localStorage.getItem("contacts");
        const contacts = storedData ? JSON.parse( storedData ) : [];
        const newContact: Contact = {
            id: contacts.length.toString(),
            firstName: fname,
            lastName: lname,
            phone: phone,
            email: email,
            address: address,
        };
        if (!fname || !phone || !email) {
            alert("Please fill in all required fields");
            return;
        }
        contacts.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="m-4 text-2xl text-bold top-0 bg-black z-10 py-4 w-full text-center">
                Add a New Contact
            </h2>
            <div className="p-10 border rounded-md shadow flex flex-col justify-center items-center gap-4 w-full max-w-md">
                <div className="w-full">
                    <label htmlFor="firstName" className="block mb-1 font-medium">
                        First Name <span className="text-red-400">*</span>
                    </label>
                    <input 
                        name="firstName"
                        placeholder="Type First Name" 
                        value={ fname }
                        onChange={ (e) => setFname(e.target.value) }
                        required
                        className="w-full py-2 px-4 border rounded-full"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="lastName" className="block mb-1 font-medium">
                        Last Name
                    </label>
                    <input 
                        name="lastName"
                        placeholder="Type Last Name / Family Name" 
                        value={ lname }
                        onChange={ (e) => setLname(e.target.value) }
                        className="w-full py-2 px-4 border rounded-full"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="phone" className="block mb-1 font-medium">
                        Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input 
                        name="phone"
                        placeholder="e.g. +965 12345678" 
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value) }
                        required
                        className="w-full py-2 px-4 border rounded-full"
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Email Address <span className="text-red-400">*</span>
                    </label>
                    <input 
                        name="email"
                        placeholder="e.g. abc123@email.com" 
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                        required
                        className="w-full py-2 px-4 border rounded-full"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="address" className="block mb-1 font-medium">
                        Address
                    </label>
                    <input 
                        name="address"
                        placeholder="e.g. Subang Jaya, Selangor, Malaysia" 
                        value={ address }
                        onChange={ (e) => setAddress(e.target.value) }
                        required
                        className="w-full py-2 border rounded-full px-4"
                    />
                </div>
                <button
                onClick={(e) => handleAdd(e)}
                className="mt-6 rounded-full py-2 px-4 bg-gray-800 hover:bg-green-800 cursor-pointer">
                    Save Contact
                </button>
            </div>
        </div>
    )

}