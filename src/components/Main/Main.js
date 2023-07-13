import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from "../../pages/Home/Home";

import './main.css';

const Main = () => {
    return(
        <div className='main'>
            <Nav/>
            <Outlet />
        </div>
    );
};

export default Main;

