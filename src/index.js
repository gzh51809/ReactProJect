import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './Redux/store.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './iconfont/iconfont.css';
ReactDOM.render(
    <Provider store = {store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
 );
serviceWorker.unregister();
