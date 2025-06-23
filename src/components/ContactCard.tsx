import React from "react";
import { Contact } from "../model/Contact";

export interface ContactCardComponent {
    contact: Contact;
}

const getInitials = (firstName: string, lastName: string) => {
    if (firstName === "") {
        return "";
    }
    if (lastName === "") {
        return firstName[0].toUpperCase();
    }
    return (firstName[0] + lastName[0]).toUpperCase();
};

const ContactCard: React.FC<ContactCardComponent> = ({ contact }) => {
    return (
        <div className="p-4 border rounded-md shadow flex items items-center space-x-4">
            <div className="rounded-full h-16 w-16 flex items-center justify-center text-xl font=semibold bg-gray-900">
                {getInitials(contact.firstName, contact.lastName)}
            </div>

            <div>
                <h2 className="text-lg font-bold"> { contact.firstName } { contact.lastName } </h2>
                <p> { contact.phone } </p>
                <p> { contact.email } </p>
                <p> { contact.address } </p>
            </div>
        </div>
    );
};

export default ContactCard;