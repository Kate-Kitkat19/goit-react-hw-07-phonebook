import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Layout } from './Layout.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Title } from './Contacts/Contacts.styled';
import { localStore } from './local-storage';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStore.load(KEY);
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStore.save(KEY, contacts);
  }, [contacts]);

  const saveContactInState = data => {
    setContacts(prevContacts => [...prevContacts, data]);
  };

  const handleSubmit = (values, { resetForm }) => {
    const contactName = values.name.toLowerCase();
    const isSaved = contacts.find(
      contact => contact.name.toLowerCase() === contactName
    );
    if (isSaved) {
      alert(`${values.name} is already in contacts`);
    } else {
      saveContactInState({ ...values, id: nanoid() });
    }
    resetForm();
  };

  const filterContacts = evt => {
    const value = evt.target.value;
    setFilter(value.trim().toLowerCase());
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const KEY = 'savedContacts';

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Layout>
      <ContactForm onSubmit={handleSubmit}></ContactForm>
      <Filter onFilterChange={filterContacts} filterValue={filter}></Filter>

      {filteredContacts.length > 0 && (
        <>
          <Title>Contacts</Title>
          <Contacts
            contacts={filteredContacts}
            onDelete={deleteContact}
          ></Contacts>
        </>
      )}
    </Layout>
  );
};
