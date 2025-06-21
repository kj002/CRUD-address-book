import { contacts } from "../data/contactList";
import ContactCard from "../components/ContactCard";

export default function ViewContactsPage() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col gap-2">
                {contacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact}/>
                ))}
            </div>
        </div>
    );
}