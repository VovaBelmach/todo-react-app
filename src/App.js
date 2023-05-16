import React from "react";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Todos from "./components/Todos/Todos";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div data-testid="app-header" className={styles["app-header"]} />
      <div data-testid="app" className={styles.app}>
        <main data-testid="app-content" className={`${styles["app-content"]}`}>
          <Header />
          <Todos />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
