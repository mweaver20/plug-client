import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './root.css';
const Root = () => {
    return(
        <div className='root-container'>
            <Header/>
            <Main/>
        </div>
    );
};

export default Root;

