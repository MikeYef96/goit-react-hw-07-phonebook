import { combineReducers, createReducer } from '@reduxjs/toolkit';
// import defaultContacts from '../base/defaultContacts';
import { changeFilter, addContact, deleteContact } from './actions';

const contactsReducer = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')),
  {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) =>
      state.filter(contact => {
        return contact.id !== payload;
      }),
  },
);

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
