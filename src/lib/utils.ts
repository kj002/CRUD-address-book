import { Contact } from "@/model/Contact";

export const deleteContact = (id: string) => {
    const storedData = localStorage.getItem("contacts");
    const contacts: Contact[] = storedData ? JSON.parse( storedData ) : [];
    const filtered = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem("contacts", JSON.stringify(filtered));
} 

export const searchContact = (search: string) => {
    const storedData = localStorage.getItem("contacts");
    const contacts: Contact[] = storedData ? JSON.parse( storedData ) : [];
    const searchText = search.toLowerCase();
    const selected = contacts.filter((contact) => contact.firstName.toLowerCase().includes(searchText) || contact.lastName.toLowerCase().includes(searchText) || contact.phone.toLowerCase().includes(searchText) || contact.email.toLowerCase().includes(searchText) || contact.address.toLowerCase().includes(searchText));
    return selected;
}

