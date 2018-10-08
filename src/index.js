import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import store from './store';

render((
	<Provider userInfo = {store}>
	  <App />
	</Provider>
), document.querySelector('#root'));