import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selectors';

import ButtonFn from '../../lib/ButtonFn';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = evt =>
    dispatch(
      contactsOperations.deleteContact(
        evt.target.closest('[data-id]').dataset.id,
      ),
    );

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contactListItem} key={id} data-id={id}>
            <div className={css.listItemContainer}>
              <p>
                {name}: <span>{number}</span>
              </p>
              <ButtonFn name="Delete" type="button" onClick={onDeleteContact} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
