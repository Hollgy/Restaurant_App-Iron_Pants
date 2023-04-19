// import NavBar from "./Navbar";
import Hamburger from "hamburger-react";
import React, { useState } from 'react';
import { data } from "./NavBarData"
import LoggaInInput from "./Signin"
import { useRecoilState } from 'recoil'
import { renderStatee } from "../utils/conrend";



const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const [render, setRender] = useRecoilState(renderStatee)
    
    const handleNavClick = (itemUrl) => {
        setRender(itemUrl)
        console.log(render);
    }

    return (
        <header>
            <div className="header">

                <div className="hamburger-menu">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
                </div>

                <div className="header-container">
                    <button className="logo-button" onClick={() => setRender('start')}>
                        <img
                            className="logo"
                            src="/images/LOGO.png"
                            alt="Logotype"
                        />
                    </button>
                </div>
            </div>

            <div className="header-nav">

                <nav className={!isOpen ? 'nav-wrapper' : 'nav-wrapper-active '}>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}><button className="nav-buttons" onClick={() => handleNavClick(item.url)}>{item.title}</button></li>
                        ))}
                    </ul>
                    <hr />
                    <LoggaInInput />
                </nav>

            </div>
        </header>
    );
};



export default Header 
