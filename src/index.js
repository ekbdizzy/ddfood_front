import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store";
import { BrowserRouter as Router } from 'react-router-dom';


import ErrorBoundry from "./components/error-boundry/error-boundry";
import App from "./components/app";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App/>
            </Router>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);