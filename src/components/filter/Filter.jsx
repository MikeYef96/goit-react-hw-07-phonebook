import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { InputFn } from '../../lib/InputFn';

export function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch;

  const handleChangeFilter = evt => dispatch(changeFilter(evt.target.value));

  return (
    <>
      <InputFn
        value={filter}
        type="text"
        placeholder="Enter contact name"
        onChange={handleChangeFilter}
        titleNameInput="Find contact by name:"
      />
    </>
  );
}
