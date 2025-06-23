import React from "react";
import { Contact } from "@/model/Contact";
import { Star, Trash2 } from "lucide-react";

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
        <div className="relative py-1 pb-6 px-5 border rounded-xl shadow-lg flex items-center space-x-4 bg-orange-100 transition-all duration-500 hover:scale-105">
            <button
                onClick={() => onDelete()}
                className="absolute top-3 -right-1 cursor-pointer"
            >
                <Trash2 strokeWidth={1.75} color="salmon"/>
            </button>
            <button
                onClick={() => onStarToggle()}
                className="absolute bottom-3 -right-1 cursor pointer"
>
                {contact.isFavourite ? <Star color="gold"/> : <Star/>}
            </button>
            <img 
                src={`https://api.dicebear.com/9.x/pixel-art-neutral/svg?seed=${getInitials(contact.firstName, contact.lastName)}`}
                alt="avatar"
                className="mt-5 rounded-full border-orange-200 border-3 h-16 w-16 bg-transparent"
            />
            <div className="pb-3 text-start">
                <h2 className="text-3xl font-bold"> { contact.firstName } { contact.lastName } </h2>
                <p> { contact.phone } </p>
                <p className="-mt-4"> { contact.email } </p>
                <p className="-mt-4"> { contact.address } </p>
            </div>
        </div>
    );
};

export default ContactCard;