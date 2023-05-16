import React from "react";
import styles from "./Footer.module.css";
import { FOOTER_TEXT } from "../../../constants";

const Footer = () => {
  return (
    <footer>
      <p data-testid="footer" className={styles.footer}>
        {FOOTER_TEXT}
      </p>
    </footer>
  );
};

export default Footer;
