import React,{useState} from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
  return (
    <div>
        <>
         <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    IM <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={ handleClick }>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}/> 
                </div>
                <ul className={click ?'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onclick={closeMobileMenu}>Home</Link>

                    </li>
                </ul>
 
            </div>
         </nav>
        
        
        </>
      
    </div>
  )
}

export default Navbar
