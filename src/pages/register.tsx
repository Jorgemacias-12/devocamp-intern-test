import Link from 'next/link';
import React from 'react'

import styles from '@/styles/Register/Register.module.css'
import Input from '@/components/Input/Input';

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
          Registrar alumno
        </h1>

        <h4 className={styles.subTitle}>
          Llena los campos para dar de alta al alumno
        </h4>
        
        <Input id='name' name='name' type='text' text='Nombre:' />

        <Input type={'text'} id={'studentID'} name={'studentID'} text={'Ncontrol:'} />
        
        <Input type={'text'} id={'especiality'} name={'especiality'} text={'Especialidad:'} />

        <Input type={'text'} id={'address'} name={'address'} text={'Dirección:'} />

        <button className={styles.button}>
          Registrar alumno
        </button>

      </form>

    </section>
  );
}

export default register
