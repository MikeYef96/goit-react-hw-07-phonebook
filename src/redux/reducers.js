import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeFilter,
  addContactSuccess,
  deleteContactSuccess,
  fetchContactsSuccess,
} from './actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => {
    console.log('Payload', payload);
    return state.filter(
      contact => contact.id.toString() !== payload.toString(),
    );
  },
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
