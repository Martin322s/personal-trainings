export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const TICK = 'TICK';

export const startTimer = () => ({ type: START_TIMER });
export const stopTimer = () => ({ type: STOP_TIMER });
export const tick = () => ({ type: TICK });

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementCounter = () => ({ type: INCREMENT });
export const decrementCounter = () => ({ type: DECREMENT });