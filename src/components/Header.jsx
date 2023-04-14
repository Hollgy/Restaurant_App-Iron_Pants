// import NavBar from "./Navbar";
import Hamburger from "hamburger-react";
import React, { useState } from 'react';
import { data } from "./NavBarData"
import  LoggaInInput  from "./Signin"


const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <header>
            <div className="header-logo">

                <div className="hamburgar-meny">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
                </div>

                <div className="logo-div">
                    <img
                        className="logo"
                        src="/public/images/LOGO.png"
                        alt="Logotype"
                    />
                </div>
            </div>

            <div className="header-nav">

                <nav className={!isOpen ? 'nav-wrapper' : 'nav-wrapper-active '}>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}><a href={item.url}>{item.title}</a></li>
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
