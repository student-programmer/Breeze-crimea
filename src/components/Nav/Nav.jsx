import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import"./Nav.css";

const Nav = () =>{
    const [open, setOpen] = useState(false)

const activRef = React.useRef()
const [activClass, setActivClass] = React.useState("")
const  onHandleSetActive = () =>{
    setActivClass()
   }
    return(
        
        <div className="flex" style={{marginBottom: open ? "300px" : "",transition: open ? "0.2s ease-in-out" : "0.9s ease-in-out" }}>
            <div id='burger-btn' onClick={() => setOpen(!open)}><span></span></div>
            <div  className="headLink1">
                <NavLink to="/home">
                    Главная
                </NavLink>
            </div>
        <nav className="nav" style={{transform: open ? "translateX(0px) " : ""}}>
               <div id="navNavlink" className={activClass === activRef.current ? 'active' : "", "headLink"} ref={activRef}>
                <NavLink to="/home">
                    Главная
                </NavLink>
            </div>
            <div id="navNavlink" className={activClass === activRef.current ? 'active' : "", "gridItems"} ref={activRef}>
                <NavLink to="/catalog">
                    Каталог
                </NavLink>
            </div>
            <div id="navNavlink" className={activClass === activRef.current ? 'active' : "", "gridItems"} ref={activRef}>
                <NavLink to="/work">
                    Наши работы
                </NavLink>
            </div>
            <div id="navNavlink" className={activClass === activRef.current ? 'active' : "", "gridItems"} ref={activRef}>
                <NavLink to="/contact">
                   Контакты
                </NavLink>
            </div>
            <div id="navNavlink" className={activClass === activRef.current ? 'active' : "", "gridItems"} ref={activRef}>
                <NavLink to="/mounting">
                   Монтаж
                </NavLink>
            </div>
            
        </nav>
        </div>
    )

}

export default Nav;