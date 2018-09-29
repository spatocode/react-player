import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import storeFactory from './store'
import './index.css';
import { ReactPlayer } from './containers';
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory()

ReactDOM.render(
    <Provider store={store}>
        <ReactPlayer />
    </Provider>
    ,
    document.getElementById('root')
    );
registerServiceWorker();
