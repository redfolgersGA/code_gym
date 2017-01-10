import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import routes from './routes';
import App from './App';
import Study from './Study';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory} routes={routes}>
  </Router>
), document.getElementById('root'));

