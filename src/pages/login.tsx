import React from 'react'

import styles from '@/styles/Login/Login.module.css'
import Link from 'next/link'

import Image from 'next/image'

const login = () => {

  const handleSubmit = () => {

  }

  return (
    <section className={styles.container}>
      <Link href={"/"} className={styles.link}>
        <span className={`${styles.icon} fas fa-angle-left`}></span>
      </Link>

      <form
        className={styles.form}
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <span
          className={`${styles.loginIcon} fa-solid fa-right-to-bracket`}
        ></span>

        <h1 className={styles.title}>¡Bienvenido!</h1>
        <h4 className={styles.subTitle}>Inicia sesión en tú cuenta</h4>

        <section className={styles.formGroup}>
          <label htmlFor="">Email:</label>
          <input
            className={styles.input}
            type="email"
            name=""
            id=""
          />
          <p></p>
        </section>

        <section className={styles.formGroup}>
          <label htmlFor="">Contraseña:</label>
          <input className={styles.input} type="password" name="" id="" />
          <p></p>
        </section>

        <section>
          <button className={styles.button} type="submit">
            Iniciar sesión
          </button>
        </section>
      </form>
    </section>
  );
}

export default login
