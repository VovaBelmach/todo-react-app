import React from "react";
import Todos from "./components/Todos/Todos";
import styles from "./App.module.css";
import { HEADER_TEXT, FOOTER_TEXT } from "./constants";

function App() {
  return (
    <>
      <div data-testid="app-header" className={styles["app-header"]} />
      <div data-testid="app"  className={styles.app}>
        <main data-testid="app-content" className={`${styles["app-content"]}`}>
          <header>
            <h1 data-testid="title" className={styles.title}>{HEADER_TEXT}</h1>
          </header>
          <Todos />
          <footer>
            <p data-testid="footer" className={styles.footer}>{FOOTER_TEXT}</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
