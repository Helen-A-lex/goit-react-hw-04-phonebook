import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from '../GlobalStyle';
import { Title } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Layout } from '../Layout';

const LS_KEY = 'contacts';

export default function App() {
  //  const [contacts, setContacts] = useState(() => {
  //     return JSON.parse(localStorage.getItem(LS_KEY)) ?? "";
  // });
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const savedContacts = localStorage.getItem(LS_KEY);
  //   if (savedContacts !== null) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     this.setState({ contacts: parsedContacts });
  //     return;
  //   }
  //   this.setState({ contacts: [] });
  // }

  useEffect(() => {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      setContacts(parsedContacts);
      return;
    }
    setContacts([]);
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
  //   }
  // }
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  function formSubmitHandle(name, number) {
    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      setContacts(prevStateContacts => [contact, ...prevStateContacts]);
    }
  }

  const changeFilter = evt => {
    return setFilter(evt.currentTarget.value);
  };

  const getFilteredContacts = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };

  const deleteContact = contactId => {
    setContacts(prevStateContacts =>
      prevStateContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Layout>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm onSubmit={formSubmitHandle} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        filteredContacts={getFilteredContacts(filter, contacts)}
        onDelete={deleteContact}
      />
    </Layout>
  );
}
