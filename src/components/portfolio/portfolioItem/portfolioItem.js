import React from 'react';
import styles from './portfolioItem.module.css'
import LazyLoad from 'react-lazy-load';

const PortfolioItem = ({ title, description, tech, githublink, visitlink, imageSrc }) => {

  return (

    <div className={styles.portfolio}>

      <div className={styles.portfolioItem}>

        <h2 className={styles.portfolioItemTitle}>{title}</h2>

        <div className={styles.portfolioItemContent}>

          <div className={styles.portfolioItemText}>
            <p className={styles.portfolioItemDescription}>{description}</p>

            <h4 className={styles.portfolioItemTech}>{tech}</h4>

            <div className={styles.btnContainer}>
              
              <a href={visitlink} target="_blank"
                className={styles.btn} rel="noopener noreferrer">
                  <i className="fas fa-link"> </i> Visit
              </a>
              <a className={styles.btn}
                href={githublink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> Source
              </a>
              
            </div>

          </div>
          <div className={styles.portfolioItemImageContainer}>
            <LazyLoad >
              <img className={styles.portfolioItemImage} src={imageSrc} alt=''></img>
            </LazyLoad>
          </div>

        </div>

      </div>


    </div>

  )

}


export default PortfolioItem;