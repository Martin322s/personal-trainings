// import React from 'react';
// import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const headingElement = React.createElement('h1', null, 'Hello from ReactJS! (Client)');

root.render(headingElement);