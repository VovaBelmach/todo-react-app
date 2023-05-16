import React from "react";
import styles from "./Header.module.css";
import { HEADER_TEXT} from "../../../constants";

const Header = () => {
  return (
    <header>
      <h1 data-testid="title" className={styles.title}>
        {HEADER_TEXT}
      </h1>
    </header>
  );
};

export default Header;
