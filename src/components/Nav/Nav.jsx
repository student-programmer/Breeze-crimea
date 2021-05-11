import React from 'react';
import { NavLink } from 'react-router-dom';
import"./Nav.css"
const Nav = () =>{
    const activRef = React.useRef()
    const [activClass, setActivClass] = React.useState("")
   const  onHandleSetActive = () =>{
    setActivClass()
   }

    return(
        <div className="flex">
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
            <div className={activClass === activRef.current ? 'active' : ""} ref={activRef}>
                <NavLink to="/contact">
                   Контакты
                </NavLink>
            </div>
            <div className={activClass === activRef.current ? 'active' : ""} ref={activRef}>
                <NavLink to="/mounting">
                   Монтаж
                </NavLink>
            </div>
            
        </nav>
        </div>
    )
}
export default Nav;