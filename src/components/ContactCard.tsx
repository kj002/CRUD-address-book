import React from "react";
import { Contact } from "@/model/Contact";
import { Icon, Star, Trash2 } from "lucide-react";

export interface ContactCardComponent {
    contact: Contact;
    onDelete: any;
    onStarToggle: any,
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

const ContactCard: React.FC<ContactCardComponent> = ({ contact, onDelete, onStarToggle }) => {
    return (
        <div className="relative p-4 border rounded-md shadow flex items items-center space-x-4">
            <button
                onClick={() => onDelete()}
                className="absolute top-3 -right-1 cursor-pointer"
            >
                <Trash2 strokeWidth={1.25}/>
            </button>
            <button
                onClick={() => onStarToggle()}
                className="absolute bottom-3 -right-1 cursor pointer"
            >
                {contact.isFavourite ? <Star color="yellow"/> : <Star/>}
            </button>
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