import React from 'react'

import styles from '@/styles/Contact/Contact.module.css'

const contact = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Información de contacto</h1>
      </header>

      <section className={styles.section}>
        <h2>Formulario de contacto</h2>

        <form method="POST" className={styles.form}>
          <section className={styles.formGroup}>
            <fieldset className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.input}
                placeholder=" "
              />

              <legend className={styles.caption}>Nombre:</legend>
            </fieldset>
          </section>

          <section className={styles.formGroup}>
            <fieldset className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.input}
                placeholder=" "
              />

              <legend className={styles.caption}>Email:</legend>
            </fieldset>
          </section>

          <section className={styles.formGroup}>
            <fieldset className={styles.inputGroup}>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                className={styles.input}
                placeholder=" "
              ></textarea>

              <legend className={styles.caption}>Mensaje:</legend>
            </fieldset>
          </section>

          <section>
            <button className={styles.button} type="submit">
              Enviar
            </button>
          </section>
        </form>
      </section>

      <section className={styles.section}>
        <h2>Información de contacto</h2>

        <p>
          Si prefieres contactarnos de otra manera, aquí tienes nuestra
          información de contacto:
        </p>

        <ul className={styles.list}>
          <li className={styles.listItem}>(123) 456-7890</li>
          <li className={styles.listItem}>info@miempresa.com</li>
          <li className={styles.listItem}>Calle Principal, Ciudad, País</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Horario de atención</h2>

        <p>
          Nuestro equipo está disponible para atenderte en los siguientes
          horarios:
        </p>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            Lunes a Viernes: 9:00 AM - 5:00 PM
          </li>
          <li className={styles.listItem}>Sábados: 10:00 AM - 2:00 PM</li>
          <li className={styles.listItem}>Domingos: Cerrado</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Redes Sociales</h2>
        <p>
          Síguenos en nuestras redes sociales para mantenerte informado sobre
          nuestras últimas novedades y promociones:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              href="https://www.facebook.com/miempresa"
              target="_blank"
              className={styles.socialLink}
            >
              <span className="fab fa-facebook-square"></span> Facebook
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              href="https://twitter.com/miempresa"
              target="_blank"
              className={styles.socialLink}
            >
              <span className="fab fa-twitter-square"></span> Twitter
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              href="https://www.instagram.com/miempresa"
              target="_blank"
              className={styles.socialLink}
            >
              <span className="fab fa-instagram-square"></span> Instagram
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default contact
