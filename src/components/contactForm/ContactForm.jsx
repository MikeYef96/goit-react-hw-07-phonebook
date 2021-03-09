import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addContact } from '../../redux/actions';
import { ButtonFn } from '../../lib/ButtonFn';
import { InputFn } from '../../lib/InputFn';
import css from './ContactForm.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const onAddContact = (name, number) => dispatch(addContact(name, number));

  const handleSubmit = evt => {
    evt.preventDefault();

    const isAdded = name =>
      contacts.map(contact => contact.name).includes(name);

    if (isAdded(name)) {
      return alert(`${name} is already exists`);
    } else {
      onAddContact(name, number);
    }

    setName('');
    setNumber('');
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form className={css.form} onSubmit={evt => handleSubmit(evt)}>
        <InputFn
          className={css.inputName}
          name="name"
          onChange={evt => setName(evt.target.value)}
          titleNameInput="Name"
          type="text"
          placeholder="Enter name"
          value={name}
          required
        />
        <InputFn
          name="number"
          onChange={evt => setNumber(evt.target.value)}
          titleNameInput="Number"
          type="tel"
          placeholder="Enter number"
          value={number}
          required
        />
        <br />
        <ButtonFn name="Add contact" type="submit" />
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};
