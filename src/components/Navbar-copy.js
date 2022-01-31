import React, { useState } from 'react';
import './Navbar-copy.css';
import { Link, animateScroll as scroll } from 'react-scroll'; 

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
      <>
        <nav className='navbar'>
            <div className='nav-container'>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' :'nav-menu' }>
                <li className='nav-item'>
                    <Link className='nav-links' to="aboutme" onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact='true' offset={0}>
                    <i className="material-icons-outlined">person</i>
                    <span className='nav-title'>About Me</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="work" onClick={closeMobileMenu}>
                    <i className="material-icons-outlined">work</i>
                    <span className='nav-title'>Work</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="education" onClick={closeMobileMenu}>
                    <i className="material-icons-outlined">school</i>
                    <span className='nav-title'>Education</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="sills" onClick={closeMobileMenu}>
                    <i className="material-icons-outlined">engineering</i>
                    <span className='nav-title'>Skills</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="publications" onClick={closeMobileMenu}>
                    <i className="material-icons-outlined">library_books</i>
                    <span className='nav-title'>Publications</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="projects" onClick={closeMobileMenu}>
                    <i className="material-icons-outlined">code</i>
                    <span className='nav-title'>Projects</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="certificates" onClick={closeMobileMenu}>
                    <i className="material-icons-outlined">verified_user</i>
                    <span className='nav-title'>Certificates</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="photography" onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact='true' offset={0} activeClass='active'>
                    <i className="material-icons-outlined">photo_camera</i>
                    <span className='nav-title'>Photography</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="music" onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact='true' offset={0} activeClass='active'>
                    <i className="material-icons-outlined">audiotrack</i>
                    <span className='nav-title'>Music</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="resume" onClick={closeMobileMenu}>
                    <i className="material-icons-outlined">insert_drive_file</i>
                    <span className='nav-title'>Resume</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to="contact" onClick={closeMobileMenu}>
                    <i className="material-icons-outlined">alternate_email</i>
                    <span className='nav-title'>Contact</span>
                    </Link>
                </li>
                </ul>
                
            </div>
        </nav>
      </>
    );
}

export default Navbar;
