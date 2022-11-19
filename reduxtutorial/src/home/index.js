import React from 'react';

import './index.css'

const CONSTANTS = {
    INCREMENT: 'Increment',
    DECREMENT: 'decrement'
}


const Home = () => {
    return (
        <div className='home__wrapper'>
            <button>{CONSTANTS.INCREMENT}</button>
            <button>{CONSTANTS.DECREMENT}</button>
            <p> value </p>
        </div>
    )
}

export default Home