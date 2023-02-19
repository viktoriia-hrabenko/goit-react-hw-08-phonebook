import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import SearchInput from 'components/SearchInput/SearchInput';
import Section from 'components/Section/Section';

const Phonebook = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <SearchInput />
        <ContactList />
      </Section>
    </>
  );
};

export default Phonebook;