import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Layout } from './Layout.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Title } from './Contacts/Contacts.styled';

export const App = () => {
  return (
    <Layout>
      <ContactForm></ContactForm>
      <Filter></Filter>
      <Title>Contacts</Title>
      <Contacts></Contacts>
    </Layout>
  );
};
