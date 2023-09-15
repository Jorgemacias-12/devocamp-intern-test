import Link from 'next/link';
import React from 'react'

import styles from '@/styles/Register/Register.module.css'

const register = () => {
  return (
    <section className={styles.container}>
      <Link href={"/"} className={styles.link}>
        <span className={`${styles.icon} fas fa-angle-left`}></span>
      </Link>

      <form 
        action=""
        className={styles.form}
        method="POST"
        onSubmit={()=> {}}
      >
      
        <h1 className={styles.title}>
          Formulario de registro
        </h1>

        <h4 className={styles.subTitle}>
          Introduce la informacion para crear tu cuenta
        </h4>

        <section className={styles.formGroup}>
            <label htmlFor="">Nombre:</label>
            <input className={styles.input} type="text" name="" id="" />
        </section>
        
        <section className={styles.formGroup}>
            <label htmlFor="">Email:</label>
            <input className={styles.input} type="text" name="" id="" />
        </section>
        
        <section className={styles.formGroup}>
            <label htmlFor="">Contraseña:</label>
            <input className={styles.input} type="text" name="" id="" />
        </section>

        <section className={styles.formGroup}>
          <button className={styles.button}>Registrarme</button>
        </section>

      </form>

    </section>
  );
}

export default register
