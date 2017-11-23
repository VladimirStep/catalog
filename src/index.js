import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import catalogApp from './redux/redusers';
import Catalog from './presentations/catalog';

let store = createStore(
    catalogApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Catalog />
    </Provider>,
    document.getElementById('root')
);
