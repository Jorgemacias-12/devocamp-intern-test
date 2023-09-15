import React from 'react'

import Image from 'next/image'

import styles from '@/styles/Header/Header.module.css'
import Menu from '../Menu/Menu'

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.brandContainer}>

        <Image src={'https://via.placeholder.com/250x40'} alt={''} width={250} height={40}></Image>

        <h1 className={styles.brandTitle}>
          Devocamp test
        </h1>
      </section>
      <Menu />
    </header>
  )
}

export default Header
