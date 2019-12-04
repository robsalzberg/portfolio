import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <ul className="navbar">
            <li>
                <NavLink exact to='/' activeClassName="activeNavButton">Home</NavLink>
                <NavLink exact to='/about' activeClassName="activeNavButton">About</NavLink>
                <NavLink exact to='/projects' activeClassName="activeNavButton">Projects</NavLink>
                <NavLink exact to='/contact' activeClassName="activeNavButton">Contact</NavLink>
            </li>
        </ul>
    );
}

export default Nav;