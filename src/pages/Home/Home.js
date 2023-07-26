import React from 'react';

import './home.css';

const Home = () => {
    return (
        <main className='homePage'>
            <div className='homeContainer' >
                <div className='homeHead' >
                    <h1 className='homeOpener'>Hello world.</h1>
                    <br></br>
                    <p className='homeP'>Welcome to my plug project! This is a data collection engine I made to track my TV's energy usage. I recorded the current watt usage of the TV via an energy monitoring plug every minute for over two weeks. </p>
                </div>

                <br></br>
                <h2 className='question' >What are the links? </h2>
                <p className='homeP'>The links you see to the left are pages where you can dynamiclly view and insteract with the data from the energy database. The hourly link shows the recorded watt usage for every minute of the selected hour. The daily link shows the total watts recorded for each hour of the selected day. And the weekly link shows the total recorded wattage for each day of the selected week. Each of these pages will load with a default date of July 14th</p>

                <br></br>
                <h2 className='question' >How much data is there? </h2>
                <p className='homeP'>Since I recorded data every minute for over two weeks, I have over 18,000 rows of data collected. Each row with just two columns, a power which holds the wattage retrieved by the plug, and a time stamp of the record insertion.</p>

            </div>
        </main>
    );
}; 

export default Home;

