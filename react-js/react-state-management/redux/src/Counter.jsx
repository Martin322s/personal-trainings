import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from './actions';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);

    const increment = () => {
        dispatch(incrementCounter());
    };

    const decrement = () => {
        dispatch(decrementCounter());
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>
                +
            </button>
            <button onClick={decrement}>
                -
            </button>
        </div>
    );
};

export default Counter;
