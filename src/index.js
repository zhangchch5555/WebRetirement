import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import { App } from './containers/App';
import Result from './Result';
import './index.css';

store.subscribe(() => {
    console.log(store.getState());
})

const PrimaryLayout = () => (
    <div>
        <main>
            <Route path="/" exact component={App} />
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
)
