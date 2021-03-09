import React from 'react';
import css from './InputFn.module.css';

export function InputFn({
  titleNameInput,
  type,
  placeholder,
  value,
  onChange,
  name,
  id,
  required,
}) {
  return (
    <>
      <label className={css.label} htmlFor={id}>
        {titleNameInput}
        <input
          autoComplete="off"
          className={css.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required={required}
        />
      </label>
    </>
  );
}
