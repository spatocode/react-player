import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css';
import { ReactPlayer } from './containers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ReactPlayer />
    </Provider>
    ,
    document.getElementById('root')
    );
registerServiceWorker();
