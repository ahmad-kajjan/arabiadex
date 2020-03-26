import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
const Header=()=> 
(
    <div className ="header">
        <Link className='icon-container' to='/'>
            <img src ="https://media.caramel.la/_CdWCc2Nz?e=0,0,340,587&r=80"  alt="icon" className='icon' />
        </Link>
        <div className="options">
            <Link className='option' to='/login'>
                Login
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
 
        </div>
    </div>
)
export default Header;