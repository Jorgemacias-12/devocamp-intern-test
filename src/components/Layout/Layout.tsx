import React, { ReactNode, useState } from 'react'

import styles from '@/styles/Layout/Layout.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


type LayoutProps = {
  children: ReactNode;
}

const Layout = ( {children}: LayoutProps) => {

  const router = useRouter()

  const routesWithoutLayout = ['/login', '/register']

  const shouldHideLayout = routesWithoutLayout.includes(router.pathname);

  return (
    <section className={styles.appContainer}>
      {!shouldHideLayout && <Header />}
      <main className={styles.main}>{children}</main>
      {!shouldHideLayout && <Footer />}
    </section>
  );
  
export default Layout