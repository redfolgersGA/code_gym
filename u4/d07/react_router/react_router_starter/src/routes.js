import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

export default(
  <Route path="/" component={App}>
  <IndexRoute component={Home}>
  <Route path="/about" component={About} />
  <Route path="/butlers/:butlerName" component={ButlerShow} />
  <Route path="/rooms/:roomName"
  </Route>
);


