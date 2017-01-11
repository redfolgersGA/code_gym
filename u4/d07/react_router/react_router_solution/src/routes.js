import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import RoomShow from './RoomShow';
import ButlersShow from './ButlersShow';
import Gallery from './Gallery';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/butlers/:butlerName" component={ButlersShow} />
    <Route path="/rooms/:roomName" component={RoomShow} />
  </Route>
);
