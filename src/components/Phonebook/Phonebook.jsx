import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Container } from './Phonebook.styled';

export const Phonebook = () => {
  return (
    <Container>
      <h1>Phone Book</h1>

      <ContactForm></ContactForm>

      <h2>Contacts:</h2>

      <Filter></Filter>
      <ContactList></ContactList>
    </Container>
  );
};
