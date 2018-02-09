import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

import App from './App';
import Result from './Result';
import './index.css';

let store = createStore(reducer);

const PrimaryLayout = () => (
    <div>
        <header>
        </header>
        <main>
            <Route path="/" exact component={App} />
            <Route path="/result" component={Result} />
        </main>
    </div>
)

const Entry = () => (
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>
)

ReactDOM.render(
    <Provider store={ store }>
        <Entry />
    </Provider>,
  document.getElementById('root')
);
