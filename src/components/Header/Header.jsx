import React from 'react';
import h from './Header.module.css'
import Logo from './../../asseds/images/logo.jpg'
const Header = (props)=>{
    return(
        <div className={h.head}>
           <img className={h.logo} src={Logo} alt="https://webstockreview.net/images/air-clipart-breeze-7.jpg"/>
           <p className={h.p}>breeze-crimea</p>
        </div>
    )
}
export default Header;

