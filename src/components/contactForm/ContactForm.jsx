import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/operations';
import { getContacts } from '../../redux/selectors';

import ButtonFn from '../../lib/ButtonFn';
import InputFn from '../../lib/InputFn';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = uuid();
  const contactNumberId = uuid();

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }
    dispatch(contactsOperations.addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label htmlFor={contactNameId}>
        <InputFn
          className={css.inputName}
          type="text"
          name="name"
          titleNameInput="Name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          id={contactNameId}
          required
        />
      </label>
      <label htmlFor={contactNumberId}>
        <InputFn
          type="text"
          name="number"
          titleNameInput="Number"
          placeholder="Enter number"
          value={number}
          onChange={handleChange}
          id={contactNumberId}
          required
        />
      </label>
      <br />
      <ButtonFn name="Add contact" type="submit" />
    </form>
  );
}
