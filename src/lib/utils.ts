import { Contact } from "@/model/Contact";

export const deleteContact = (id: string) => {
    const storedData = localStorage.getItem("contacts");
    const contacts: Contact[] = storedData ? JSON.parse( storedData ) : [];
    const filtered = contacts.filter((contact) => contact.id !== id)
    localStorage.setItem("contacts", JSON.stringify(filtered));
} 
