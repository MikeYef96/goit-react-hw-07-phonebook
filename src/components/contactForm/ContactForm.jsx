import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/operations';
import { getContacts } from '../../redux/selectors';
import { useForm } from 'react-hook-form';

import ButtonFn from '../../lib/ButtonFn';
import InputFn from '../../lib/InputFn';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = uuid();
  // const contactNumberId = uuid();

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

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

  const handleFormSubmit = (data, evt) => {
    evt.preventDefault();
    console.log(data.name);
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already exists!`);
      reset();
      return;
    }
    dispatch(contactsOperations.addContact(data.name, data.number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <InputFn
        className={css.inputName}
        name="name"
        titleNameInput="Name"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
        id={contactNameId}
        ref={register}
        required
      />
      <InputFn
        name="number"
        titleNameInput="Number"
        type="tel"
        placeholder="Enter number"
        value={number}
        onChange={handleChange}
        // id={contactNumberId}
        ref={register}
        required
      />
      <br />
      <ButtonFn name="Add contact" type="submit" />
    </form>
  );
}
