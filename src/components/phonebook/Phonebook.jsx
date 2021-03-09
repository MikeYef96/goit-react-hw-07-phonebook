import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { addContact } from '../../redux/actions';
import { ContactForm } from '../contactForm/ContactForm';
import { ContactList } from '../contactList/ContactList';
import css from './Phonebook.module.css';

function Phonebook({ contacts }) {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <React.Fragment>
      <div className={css.container}>
        <ContactForm onAddContact={addContact} />
        <ContactList />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(Phonebook);
