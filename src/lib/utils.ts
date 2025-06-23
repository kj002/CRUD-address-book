import { Contact } from "@/model/Contact";

const deleteContact = (id: string) => {
    const storedData = localStorage.getItem("contacts");
    const contacts: Contact[] = storedData ? JSON.parse( storedData ) : [];
    const filtered = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem("contacts", JSON.stringify(filtered));
    return filtered
} 

export const searchContact = (search: string) => {
    const storedData = localStorage.getItem("contacts");
    const contacts: Contact[] = storedData ? JSON.parse( storedData ) : [];
    const searchText = search.toLowerCase();
    const selected = contacts.filter((contact) => contact.firstName.toLowerCase().includes(searchText) || contact.lastName.toLowerCase().includes(searchText) || contact.phone.toLowerCase().includes(searchText) || contact.email.toLowerCase().includes(searchText) || contact.address.toLowerCase().includes(searchText));
    return selected;
}

export const starContact = (id: string) => {
    const storedData = localStorage.getItem("contacts");
    const contacts: Contact[] = storedData ? JSON.parse( storedData ) : [];
    const favouriteContact = contacts.map((contact) => 
        contact.id === id
            ? {...contact, isFavourite: !contact.isFavourite}
            : contact
    );
    localStorage.setItem("contacts", JSON.stringify(favouriteContact));
    return favouriteContact;
}

export const deleteAndRefresh = (
  id: string,
  setStateFn: React.Dispatch<React.SetStateAction<Contact[]>>
) => {
  const updated = deleteContact(id);
  setStateFn(updated);
};

export const starAndRefresh = (
  id: string,
  setStateFn: React.Dispatch<React.SetStateAction<Contact[]>>
) => {
  const updated = starContact(id);
  setStateFn(updated);
};