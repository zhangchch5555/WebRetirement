import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,BrowserRouter } from 'react-router-dom';

import App from './App';
import Result from './Result';
import './index.css';

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
        <Entry />,
  document.getElementById('root')
);
