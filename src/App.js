import React from 'react';
import { hot } from 'react-hot-loader';
import './static/css/reset.css';
import './static/css/index';
import Routers from './routes/index';
const App = () => <Routers/>

export default hot(module)(App);