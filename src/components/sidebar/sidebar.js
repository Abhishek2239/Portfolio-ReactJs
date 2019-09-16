import React from 'react'
import './sidebar.css'

const Sidebar = ({toggle,setToggle}) => {

    
    return (
        
        <div className={toggle?'sidebar sidebaron':'sidebar'}>

        <ul className="sidebar-navigation-list">
            <li onClick={()=>setToggle(false)} className="sidebar-navigation-item">
              <a href="#about">About</a>
            </li>
            <li onClick={()=>setToggle(false)} className="sidebar-navigation-item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setToggle(false)} className="sidebar-navigation-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
            
        </div>
    )
}

export default Sidebar
