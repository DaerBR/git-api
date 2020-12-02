import React from 'react';
import './style.css';
import { Router, Route, Switch } from 'react-router-dom';
import TabsPage from '../../containers/TabsPage';

import Login from '../../containers/Login';
import Page404 from '../Page404';
import history from "../../history";

export const App = () => {
    return (
        <div className="app-wrapper">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={TabsPage} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/404" exact component={Page404} />
                    <Route component={Page404} />
                </Switch>
            </Router>
        </div>
    );

}