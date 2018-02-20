import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import SuperReducer from './reducer';
import {fetchShoes} from './state';
import {shoesListLoaded} from './actions';

const store = createStore(SuperReducer);
fetchShoes().then(shoes => store.dispatch(shoesListLoaded(shoes)));

ReactDOM.render((
    <Provider store={store}>
        <Router/>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
