import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, stopTimer, tick } from './actions';

const Timer = () => {
    const dispatch = useDispatch();
    const time = useSelector((state) => state.time);
    const isRunning = useSelector((state) => state.isRunning);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                dispatch(tick());
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, time, dispatch]);

    const handleStart = () => {
        dispatch(startTimer());
    };

    const handleStop = () => {
        dispatch(stopTimer());
    };

    return (
        <div>
            <h1>Time: {time}s</h1>
            <button onClick={handleStart} disabled={isRunning}>
                Start
            </button>
            <button onClick={handleStop} disabled={!isRunning}>
                Stop
            </button>
        </div>
    );
};

export default Timer;
