import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';
const Nav = () => {
    return (
        <nav className='nav-bar'>
            <ul>
                <li>
                    <NavLink className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="/HourPage">Hourly</NavLink>
                </li>
                <li>
                    <NavLink className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="/DayPage">Daily</NavLink>
                </li>
                <li>
                    <NavLink className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="/WeekPage">Weekly</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

