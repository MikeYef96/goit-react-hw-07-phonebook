import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const getFilteredContacts = contacts =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );

    return getFilteredContacts(contacts);
  },
);
