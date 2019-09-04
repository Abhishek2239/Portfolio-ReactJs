import React ,{useState}from 'react';
import styles from './App.module.css';
import Portfolio from './components/portfolio/portfolio';
import Header from './components/header/header';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Sidebar from './components/sidebar/sidebar'
// import LazyLoad from 'react-lazy-load';

const App = () => {
  

  const[toggle,setToggle] = useState(false);

  return (
    <>
      <main className={styles.App}>
        <Sidebar toggle={toggle} setToggle={setToggle}/>

        <section id='header' className={styles.section}>
          <Header toggle={toggle} setToggle={setToggle}/>
        </section>

        <section  id='about' className={styles.section + ' ' +  styles.about}>
         
          <About/>
        </section>

        <section id="portfolio" className={styles.section}>
          <Portfolio/>
        </section>

        <section id='contact' className={styles.section}>
          <Contact/>

        </section>
        <a className={styles.scrollTop } href='#header'><i  className="fas fa-arrow-circle-up"></i></a>

      </main>
    </>
  );
}

export default App;
