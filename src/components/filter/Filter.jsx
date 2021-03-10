import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import * as contactsActions from '../../redux/actions';

import PropTypes from 'prop-types';
import InputFn from '../../lib/InputFn';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <InputFn
        value={value}
        type="text"
        placeholder="Enter contact name"
        onChange={evt =>
          dispatch(contactsActions.changeFilter(evt.target.value))
        }
        titleNameInput="Find contact by name:"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
