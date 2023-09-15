import React from "react";

import styles from "@/styles/Footer/Footer.module.css";
import { socialMedias } from "@/constants";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Redes sociales</h2>

      <section className={styles.socialNetworks}>
        {socialMedias.map((socialMedia, item) => {
          return (
            <a
              href={socialMedia.url}
              target="_blank"
              className={`${styles.socialNetwork} ${socialMedia.iconClass}`}
              key={item}
            ></a>
          );
        })}
      </section>
    </footer>
  );
};

export default Footer;