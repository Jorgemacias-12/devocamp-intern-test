import React, { ReactNode } from 'react'

import styles from '@/styles/Layout/Layout.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


type LayoutProps = {
  children: ReactNode;
}

const Layout = ( {children}: LayoutProps) => {
  return (
    <section className={styles.appContainer}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </section>
  )
}

export default Layout
