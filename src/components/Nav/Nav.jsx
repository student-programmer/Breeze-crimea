import React from 'react';
import { NavLink } from 'react-router-dom';
import"./Nav.css"
const Nav = () =>{
    const activRef = React.useRef()
    const [activClass, setActivClass] = React.useState("")
    const onSelectActive = () =>{
        setActivClass()
    }
    return(
        <nav className="nav">
               <div className={activClass === activRef.current ? 'active' : ""} ref={activRef}>
                <NavLink to="/home">
                    Главная
                </NavLink>
            </div>
            <div className={activClass === activRef.current ? 'active' : ""} ref={activRef}>
                <NavLink to="/catalog">
                    Каталог
                </NavLink>
            </div>
            <div className={activClass === activRef.current ? 'active' : ""} ref={activRef}>
                <NavLink to="/work">
                    Наши работы
                </NavLink>
            </div>
            <div className={activClass === activRef.current ? 'active' : ""} ref={activRef} >
                <NavLink to="/help">
                   Помощь в выборе
                </NavLink>
            </div>
            <div className={activClass === activRef.current ? 'active' : ""} ref={activRef}>
                <NavLink to="/contact">
                   Наши контакты
                </NavLink>
            </div>
            <div className={activClass === activRef.current ? 'active' : ""} ref={activRef}>
                <NavLink to="/mounting">
                   Монтаж
                </NavLink>
            </div>
            
        </nav>
    )
}
export default Nav;