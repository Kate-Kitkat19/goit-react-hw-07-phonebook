import { ContactCard } from '../ContactCard/ContactCard';
import { List, ListItem } from './Contacts.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

export const Contacts = () => {
  const contactList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = filter
    ? contactList.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contactList;

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            <ContactCard
              name={name}
              number={number}
              id={id}
              onDelete={() => dispatch(deleteContact(id))}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
