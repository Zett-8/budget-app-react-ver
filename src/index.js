import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import rootReducer from './reducers';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);