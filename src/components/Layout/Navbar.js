import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navMain">
            <div className="logo">
                <a href="/">Git Finder</a>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item"><NavLink to="/">Home</NavLink></li>
                <li className="nav__list-item"><NavLink to="/about">About</NavLink></li>
            </ul>

        </nav>
    )
}
