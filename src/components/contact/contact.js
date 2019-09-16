import React from 'react'
import './contact.css'


const Contact =()=>{
    return(
    <div className="contact-wrapper">
    <h2 className="primary-heading">Contact</h2>
      <h3 className="secondary-heading">You can reach me out at </h3>
      
      <h2 className="contact-email">abhishek.codes0@gmail.com</h2>

      <ul className="contact-list">
         <li className="contact-list-item"><a href='https://github.com/Abhishek2239'rel="noopener noreferrer" target='_blank'><i className="fab fa-github"></i></a></li>
          <li className="contact-list-item"><a href='https://www.linkedin.com/in/abhisheksingh1997/'rel="noopener noreferrer"target='_blank'><i className="fab fa-linkedin"></i></a></li>
          <li className="contact-list-item"><a href='https://www.instagram.com/abhishek.codes/' rel="noopener noreferrer"target='_blank'><i className="fab fa-instagram"></i></a></li>

      </ul>

      <h3 className="copyright-text"><i className="fas fa-copyright"></i>&nbsp;2019  Abhishek.Codes</h3>
      </div>
     )
}


export default Contact;