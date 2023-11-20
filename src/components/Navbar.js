import React, { useEffect, useRef, useState } from "react";
import '../stylesheets/Navbar.css'
import { NavLink } from "react-router-dom";
import logo from '../assetes/logo.png'

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const fortoggle = useRef();
    function handletoggle() {
        fortoggle.current.classList.toggle('new');
        setToggle(!toggle)
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h3>SQUARE</h3>
                </div>
                <ul className="navbar-ul" ref={fortoggle}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/tutorial">Tutorial</NavLink></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <h3 className="hamburger" onClick={handletoggle}>{toggle === true ? '✖' : '☰'}</h3>
            </nav>
        </>
    )
}

