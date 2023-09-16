import React from 'react'

import styles from '@/styles/Input/Input.module.css'

type InputProps = {
  type: string,
  id: string,
  name: string,
  text: string
}

const Input = ( {type, id, name, text}: InputProps ) => {
  return (
    <section>
      <fieldset className={styles.inputGroup}>
        <input
          type={type}
          name={name}
          id={id}
          className={styles.input}
          placeholder=" "
        />

        <legend className={styles.caption}>
          <label htmlFor={name}>{text}</label>
        </legend>
      </fieldset>
    </section>
  );
}

export default Input
