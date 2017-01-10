import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Study from './Study';
import RoomShow from './RoomShow';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={Study} />
    <Route path="/rooms/:roomName" component={RoomShow} />
  </Route>
);
