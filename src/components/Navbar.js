import React from 'react'

export default function Navbar() {
    return (
        <nav className="navMain">
            <div className="logo">
                <a href="/">Repo Finder</a>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item"><a href="/">Home</a></li>
                <li className="nav__list-item"><a href="/">About</a></li>
            </ul>

        </nav>
    )
}
