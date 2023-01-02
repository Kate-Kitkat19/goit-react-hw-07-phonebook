import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Layout } from './Layout.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Title } from './Contacts/Contacts.styled';
import { localStore } from './local-storage';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const App = () => {
  const contacts = getContacts();

  useEffect(() => {
    localStore.save(KEY, contacts);
  }, [contacts]);

  const handleSubmit = (values, { resetForm }) => {
    const contactName = values.name.toLowerCase();
    const isSaved = contacts.find(
      contact => contact.name.toLowerCase() === contactName
    );
    if (isSaved) {
      alert(`${values.name} is already in contacts`);
    } else {
      addContact({ ...values, id: nanoid() });
    }
    resetForm();
  };


  const KEY = 'savedContacts';
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(getFilter())
  );

  return (
    <Layout>
      <ContactForm onSubmit={handleSubmit}></ContactForm>
      <Filter></Filter>

      {filteredContacts.length > 0 && (
        <>
          <Title>Contacts</Title>
          <Contacts
            contacts={filteredContacts}
          ></Contacts>
        </>
      )}
    </Layout>
  );
};
