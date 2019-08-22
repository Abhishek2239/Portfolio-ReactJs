import React from 'react';
import styles from './App.module.css';
import Portfolio from './components/portfolio/portfolio'
const App = () => {
  return (
    <>
      <main className={styles.App}>

        <section id='' className={styles.section}></section>

        <section id="portfolio" className={styles.section}>
          <Portfolio/>
        </section>

        <section id='' className={styles.section}></section>
        
      </main>
    </>
  );
}

export default App;
