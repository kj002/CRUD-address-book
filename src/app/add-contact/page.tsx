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
            <h2 className="-mt-2 text-4xl font-bold mb-5 w-full text-center">
                Add a New Contact
            </h2>
            <div className="px-10 py-3 border rounded-xl shadow-lg flex flex-col justify-center items-center w-full max-w-md bg-orange-100">
                <div className="w-full">
                    <label htmlFor="firstName" className="block mb-1 font-medium">
                        First Name <span className="text-red-400 -ml-2">*</span>
                    </label>
                    <input 
                        name="firstName"
                        placeholder="Type First Name" 
                        value={ fname }
                        onChange={ (e) => setFname(e.target.value) }
                        required
                        className="w-full py-1 px-4 border rounded-full bg-white"
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
                        className="w-full py-1 px-4 border rounded-full bg-white"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="phone" className="block mb-1 font-medium">
                        Phone Number <span className="text-red-400 -ml-2">*</span>
                    </label>
                    <input 
                        name="phone"
                        placeholder="e.g. +965 12345678" 
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value) }
                        required
                        className="w-full py-1 px-4 border rounded-full bg-white"
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Email Address <span className="text-red-400 -ml-2">*</span>
                    </label>
                    <input 
                        name="email"
                        placeholder="e.g. abc123@email.com" 
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                        required
                        className="w-full py-1 px-4 border rounded-full bg-white"
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
                        className="w-full py-1 border rounded-full bg-white px-4"
                    />
                </div>
                <button
                onClick={(e) => handleAdd(e)}
                className="mt-5 text-center transition-all duration-200 py-3 px-5 rounded-full bg-gradient-to-b from-green-300 to-green-400 hover:from-green-400 hover:to-green-500 text-white font-bold border-2 border-green-600 shadow-[inset_0_-6px_0_rgba(0,0,200,0.3),inset_0_6px_0_rgba(255,255,255,0.4)] hover:shadow-[inset_0_-3px_0_rgba(0,0,300,0.3),inset_0_3px_0_rgba(255,255,255,0.4)] active:shadow-[inset_0_-2px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.4)] hover:scale-[1.01] active:scale-[0.98] cursor-pointer">
                    <p className="-mt-5 pb-1">Save Contact</p>
                </button>
            </div>
        </div>
    )
}