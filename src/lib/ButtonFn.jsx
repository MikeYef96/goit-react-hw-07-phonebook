import React from 'react';
import css from './ButtonFn.module.css';

export default function ButtonFn({ name, type, onClick }) {
  return (
    <>
      <button className={css.btn} type={type} onClick={onClick}>
        {name}
      </button>
    </>
  );
}
