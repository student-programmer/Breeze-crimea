import React from 'react';
import { NavLink } from 'react-router-dom';
import n from "./Nav.module.css"
const Nav = (props) =>{
    return(
        <nav className={n.nav}>
            <div>
                <NavLink to="/home">
                    Главная
                </NavLink>
            </div>
            <div>
                <NavLink to="/work">
                    Наши работы
                </NavLink>
            </div>
        </nav>
    )
}
export default Nav;