import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.appHeader} />
      <div className={styles.app}>
        <main className={styles.appContent}>
          <header>
            <h1 className={styles.title}>TODO</h1>
          </header>
        </main>
      </div>
    </>
  );
}

export default App;