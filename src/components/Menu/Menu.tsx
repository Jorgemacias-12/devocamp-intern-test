import React, { useState } from 'react'

import styles from '@/styles/Menu/Menu.module.css'
import { MenuItems } from '@/constants';
import Link from 'next/link';

const Menu = () => {
  
  const [expand, setExpand] = useState(false);

  const setIcon = () => {
    return expand ? "fas fa-times" : "fas fa-bars";

  }

  const handleClick = () => {
    setExpand(!expand)
  }

  return (
    <section className={styles.menuContainer}>
      <section className={styles.iconContainer}>
        <span
          className={`${styles.icon} ${setIcon()}`}
          onClick={handleClick}
        ></span>
      </section>

      <ul className={styles.menu} data-expanded={expand}>
        {MenuItems.map((item, index) =>
          item.nodeType !== "button" ? (
            <li key={index}>
              <Link className={styles.menuItem} href={item.url}>
                {item.name}
              </Link>
            </li>
          ) : (
            <li key={index}>
              <button className={styles.button}>
                <Link className={styles.buttonLink} href={item.url}>{item.name}</Link>
              </button>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default Menu
