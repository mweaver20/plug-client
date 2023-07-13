import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';
const Nav = () => {
    return (
        <nav className='nav-bar'>
            <ul>
                <li>
                    <NavLink className="link" to="/">page1</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/">page2</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/">page3</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/">page4</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

