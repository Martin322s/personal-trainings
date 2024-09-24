import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Timer from './Timer';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Timer />
            </div>
        </Provider>
    );
}

export default App;
