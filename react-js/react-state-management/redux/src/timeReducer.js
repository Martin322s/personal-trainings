import { START_TIMER, STOP_TIMER, TICK } from './actions';

const initialState = {
    time: 0,
    isRunning: false,
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return {
                ...state,
                isRunning: true,
            };
        case STOP_TIMER:
            return {
                ...state,
                isRunning: false,
            };
        case TICK:
            return state.isRunning
                ? {
                    ...state,
                    time: state.time + 1,
                }
                : state;
        default:
            return state;
    }
};

export default timerReducer;
