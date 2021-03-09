import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');
export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));
