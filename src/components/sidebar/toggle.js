import React from 'react'
import './toggle.css'


const Toggle = ({toggle,setToggle})=> {
    return(
        <div className='mobile-menu' onClick={()=>setToggle(!toggle)}>
            {toggle?<i className="fas fa-times hidden"></i>: <i className="fas fa-bars"></i>}      
        
        </div>
    )
}

export default Toggle