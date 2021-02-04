import React from 'react';
import h from './Header.module.css'
import Logo from './../../asseds/images/logo.jpg'
import { NavLink } from 'react-router-dom';
const Header = (props)=>{
    return(
        <div className={h.head}>
           <img className={h.logo} src={Logo} alt="https://webstockreview.net/images/air-clipart-breeze-7.jpg"/>
           <p className={h.p}>breeze-crimea</p>
           <div className={h.city}>
               <p>г.Симферополь</p>
           </div>
           <div className={h.basketWrap}>
               <NavLink to="/basket">Корзина</NavLink>
           </div>
        </div>
    )
}
export default Header;

