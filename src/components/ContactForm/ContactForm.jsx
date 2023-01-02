import { Formik, ErrorMessage } from 'formik';
import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from './ContactForm.styled';
import { StyledForm, FormInput, Label, ErrorText } from './ContactForm.styled';
import { ValidationSchema } from './Validation';

export const ContactForm = ({ onSubmit }) => {
  const INITIAL_VALUES = {
    name: '',
    number: '',
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={ValidationSchema}
      initialValues={{ ...INITIAL_VALUES }}
    >
      <StyledForm>
        <Label>
          Please write the name
          <FormInput type="text" name="name"></FormInput>
          <ErrorMessage name="name" component={ErrorText}></ErrorMessage>
        </Label>
        <Label>
          Please write the phone number
          <FormInput type="tel" name="number"></FormInput>
          <ErrorMessage name="number" component={ErrorText}></ErrorMessage>
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
