import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';
import HighCompent from '../components/HighCompent';
import Nav from '../components/Nav';

const tabs = [{
        text: 'Index',
        path: '/',
    },
    {
        text: 'Aout',
        path: '/about',
    },
    {
        text: 'High Compent',
        path: '/high-compent',
    },
]


const Routes = () => (

    <Router>
        <div>
            <Nav tabs={tabs} />
            <Switch>            
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/high-compent" component={HighCompent}/>
            </Switch>
        </div>
    </Router>

);

export default Routes;