import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import Home from './components/container/Home';
import Routes from  './components/Routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const { store } = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
    document.getElementById('root')
);
