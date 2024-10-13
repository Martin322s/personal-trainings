import React from 'react';
import { observer } from 'mobx-react-lite';
import timerStore from './timerStore';

const Timer = observer(() => {
    const { time, isRunning, startTimer, stopTimer } = timerStore;

    return (
        <div>
            <h1>Timer: {time}s</h1>
            <button onClick={startTimer} disabled={isRunning}>
                Start
            </button>
            <button onClick={stopTimer} disabled={!isRunning}>
                Stop
            </button>
        </div>
    );
});

export default Timer;