import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selectors';

import ButtonFn from '../../lib/ButtonFn';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactListItem} key={id}>
          <div className={css.listItemContainer}>
            <span>{name}:</span>
            <span>{number}</span>
            <ButtonFn
              name="Delete"
              type="button"
              onClick={() => onDeleteContact(id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
