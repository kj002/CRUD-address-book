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
        if (!fname || !phone || !email || !address) {
            alert("Please fill in all required fields");
            return;
        }
        contacts.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }

    return (
        <div className="justify-center items-center h-screen flex flex-col gap-2">
            <input 
            name="firstName"
            placeholder="First Name" 
            value={ fname }
            onChange={ (e) => setFname(e.target.value) }
            required
            className="w-full p-2 border rounded"
            />
            <input 
            name="lastName"
            placeholder="Last Name / Family Name" 
            value={ lname }
            onChange={ (e) => setLname(e.target.value) }
            className="w-full p-2 border rounded"
            />
            <input 
            name="phone"
            placeholder="Phone Number, e.g. +965 12345678" 
            value={ phone }
            onChange={ (e) => setPhone(e.target.value) }
            required
            className="w-full p-2 border rounded"
            />
            <input 
            name="email"
            placeholder="Email Address" 
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            required
            className="w-full p-2 border rounded"
            />
            <input 
            name="address"
            placeholder="Address, e.g. Subang Jaya, Selangor, Malaysia" 
            value={ address }
            onChange={ (e) => setAddress(e.target.value) }
            required
            className="w-full p-2 border rounded"
            />
            <button
            onClick={(e) => handleAdd(e)}>
            add
            </button>
        </div>
    )

}