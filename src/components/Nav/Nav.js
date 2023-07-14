import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';
const Nav = () => {
    return (
        <nav className='nav-bar'>
            <ul>
                <li>
                    <NavLink className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="/free">Home</NavLink>
                </li>
                <li>
                    <NavLink className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="/page2">page2</NavLink>
                </li>
                <li>
                    <NavLink className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="/page3">page3</NavLink>
                </li>
                <li>
                    <NavLink className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="/page4">page4</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

