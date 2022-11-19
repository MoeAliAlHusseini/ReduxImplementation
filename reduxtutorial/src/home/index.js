import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import './index.css'

import { increment, decrement } from '../store/counter';

const CONSTANTS = {
    INCREMENT: 'Increment',
    DECREMENT: 'decrement'
}


const Home = () => {
    const usedispatch = useDispatch();
    const counter = useSelector(state => state.counter)

    return (
        <div className='home__wrapper'>
            <button onClick={() => usedispatch(increment())}>{CONSTANTS.INCREMENT}</button>
            <button onClick={() => usedispatch(decrement())}>{CONSTANTS.DECREMENT}</button>
            <p> {counter} </p>
        </div>
    )
}

export default Home