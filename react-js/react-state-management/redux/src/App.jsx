import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Timer from './Timer';
import Counter from './Counter';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Timer />
                <Counter />
            </div>
        </Provider>
    );
}

export default App;
