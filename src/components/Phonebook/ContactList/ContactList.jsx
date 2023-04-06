import { ContactEl } from './ContactEl/ContactEl';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => {
    const filteredContacts = state.phonebook.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())
    );
    return filteredContacts;
  });

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactEl key={id} id={id} name={name} number={number}></ContactEl>
      ))}
    </List>
  );
};
