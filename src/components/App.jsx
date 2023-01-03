import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Layout } from './Layout.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Title } from './Contacts/Contacts.styled';
import { localStore } from './local-storage';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);
  console.log('App   contacts', contacts, typeof contacts);

  const KEY = 'savedContacts';
  useEffect(() => {
    localStore.save(KEY, contacts);
  }, [contacts]);

  const query = useSelector(getFilter);
  console.log('App   query', query);

  return (
    <Layout>
      <ContactForm></ContactForm>
      <Filter></Filter>
      <Title>Contacts</Title>
      <Contacts></Contacts>
    </Layout>
  );
};
