import React from 'react';
import { NavLink } from 'react-router-dom';
import"./Nav.css"
const Nav = (props) =>{
    return(
        <nav className="nav">
            <div className="active">
                <NavLink to="/home">
                    Главная
                </NavLink>
            </div>
            <div className="active">
                <NavLink to="/work">
                    Наши работы
                </NavLink>
            </div>
            <div className="active">
                <NavLink to="/help">
                   Помощь в выборе
                </NavLink>
            </div>
            <div className="active">
                <NavLink to="/contact">
                   Наши контакты
                </NavLink>
            </div>
            <div className="active">
                <NavLink to="/mounting">
                   Монтаж
                </NavLink>
            </div>
            
        </nav>
    )
}
export default Nav;