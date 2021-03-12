import React from 'react';
import { addContactSuccess } from '../../redux/actions';
import ContactForm from '../contactForm/ContactForm';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';
import css from './Phonebook.module.css';

export default function Phonebook() {
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.container}>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={addContactSuccess} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
