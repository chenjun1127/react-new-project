import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';

const Routes = () => (
    <Router>
        <Switch>            
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </Switch>
    </Router>

);

export default Routes;